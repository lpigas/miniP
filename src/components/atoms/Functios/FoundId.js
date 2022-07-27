import React from "react";
import { useParams } from "react-router-dom";
import About from "../../../scenes/About/About";
import Blogs from "../../../scenes/Blogs/Blogs";
import Home from "../../../scenes/Home/Home";

export default function FoundId() {
  let params = useParams();
  // console.log(params)
  return (
    <div>
      <About id={params.store} id1={params.productId} />
    </div>
  );
}
