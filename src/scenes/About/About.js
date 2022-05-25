import React from "react";
import Layout from "../../components/layouts/Layout/Layout";
import LeftMenu from "./Components/leftMenu/LeftMenu";
import "./About.css";

export default function About() {
  const newbutton = (e) => {
    if (e === "Users") {
      console.log(e);
    }
  };

  return (
    <Layout>
      <div className="About">
        <div className="About__block">
          <div className="About__block-Text">About</div>
        </div>
        <div className="About__leftMenu">
          <LeftMenu onClick={newbutton} />
        </div>
      </div>
    </Layout>
  );
}
