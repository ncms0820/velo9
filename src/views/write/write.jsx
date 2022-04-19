import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Write = ({ userId }) => {
  const navigate = useNavigate();
  const editorRef = useRef();
  const [content, setContent] = useState();
  const [tags, setTags] = useState([]);
  console.log(tags);
  const goToPrevious = () => {
    navigate(-1);
  };
  const onSave = () => {
    const editorInstance = editorRef.current.getInstance();
    const getContent_md = editorInstance.getMarkdown();
    console.log("- - 마크다운 - - ");
    console.log(getContent_md);
    const getContent_html = editorInstance.getHTML();
    console.log("- - HTML - -");
    console.log(getContent_html);
    setContent(getContent_md);
  };
  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <input type="text" placeholder="제목을 입력해 주세요.." />
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
            <div className={styles.img}>이미지 표시 공간</div>
            <input type="file" name="uploadFile" />
            <button id="uploadBtn">Upload</button>
          </div>
          <div className={styles.access}>
            <h1>공개 설정</h1>
            <Toggle />
          </div>
        </div>
        <div className={styles.series_field}>
          <h1>시리즈 추가하기</h1>
          <div>시리즈 목록</div>
        </div>
      </div>
      <footer className={styles.footer}>
        <ReactiveButton style={{ borderRadius: "5px" }} color={"dark"} idleText={"나가기"} onClick={goToPrevious} />
        <div>
          <ReactiveButton style={{ borderRadius: "5px" }} color={"secondary"} idleText={"임시 저장"} onClick={onSave} />
          <ReactiveButton style={{ borderRadius: "5px" }} color={"green"} idleText={"저장"} />
        </div>
      </footer>
    </div>
  );
};

export default Write;
