import React from "react";
import Layout from "../../components/layouts/Layout/Layout";
import LeftMenu from "./Components/leftMenu/LeftMenu";
import "./Menu.css";

export default function About() {
  const newbutton = (e) => {
    if (e === "Users") {
      console.log(e);
    }
  };

  return (
    <Layout>
      <div className="Menu">
        <div className="Menu__block">
          <div className="Menu__block-Text">
            <h1>Menu Block </h1>
            <p> here you can found many placeholder menu</p>
            <p> Users , comments , photo menu</p>
          </div>
        </div>
        <div className="Menu__leftMenu">
          <LeftMenu onClick={newbutton} />
        </div>
      </div>
    </Layout>
  );
}
