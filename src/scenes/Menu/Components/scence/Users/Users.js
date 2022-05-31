import React, { useEffect, useState } from "react";
import Layout from "../../../../../components/layouts/Layout/Layout";
import MyModal from "../../../../../components/atoms/Modal/ModalIput/ModalInput";
import Passwordinput from "./Components/Passinputblock/Passwordinput";
import "./Users.css";
import { BASE_URL } from "../../../../../helpers/constants/constantsurl";
import TablBlock from "./Components/TablBlock/TablBlock";
import axios from "axios";
import Datapasswords from "../../../../../helpers/JSON/Datapaswords.json";

export default function Users() {
  const usersUrl = `${BASE_URL}users`;
  const [usersData, setUsersData] = useState([]);
  const [sortData, setSortData] = useState("id");
  const [iterforSort, setIterforSort] = useState(true);
  const [enterLoginPassword, setEnterLoginPassword] = useState({
    login: "",
    password: "",
  });
  const [modalLogin, setModalLogin] = useState(true);
  const [blockedModal, setBlockedModal] = useState(true);

  const changePassword = () => {
    Datapasswords.map((item) => {
      if (
        item.login === enterLoginPassword.login &&
        item.password === enterLoginPassword.password
      ) {
        setBlockedModal(false);
        setModalLogin(false);
      }
      return 1;
    });
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

  const Sorting = (tipeSort) => {
    if (tipeSort !== sortData) {
      if (tipeSort === "id") {
        setUsersData(usersData.sort((a, b) => a.id - b.id));
      } else {
        usersData.sort((a, b) => a[tipeSort].localeCompare(b[tipeSort]));
      }
    } else if (tipeSort === sortData) {
      if (tipeSort === "id" && iterforSort === true) {
        setUsersData(usersData.sort((a, b) => b.id - a.id));
        setIterforSort(false);
      } else if (tipeSort === "id" && iterforSort === false) {
        setUsersData(usersData.sort((a, b) => a.id - b.id));
        setIterforSort(true);
      } else if (tipeSort !== "id" && iterforSort === true) {
        setUsersData(
          usersData.sort((a, b) => a[tipeSort].localeCompare(b[tipeSort]))
        );
        setIterforSort(false);
      } else if (tipeSort !== "id" && iterforSort === false) {
        setUsersData(
          usersData.sort((a, b) => b[tipeSort].localeCompare(a[tipeSort]))
        );
        setIterforSort(true);
      }
    }
    setSortData(tipeSort);
  };

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
                  <td
                    className="table__UsersData_name table__UsersData_datasSmall"
                    onClick={() => Sorting("id")}
                  >
                    id
                  </td>
                  <td
                    className="table__UsersData_name table__UsersData_datasSmall"
                    onClick={() => Sorting("name")}
                  >
                    Name
                  </td>
                  <td
                    className="table__UsersData_name table__UsersData_datasSmall"
                    onClick={() => Sorting("username")}
                  >
                    Username
                  </td>
                  <td
                    className="table__UsersData_name"
                    onClick={() => Sorting("email")}
                  >
                    Email
                  </td>
                  <td className="table__UsersData_name">Address</td>
                  <td
                    className="table__UsersData_name"
                    onClick={() => Sorting("phone")}
                  >
                    Phone
                  </td>
                  <td
                    className="table__UsersData_name table__UsersData_datasSmall"
                    onClick={() => Sorting("website")}
                  >
                    Website
                  </td>
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
