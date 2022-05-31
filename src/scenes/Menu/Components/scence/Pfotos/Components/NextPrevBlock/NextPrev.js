import MyButton from "../../../../../../../components/atoms/Buttons/MyButton/MyButton";
// import "./NextPrevPage.css";
import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function NextPrevPage({
  numberOfPage = 1,
  setNumberOfPage,
  totalPages,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("_page") || numberOfPage);
  useEffect(() => {
    setPage(+searchParams.get("_page") || numberOfPage);
    setNumberOfPage(+searchParams.get("_page"));
  }, [numberOfPage, totalPages, searchParams]);

  const nextPage = () => {
    if (numberOfPage >= totalPages) {
      setNumberOfPage(totalPages);
    } else {
      setSearchParams({ _page: page + 1 });
      setNumberOfPage(page + 1);
    }
  };
  const prevPage = () => {
    if (numberOfPage <= 1) {
      setNumberOfPage(1);
    } else {
      setSearchParams({ _page: page - 1 });
      setNumberOfPage(page - 1);
    }
  };
  return (
    <div className="NextPrevPage">
      <MyButton disabled onClick={prevPage}>
        Prev Page
      </MyButton>
      <div>
        {numberOfPage} from {totalPages}
      </div>
      <MyButton onClick={nextPage}>Next Page</MyButton>
    </div>
  );
}
