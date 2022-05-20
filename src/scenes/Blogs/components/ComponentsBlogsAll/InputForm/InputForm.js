import React from "react";
import Input from "../../../../../components/atoms/Input/Input";
import MyButton from "../../../../../components/atoms/Buttons/MyButton/MyButton";
export default function InputForm({
  blog,
  setBlog,
  onClick,
  disabled = false,
}) {
  return (
    <div>
      <Input
        disabled={disabled}
        className="ModalInutNewBlog"
        placeholder="Enter Title"
        value={blog.title}
        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
      />
      <Input
        disabled={false}
        className="ModalInutNewBlog EnterYourBlog"
        placeholder="Enter your blog"
        value={blog.body}
        onChange={(e) => setBlog({ ...blog, body: e.target.value })}
      />
      <MyButton onClick={onClick}>Add blog</MyButton>
    </div>
  );
}
