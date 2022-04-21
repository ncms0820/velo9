import { useCallback, useEffect, useRef, useState } from "react";
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
  const [initialData, setInitialData] = useState();

  ///// what I need to upload this writes
  const [postId, setPostId] = useState(null);
  const [title, setTitle] = useState(initialData && initialData.title);
  const [introduce, setIntroduce] = useState(null);
  const [content, setContent] = useState(initialData && initialData.content);
  const [access, setAccess] = useState();
  const [seriesId, setSeriesId] = useState(null);
  const [tags, setTags] = useState([]);
  const [thumbnailFileName, setThumbnailFileName] = useState(null);
  ////
  const [preview, setPreview] = useState(" ");
  const [toggle, setToggle] = useState(false);
  const [seriesToggle, setSeriesToggle] = useState(false);
  const [seriesList, setSeriesList] = useState();
  const [oneTimeChecker, setOneTimeChecker] = useState(true);
  const [loading, setLoading] = useState(true);
  //
  const goToPrevious = () => {
    navigate(-1);
  };
  const switchToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      setAccess("PUBLIC");
    } else {
      setAccess("PRIVATE");
    }
  };
  const uploadFile = async (event) => {
    const formData = new FormData();
    const inputFile = event.target.files[0];
    formData.append("uploadFile", inputFile);
    const file = await dbService.postThumbnamil(formData);
    setThumbnailFileName(file.fileName);
    setPreview(file.thumbnail);
  };

  const findSeriesId = async (event) => {
    const itemLists = document.querySelectorAll(".series_list_write");
    itemLists.forEach((element) => {
      if (element.classList.contains("selected_item")) {
        element.classList.remove("selected_item");
      }
    });
    const item = event.currentTarget;
    await item.classList.toggle("selected_item");
    if (await item.classList.contains("selected_item")) {
      setSeriesId(item.id);
    } else {
      setSeriesId(null);
    }
  };

  // function service
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

  const fetching = () => {
    if (state) {
      unstable_batchedUpdates(async () => {
        const fetchingData = await dbService.getWrite(state.postId);
        const fetchingDataThumbnail = fetchingData.thumbnail;
        setInitialData(fetchingData);
        setPostId(fetchingData.postId);
        setTitle(fetchingData.title);
        setIntroduce(fetchingData.introduce);
        setContent(fetchingData.content);
        setAccess(fetchingData.access);
        setSeriesId(fetchingData.series.sereisId);
        setTags(fetchingData.tags);
        if (fetchingDataThumbnail !== null) {
          setThumbnailFileName(fetchingDataThumbnail);
        }

        if (fetchingData.access === "PUBLIC") {
          setToggle(true);
        } else {
          setToggle(false);
        }
      });
    }
    setTimeout(() => setLoading(false), 1000);
  };
  const sendPost = async (data) => {
    const savedId = await dbService.postWrite(
      postId,
      data.title,
      data.introduce,
      data.content,
      access,
      seriesId,
      tags,
      thumbnailFileName
    );
    return savedId.data.data;
  };

  /// save Point
  const onSave = () => {
    const promise = new Promise((resolve, reject) => {
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
  const onSaveButton = async () => {
    const data = await onSave().then((data) => {
      setTitle(data.titleValue);
      setContent(data.getContent_md);
      setIntroduce(data.introduceValue);
      return data;
    });
    const pageNumber = await sendPost(data);
    const nickname = userId.nickname;
    navigate("/read", {
      state: { content: { member: { nickname }, postId: pageNumber } },
    });
  };
  const onSaveButtonTemp = async () => {
    let savedId = "";
    const data = await onSave().then((data) => {
      setTitle(data.titleValue);
      setContent(data.getContent_md);
      setIntroduce(data.introduceValue);
      return data;
    });
    if (oneTimeChecker === true) {
      savedId = await sendPost(data);
      setPostId(savedId);
      console.log("실행됨");
      setOneTimeChecker(false);
    }
    console.log(oneTimeChecker);
    await dbService.writeTemporary(savedId, title, content);
    console.log("success");
  };
  useEffect(() => {
    getSeriesInfo();
    fetching();
  }, []);
  useEffect(() => {
    console.log(loading);
    setContent(content);
  }, [loading]);
  return (
    <>
      {!loading ? (
        <div className={styles.body}>
          <div className={styles.title}>
            <input type="text" placeholder="제목을 입력해 주세요.." defaultValue={title} ref={titleRef} />
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
              initialValue={content}
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
              <textarea ref={introduceRef} defaultValue={introduce} cols="30" rows="10"></textarea>
            </div>
            <div className={styles.series_field}>
              <div className={styles.series_header}>
                <h1>시리즈 목록</h1>
                <button onClick={() => setSeriesToggle(!seriesToggle)}>시리즈 추가하기</button>
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
        <Error title={"Loading"} />
      )}
    </>
  );
};

export default Write;
