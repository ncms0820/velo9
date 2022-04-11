import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import Header from "../header/header";

const Write = (props) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  console.log(navigate);
  console.log(navigateState);

  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <>
      <Header />
      <div className="container">
        <MDEditor
          value={value}
          onChange={setValue}
          height={700}
          toolbarHeight={50}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
          }}
        />
      </div>
    </>
  );
};

export default Write;
