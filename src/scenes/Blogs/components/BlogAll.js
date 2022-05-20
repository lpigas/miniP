import React, { useEffect, useState } from "react";
import Layout from "../../../components/layouts/Layout/Layout";
import BlogList from "./ComponentsBlogsAll/BlogList/BlogList";
import NextPrevPage from "./ComponentsBlogsAll/BlogList/ComponentsBlogList/NextPrev/NextPrevPage";
import { BASE_URL } from "../../../helpers/constants/constantsurl";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export default function BlogAll() {
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [lengths, setLengths] = useState();
  const [page, setPage] = useState(+searchParams.get("_limit") || 10);

  const fullLength = async () => {
    try {
      const postsData = await axios.get(BASE_URL);
      setLengths(postsData.data.length);
      setTotalPages(Math.ceil(lengths / page));
    } catch (error) {}
  };

  useEffect(() => {
    setPage(+searchParams.get("_limit"));
    fullLength();
    setTotalPages(Math.ceil(lengths / page));
  }, [lengths, page, searchParams]);

  return (
    <Layout>
      <div>
        <BlogList
          totalPages={totalPages}
          setTotalPages={setTotalPages}
        ></BlogList>
      </div>
      <NextPrevPage
        numberOfPage={numberOfPage}
        setNumberOfPage={setNumberOfPage}
        totalPages={totalPages}
      />
    </Layout>
  );
}
