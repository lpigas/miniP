import React from "react";
import Layout from "../../../../../components/layouts/Layout/Layout";
import "./Helps.css";
import { IMG_DATA_HELPS } from "../../../../../helpers/constants/constantsimgdata";
import HelpForm from "./Components.js/HelpForms/HelpForm";

export default function Helps() {
  return (
    <Layout>
      <div className="Helps">
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Home block
        </h1>
        <div className="Helps__Form--imgHome">
          {IMG_DATA_HELPS.map(
            (item) => item.href.includes("home") && <HelpForm data={item} />
          )}
        </div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Menu block
        </h1>
        <div className="Helps__Form--imgMenu">
          {IMG_DATA_HELPS.map(
            (item) => item.href.includes("menu") && <HelpForm data={item} />
          )}
        </div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Blogs block{" "}
        </h1>
        <div className="Helps__Form--imgBlogs">
          {IMG_DATA_HELPS.map(
            (item) => item.href.includes("blog") && <HelpForm data={item} />
          )}
        </div>
      </div>
    </Layout>
  );
}
