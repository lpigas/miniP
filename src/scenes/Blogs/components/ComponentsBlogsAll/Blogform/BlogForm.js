import React from "react";
import MyButton from "../../../../../components/atoms/Buttons/MyButton/MyButton";
import "./BlogForm.css";

export default function BlogForm({ dataForm, changeBlog, deleteBlog }) {
  return (
    <div className="BlogForm" key={dataForm.id}>
      <div className="Blogs">
        {dataForm.id}.
        {dataForm.title.length > 60
          ? `${dataForm.title.slice(0, 60)}...`
          : dataForm.title}
        <div className="dataFormBody">
          {dataForm.body.length > 60
            ? `${dataForm.body.slice(0, 60)}...`
            : dataForm.body}
        </div>
      </div>
      <div className="BlogsButton">
        <MyButton className="Change-del" onClick={() => changeBlog(dataForm)}>
          Change
        </MyButton>
        <MyButton className="Change-del" onClick={() => deleteBlog(dataForm)}>
          Delete
        </MyButton>
      </div>
    </div>
  );
}
