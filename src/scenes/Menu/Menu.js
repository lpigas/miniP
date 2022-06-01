import React, { useState } from "react";
import Layout from "../../components/layouts/Layout/Layout";
import LeftMenu from "./Components/leftMenu/LeftMenu";
import "./Menu.css";
import Clock from "./Components/clock/Clock";

export default function Menu() {
  const [time, setTime] = useState({ hour: "", min: "", sec: "" });
  const newbutton = (e) => {
    if (e === "Users") {
      console.log(e);
    }
  };

  return (
    <Layout>
      <div className="Menu">
        <div className="Menu__block">
          <Clock foundTime={setTime} />
        </div>
        <div className="Menu__leftMenu">
          <LeftMenu onClick={newbutton} />
        </div>
        <div className="digitalClock">
          {time.hour} - {time.min} - {time.sec}
        </div>
      </div>
    </Layout>
  );
}
