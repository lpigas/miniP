import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../../../../../helpers/constants/constantsurl";

export default function (newBlogAdd) {
  let x = [];
  const fullLength = async () => {
    try {
      console.log(x);
      const postsData = await axios.post(BASE_URL, newBlogAdd);

      // const postsData1 = await axios.get(postsData.headers.location);
      // x = postsData1.data
      console.log(postsData.data);
    } catch (error) {}
  };
  fullLength();
  return x;
}
