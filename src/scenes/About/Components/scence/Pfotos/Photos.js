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
  const [photoLength, setPhotoLength] = useState([]);
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
      const lengthPhotos = await axios.get(`${BASE_URL}photos`);
      setPhotoLength(lengthPhotos.data);
      setPhotoData(datas.data);
    } catch (e) {}
  };
  console.log(photoLength.length);
  return (
    <Layout>
      <div className="photosblock">
        <div>
          <NextPrev
            numberOfPage={numberOfPage}
            setNumberOfPage={setNumberOfPage}
            totalPages={photoLength.length / fullDataUrl._limit}
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
