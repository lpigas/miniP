import React, { useEffect, useState } from "react";
import Layout from "../../../../../components/layouts/Layout/Layout";
import "./Comments.css";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../../../../helpers/constants/constantsurl";
import axios from "axios";
import FormComments from "./Components/FormComments/FormComments";
import NextPrev from "../../scence/Pfotos/Components/NextPrevBlock/NextPrev";
import MyModal from "../../../../../components/atoms/Modal/ModalIput/ModalInput";
import MyButton from "../../../../../components/atoms/Buttons/MyButton/MyButton";

export default function Comments() {
  const [commentsData, setCommentsData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [commentsLength, setCommentsLength] = useState([]);
  const [openModalComments, setOpenModalComments] = useState(false);
  const [openModalData, setOpenModalData] = useState([]);
  const lengthofComment = 60;

  useEffect(()=>{
    setSearchParams({ _page: 1, _limit: 100 });
  },[])

  const commentsUrl = `${BASE_URL}comments?_page=${+searchParams.get(
    "_page"
  )}&_limit=100`;
  const getCommentsData = async () => {
    try {
      const comData = await axios.get(commentsUrl);
      const lengthData = await axios.get(`${BASE_URL}comments`);
      setCommentsData(comData.data);
      setCommentsLength(lengthData.data.length);
    } catch (e) {}
  };
  useEffect(() => {
    setSearchParams({ _page: numberOfPage, _limit: 100 });
    getCommentsData();
  }, [searchParams]);

  const openModalComment = (dataToModal) => {
    setOpenModalComments(true);
    setOpenModalData(dataToModal);
  };
  const closeModalComment = () => {
    setOpenModalComments(false);
  };
  return (
    <Layout>
      <div className="comments">
        {commentsData.length > 0 ? (
          <div>
            <NextPrev
              numberOfPage={numberOfPage}
              setNumberOfPage={setNumberOfPage}
              totalPages={commentsLength / 100}
            />
            <table className="comments__table">
              <thead className="comments__title">
                <tr>
                  <td>Id</td>
                  <td>E-mail</td>
                  <td> Title</td>
                  <td>Comments</td>
                </tr>
              </thead>
              <tbody style={{ border: "1px solid black" }}>
                {commentsData.map((item) => (
                  <FormComments
                    data={item}
                    key={item.id}
                    leng={lengthofComment}
                    onClick={() => openModalComment(item)}
                  />
                ))}
              </tbody>
            </table>
            <div className="modalComments">
              {openModalData.name && (
                <MyModal
                  pass={true}
                  visible={openModalComments}
                  setVisible={setOpenModalComments}
                >
                  <div className="openModalComments">
                    <div className="openModalComments__firstpart">
                      {openModalData.id}. {openModalData.name.toUpperCase()}
                    </div>
                    <a
                      href={openModalData.email}
                      className="openModalComments__email"
                    >
                      {" "}
                      {openModalData.email}
                    </a>
                    <div className="openModalComments__body">
                      {" "}
                      {openModalData.body}
                    </div>
                    <MyButton onClick={closeModalComment}>Close</MyButton>
                  </div>
                </MyModal>
              )}
            </div>
          </div>
        ) : (
          <h2 className="NoanyComments"> No any Comments</h2>
        )}
      </div>
    </Layout>
  );
}
