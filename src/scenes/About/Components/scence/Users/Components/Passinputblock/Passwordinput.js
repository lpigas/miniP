import React from "react";
import InputPassword from "../../../../../../../components/atoms/Input/InputPassword";
import MyButton from "../../../../../../../components/atoms/Buttons/MyButton/MyButton";
import "./Passwordinput.css";
import { Link } from "react-router-dom";
export default function Passwordinput({ datablock, setDataBlock, onClick }) {
  return (
    <div>
      <InputPassword
        type="email"
        placeholder="Enter your mail"
        className="login__passwordModal"
        onChange={(e) => setDataBlock({ ...datablock, login: e.target.value })}
        value={datablock.login}
      />
      <InputPassword
        type="password"
        placeholder="Enter your password"
        className="login__passwordModal"
        onChange={(e) =>
          setDataBlock({ ...datablock, password: e.target.value })
        }
        value={datablock.password}
      />
      <div style={{ display: "flex" }}>
        <MyButton onClick={onClick}> LogIn</MyButton>
        <MyButton>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="../aboute"
          >
            Back
          </Link>
        </MyButton>
      </div>
    </div>
  );
}
