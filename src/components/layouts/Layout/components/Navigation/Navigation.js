import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import VisualButton from "../../../../atoms/Buttons/VisualButton/VisualButton";

export default function Navigation() {
  let id = document.location.pathname;

  return (
    <div className="nav__menu">
      <div className="nav__menu">
        <VisualButton
          imgurl="https://cdn.w600.comps.canstockphoto.com/about-me-stock-photo_csp32110446.jpg"
          value={
            <Link
              to="../about"
              className={`link__button ${id.includes("about") && "active"}`}
            >
              About
            </Link>
          }
        >
          {" "}
        </VisualButton>
      </div>
      <div className="nav__menu">
        <VisualButton
          imgurl="https://staticrm.rmr.rocks/uploads/Image/blog_logo.jpg"
          value={
            <Link
              to="../blog"
              className={`link__button ${id.includes("blog") && "active"}`}
            >
              Blog
            </Link>
          }
        >
          {" "}
        </VisualButton>
      </div>
      <div className="nav__menu">
        <VisualButton
          imgurl="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
          value={
            <Link
              to="../home"
              className={`link__button ${id.includes("home") && "active"}`}
            >
              Home
            </Link>
          }
        >
          {" "}
        </VisualButton>
      </div>
    </div>
  );
}
