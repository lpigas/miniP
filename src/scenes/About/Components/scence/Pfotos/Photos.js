import React, { useEffect, useState } from "react";
import Layout from "../../../../../components/layouts/Layout/Layout";
import "./Photos.css";
import NextPrev from "./Components/NextPrevBlock/NextPrev";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../../../../helpers/constants/constantsurl";
import axios from "axios";
import Form from "./Components/Form/Form";
export default function Photos() {
  const [numberOfPage, setNumberOfPage] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [fullDataUrl, setFullDataUrl] = useState({
    _page: searchParams.get("_page") || 1,
    _limit: 50,
  });
  const [photoData, setPhotoData] = useState([]);
  const photoUrl = `${BASE_URL}photos?_page=${fullDataUrl._page}&_limit=${fullDataUrl._limit}`;
  useEffect(() => {
    setSearchParams({ _page: 1, limit: 50 });
  }, []);

  useEffect(() => {
    setFullDataUrl({
      _page: searchParams.get("_page") || 1,
      _limit: 50,
    });
    feachPhotoData();
  }, [searchParams]);

  const feachPhotoData = async () => {
    try {
      const datas = await axios.get(photoUrl);
      setPhotoData(datas.data);
    } catch (e) {}
  };

  return (
    <Layout>
      <div className="photosblock">
        <div>
          <NextPrev
            numberOfPage={numberOfPage}
            setNumberOfPage={setNumberOfPage}
          />
        </div>
        <div className="photosblock__conteiner">
          <Form data={photoData} />
        </div>
        <div></div>
      </div>
    </Layout>
  );
}
