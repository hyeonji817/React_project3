import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {

  return (
    <div>
      <Header />
      <Editor />
    </div>
  );
};

export default Edit;