import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import ReactiveButton from "reactive-button";
import styles from "./_write.module.scss";
const Write = (props) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  console.log(navigate);
  console.log(navigateState);
  const goToPrevious = () => {
    navigate(-1);
  };

  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <input type="text" placeholder="제목을 입력해 주세요.." />
      </div>
      <hr />
      <div className="container">
        <MDEditor
          value={value}
          onChange={setValue}
          height={500}
          toolbarHeight={50}
          draggable={true}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
          }}
        />
      </div>
      <footer className={styles.footer}>
        <ReactiveButton style={{ borderRadius: "5px" }} color={"dark"} idleText={"나가기"} onClick={goToPrevious} />
        <div>
          <ReactiveButton style={{ borderRadius: "5px" }} color={"secondary"} idleText={"임시 저장"} />
          <ReactiveButton style={{ borderRadius: "5px" }} color={"primary"} idleText={"저장"} />
        </div>
      </footer>
    </div>
  );
};

export default Write;
