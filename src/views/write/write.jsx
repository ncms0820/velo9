import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactiveButton from "reactive-button";
import styles from "./_write.module.scss";

//React Tag Input
import ReactTagInput from "@pathofdev/react-tag-input";
import "react-tagsinput/react-tagsinput.css";
import "@pathofdev/react-tag-input/build/index.css";

// TOAST UI Editor Plugins
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import chart from "@toast-ui/editor-plugin-chart";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "tui-color-picker/dist/tui-color-picker.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import uml from "@toast-ui/editor-plugin-uml";

//TOGGLE SWITCH
import Toggle from "react-toggle";
import { unstable_batchedUpdates } from "react-dom";
import Error from "../etc/error";

const Write = ({ dbService, functionService, userId }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const editorRef = useRef();
  const titleRef = useRef();
  const introduceRef = useRef();
  const seriesAddRef = useRef();

  ///// what I need to upload this writes
  const [data, setData] = useState({
    postId: null,
    title: null,
    introduce: null,
    content: "",
    access: "PUBLIC",
    seriesId: null,
    thumbnailFileName: null,
  });
  const [tags, setTags] = useState([]);
  ////
  const [preview, setPreview] = useState(" ");
  const [toggle, setToggle] = useState(true);
  const [seriesToggle, setSeriesToggle] = useState(false);
  const [seriesList, setSeriesList] = useState();
  const [loading, setLoading] = useState(false);
  const [watcher, setWatcher] = useState(true);
  //
  const goToPrevious = () => {
    navigate(-1);
  };
  // toggle 작동시 access 바꾸기
  const switchToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      setData((prev) => {
        return { ...prev, access: "PRIVATE" };
      });
    } else {
      setData((prev) => {
        return { ...prev, access: "PUBLIC" };
      });
    }
  };
  // 수정시 값 불러오기
  const fetching = async () => {
    await getSeriesInfo();
    if (state) {
      unstable_batchedUpdates(async () => {
        const fetchingData = await dbService.getWrite(state.postId);
        setData({
          postId: fetchingData.postId,
          title: fetchingData.title,
          introduce: fetchingData.introduce,
          content: fetchingData.content,
          access: fetchingData.access,
          seriesId: fetchingData.series && fetchingData.series.seriesId,
          thumbnailFileName: fetchingData.thumbnail && fetchingData.thumbnail.fileName,
        });
        setTags(fetchingData.tags);
        if (fetchingData.thumbnail) {
          const thumb = await dbService.encoderThumbnail(fetchingData.thumbnail.fileName);
          setPreview(thumb);
        }
        if (fetchingData.access === "PUBLIC") {
          setToggle(true);
        } else {
          setToggle(false);
        }
      });
    }
  };

  // uploadFile
  const uploadFile = async (event) => {
    const formData = new FormData();
    const inputFile = event.target.files[0];
    formData.append("uploadFile", inputFile);
    const file = await dbService.postThumbnamil(formData);
    unstable_batchedUpdates(() => {
      setData((prev) => {
        return { ...prev, thumbnailFileName: file.fileName };
      });
      setPreview(file.thumbnail);
    });
  };

  // function service 시리즈 불러오기 및 더하기
  const findSeriesId = async (event) => {
    const itemLists = document.querySelectorAll(".series_list_write");
    itemLists.forEach((element) => {
      if (element.classList.contains("selected_item")) {
        element.classList.remove("selected_item");
      }
    });
    const item = event.currentTarget;
    await item.classList.add("selected_item");
    if (await item.classList.contains("selected_item")) {
      setData((prev) => {
        return { ...prev, seriesId: item.id };
      });
    }
  };
  const getSeriesInfo = async () => {
    const list = await functionService.getSeriesList();
    setSeriesList(list);
  };

  const onAddSeries = async () => {
    const name = seriesAddRef.current.value;
    if (name !== null) {
      await functionService.addSeries(name);
    }
    setSeriesToggle(false);
    getSeriesInfo();
  };

  /// 저장 구간

  /// save Point
  const sendPost = async (postData) => {
    const savedId = await dbService.postWrite(
      data.postId,
      postData.title,
      postData.introduce,
      postData.content,
      data.access,
      data.seriesId,
      tags,
      data.thumbnailFileName
    );
    setData((prev) => {
      return { ...prev, postId: savedId.data.data };
    });
    return savedId.data.data;
  };

  const onSave = () => {
    const promise = new Promise((resolve) => {
      const editorInstance = editorRef.current.getInstance();
      const getContent_md = editorInstance.getMarkdown();
      const titleValue = titleRef.current.value;
      const introduceValue = introduceRef.current.value;
      const data = {
        content: getContent_md,
        title: titleValue,
        introduce: introduceValue,
      };
      resolve(data);
    });
    return promise;
  };

  // 버튼 클릭 이벤트들
  const onSaveButton = async () => {
    const postData = await onSave().then((data) => {
      setData((prev) => {
        return { ...prev, title: data.title, content: data.content, introduce: data.introduce };
      });
      return data;
    });
    const savedId = await sendPost(postData);
    const nickname = userId.nickname;
    navigate("/read", {
      state: { content: { member: { nickname }, postId: savedId } },
    });
  };

  const onSaveButtonTemp = async () => {
    const postData = await onSave().then((data) => {
      setData((prev) => {
        return { ...prev, title: data.title, content: data.content, introduce: data.introduce };
      });
      return data;
    });
    if (data.postId === null) {
      const savedId = await sendPost(postData);
      setData((prev) => {
        return { ...prev, title: savedId };
      });
    }
    await dbService.writeTemporary(data.postId, postData.title, postData.content);
    console.log("success");
  };

  const selectSeriesId = () => {
    const item = document.getElementById(data.seriesId);
    if (watcher) {
      if (item != null) {
        item.classList.add("selected_item");
        setWatcher(false);
        console.log("hi?");
      }
    }
  };
  const reset = () => {
    const promise = new Promise((resolve) => {
      setData((prev) => {
        return { ...prev, seriesId: null };
      });
      resolve();
    });
    promise.then(() => {
      const itemLists = document.querySelectorAll(".series_list_write");
      itemLists.forEach((element) => {
        if (element.classList.contains("selected_item")) {
          element.classList.remove("selected_item");
        }
      });
    });
  };
  useEffect(() => {
    fetching();
    setTimeout(() => setLoading(true), 500);
  }, []);

  useEffect(() => {
    setTimeout(() => selectSeriesId(), 800);
  }, [data, seriesList]);

  return (
    <>
      {loading ? (
        <div className={styles.body}>
          <div className={styles.title}>
            <input type="text" placeholder="제목을 입력해 주세요.." defaultValue={data.title} ref={titleRef} required />
          </div>
          <hr />
          <ReactTagInput
            tags={tags}
            placeholder="Tags... (type and press enter)"
            maxTags={10}
            editable={true}
            readOnly={false}
            removeOnBackspace={true}
            onChange={(newTags) => setTags(newTags)}
          />
          <div className="container">
            <Editor
              ref={editorRef}
              initialValue={data.content}
              height="35rem"
              previewStyle="vertical"
              plugins={[chart, codeSyntaxHighlight, colorSyntax, tableMergedCell, uml]}
            />
          </div>
          <div className={styles.meta_info}>
            <div>
              <div className={styles.image_field}>
                <h1>포스트 썸네일</h1>
                <div className={styles.img}>
                  <img src={preview} alt="none" />
                </div>
                <input type="file" name="uploadFile" onChange={uploadFile} />
              </div>
              <div className={styles.access}>
                <h1>공개 설정</h1>
                <Toggle onClick={switchToggle} defaultChecked={toggle} />
              </div>
            </div>
            <div>
              <h1>INTRODUCE</h1>
              <textarea ref={introduceRef} defaultValue={data.introduce} cols="50" rows="10"></textarea>
            </div>
            <div className={styles.series_field}>
              <div className={styles.series_header}>
                <h1>시리즈 목록</h1>
                <div>
                  <button onClick={reset}>리셋</button>
                  <button onClick={() => setSeriesToggle(!seriesToggle)}>시리즈 추가하기</button>
                </div>
              </div>
              {seriesToggle && (
                <div className={styles.series_add}>
                  <input ref={seriesAddRef} type="text" />
                  <button onClick={onAddSeries}>추가하기</button>
                </div>
              )}
              {seriesList &&
                seriesList.data.map((card) => (
                  <div
                    key={card.seriesId}
                    id={card.seriesId}
                    className={`${styles.series_card} series_list_write`}
                    onClick={findSeriesId}
                  >
                    <h2>{card.seriesName}</h2>
                  </div>
                ))}
            </div>
          </div>
          <footer className={styles.footer}>
            <ReactiveButton style={{ borderRadius: "5px" }} color={"dark"} idleText={"나가기"} onClick={goToPrevious} />
            <div>
              <ReactiveButton
                style={{ borderRadius: "5px" }}
                color={"secondary"}
                idleText={"임시 저장"}
                onClick={onSaveButtonTemp}
              />
              <ReactiveButton
                style={{ borderRadius: "5px" }}
                color={"green"}
                idleText={"저장"}
                onClick={onSaveButton}
              />
            </div>
          </footer>
        </div>
      ) : (
        <Error title="Loading" />
      )}
    </>
  );
};

export default Write;
