import React, { useEffect, useState } from "react";
import Layout from "../../../../../components/layouts/Layout/Layout";
import MyModal from "../../../../../components/atoms/Modal/ModalIput/ModalInput";
import Passwordinput from "./Components/Passinputblock/Passwordinput";
import "./Users.css";
import { BASE_URL } from "../../../../../helpers/constants/constantsurl";
import TablBlock from "./Components/TablBlock/TablBlock";
import axios from "axios";

export default function Users() {
  const usersUrl = `${BASE_URL}users`;
  const [usersData, setUsersData] = useState([]);
  const [enterLoginPassword, setEnterLoginPassword] = useState({
    login: "",
    password: "",
  });
  const [modalLogin, setModalLogin] = useState(true);
  const [blockedModal, setBlockedModal] = useState(true);

  
  // console.log(enterLoginPassword);


  const changePassword = () => {
    setBlockedModal(false);
    setModalLogin(false);
  };

  const backUsersData = async () => {
    try {
      const datas = await axios.get(usersUrl);
      setUsersData(datas.data);
    } catch (e) {}
  };
  useEffect(() => {
    backUsersData();
  }, []);
  const Sorting = tipeSort =>{
    console.log(tipeSort)
  }

  return (
    <Layout>
      <div className="usersblock">
        <div
          style={
            modalLogin
              ? { display: "none" }
              : { display: "flex", flexDirection: "column" }
          }
        >
          <div
            style={{
              margin: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            New data
          </div>
          <div>
            <table className="table__Users">
              <thead>
                <tr>
                  <td className="table__UsersData_name table__UsersData_datasSmall" onClick={() =>Sorting('id')}>id</td>
                  <td className="table__UsersData_name table__UsersData_datasSmall">Name</td>
                  <td className="table__UsersData_name table__UsersData_datasSmall">Username</td>
                  <td className="table__UsersData_name">Email</td>
                  <td className="table__UsersData_name">Address</td>
                  <td className="table__UsersData_name">Phone</td>
                  <td className="table__UsersData_name table__UsersData_datasSmall">Website</td>
                  <td className="table__UsersData_name">Company</td>
                </tr>
              </thead>

              <TablBlock data={usersData} />
            </table>
          </div>
        </div>
      </div>

      <MyModal
        visible={modalLogin}
        setVisible={setModalLogin}
        pass={blockedModal}
      >
        <Passwordinput
          datablock={enterLoginPassword}
          setDataBlock={setEnterLoginPassword}
          onClick={changePassword}
        />
      </MyModal>
    </Layout>
  );
}
