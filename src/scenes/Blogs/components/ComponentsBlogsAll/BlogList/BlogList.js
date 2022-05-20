import React, { useEffect, useState } from "react";
import "./BlogList.css";
import MyButton from "../../../../../components/atoms/Buttons/MyButton/MyButton";
import Select from "../../../../../components/atoms/Select/Select";
import BlogForm from "../Blogform/BlogForm";
import ModalInput from "../../../../../components/atoms/Modal/ModalIput/ModalInput";
import InputForm from "../InputForm/InputForm";
import FindSort from "./ComponentsBlogList/FindSort/FindSort";
import Findsortfunction from "./Functionst/FindSort/Findsortfunction";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../../../../helpers/constants/constantsurl";
import axios from "axios";

export default function BlogList({ totalPages, setTotalPages }) {
  const [findSortData, setFindSortData] = useState({ find: "", sort: "" });
  const newId = Math.ceil(Math.random() * 10001101);
  const [modalAddnewBlog, setModalAddnewBlog] = useState(false);
  const [newBlogAdd, setNewBlogAdd] = useState({
    id: newId,
    title: "",
    body: "",
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState({
    _page: searchParams.get("_page") || 1,
    _limit: searchParams.get("_limit") || 10,
  });
 
  
  
  const [datafromurl, setDatafromurl] = useState(
    `?_page=${searchParams.get("_page")}&_limit=${searchParams.get("_limit")}`
    );
    
    

  const [blogs, setBlogs] = useState([
    { id: 1, title: "Blog number 1", body: "popka1" },
    { id: 2, title: "Blog number 2", body: "popka2" },
    { id: 3, title: "Blog number 3", body: "popka3" },
  ]);
  const fullLength = async (fullUrl) => {
    try {
      const postsData = await axios.get(fullUrl);
       setBlogs(postsData.data)
    } catch (error) {
    }
  };


  const [blogsAfterFindesort, setBlogsAfterFindesort] = useState(blogs);
  const selectMenuOptions = [
    { name: "10blogs", value: "10" },
    { name: "20blogs", value: "20" },
    { name: "50blogs", value: "50" },
  ];

  const changeSelectBlogsPage = (e) => {
    setSearchParams({ _page: 1, _limit: e });
    setPage({
      _page: searchParams.get("_page") || 1,
      _limit: searchParams.get("_limit"),
    })
  };

  const deleteBlog = (delBlog) => {
    setBlogs(blogs.filter((item) => item !== delBlog));
  };

  const changeBlog = (change) => {
    console.log(change);
  };

  const AddingBlog = () => {
    setBlogs([newBlogAdd, ...blogs]);
    setNewBlogAdd({ id: newId, title: "", body: "" });
    setModalAddnewBlog(false);
  };

  useEffect(() => {
    const x = Findsortfunction(blogs, findSortData);
    setBlogsAfterFindesort(x);
  }, [findSortData, blogs]);

  const resetfilter = () => {
    setBlogsAfterFindesort(blogs);
    setFindSortData({ find: "", sort: "" });
  };

  
  useEffect(() => {
    setDatafromurl(
      `?_page=${searchParams.get("_page")}&_limit=${searchParams.get("_limit")}`
    );
    setPage({
      _page: searchParams.get("_page") || 1,
      _limit: searchParams.get("_limit"),
    })
    console.log('test')
  }, [searchParams, blogs]);

  useEffect(()=>{
    fullLength(BASE_URL + datafromurl)
  },[datafromurl,  page._limit])

  return (
    <div className="allBlogs">
      <div className="allBlogs__menu">
        <div className="allBlogs__menu-button">
          <MyButton
            className="allBlogs__menu--button"
            onClick={() => setModalAddnewBlog(true)}
          >
            Add NEW Blog
          </MyButton>
          <MyButton className="allBlogs__menu--button" onClick={resetfilter}>
            Reset
          </MyButton>
        </div>
      </div>
      <div className="allBlogs__menu--selest">
        <div>
          <FindSort
            setDataFindsort={setFindSortData}
            dataFindsort={findSortData}
          />
        </div>
        <Select
          options={selectMenuOptions}
          onChange={(e) => changeSelectBlogsPage(e)}
          styleforDef={{ display: "none" }}
          disabled={true}
        />
      </div>
      <div></div>

      <ModalInput visible={modalAddnewBlog} setVisible={setModalAddnewBlog}>
        <InputForm
          changeModal={setModalAddnewBlog}
          blog={newBlogAdd}
          setBlog={setNewBlogAdd}
          onClick={AddingBlog}
        />
      </ModalInput>
      {blogs.length > 0 ? (
        blogsAfterFindesort.map((item) => (
          <BlogForm
            dataForm={item}
            key={item.id}
            deleteBlog={deleteBlog}
            changeBlog={changeBlog}
          />
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>No any blogs yet</h1>
      )}
    </div>
  );
}
