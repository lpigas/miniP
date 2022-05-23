import React, { useEffect, useState } from "react";
import Layout from "../../../components/layouts/Layout/Layout";
import BlogList from "./ComponentsBlogsAll/BlogList/BlogList";
import NextPrevPage from "./ComponentsBlogsAll/BlogList/ComponentsBlogList/NextPrev/NextPrevPage";
import { BASE_URL } from "../../../helpers/constants/constantsurl";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Select from "../../../components/atoms/Select/Select";

export default function BlogAll() {
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [lengths, setLengths] = useState();
  const [limit, setLimit] = useState(+searchParams.get("_limit") || 10);
  const [page, setPage] = useState(+searchParams.get("_page"));
  
  const fullLength = async () => {
    try {
      const postsData = await axios.get(BASE_URL);
      setLengths(postsData.data.length);
      setTotalPages(Math.ceil(lengths / limit));
    } catch (error) {}
  };
  const optionPage = [];
  if (totalPages) {
    for (let i = 1; i <= totalPages; i++) {
      optionPage.push({ name: `${+i}`, value: `${+i}` });
    }
  }
  const enterSelectpage = (pageSelect) => {
    setSearchParams({ _page: +pageSelect, _limit: limit });
  };

  useEffect(() => {
    setLimit(+searchParams.get("_limit"));
    setPage(+searchParams.get("_page"));
    fullLength();
    setTotalPages(Math.ceil(lengths / limit));
  }, [lengths, limit, searchParams]);

  return (
    <Layout>
      <div>
        <BlogList
          totalPages={totalPages}
          setTotalPages={setTotalPages}
        ></BlogList>
      </div>
      <div>
        <Select
          options={optionPage}
          onChange={(e) => enterSelectpage(e)}
          styleforDef={{ display: "none" }}
          value={`${page}`}
        />
      </div>

      <NextPrevPage
        numberOfPage={numberOfPage}
        setNumberOfPage={setNumberOfPage}
        totalPages={totalPages}
      />
    </Layout>
  );
}
