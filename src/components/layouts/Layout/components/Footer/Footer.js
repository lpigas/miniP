import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <table className="table">
        <thead>
          <tr className="bodysTr">
            <td className="footer__link"></td>
            <td className="footer__link">Home</td>
            <td className="footer__link">Menu</td>
            <td className="footer__link">Blog</td>
          </tr>
        </thead>
        <tbody>
          <tr className="bodysTr">
            <td className="footer__link"></td>
            <td className="footer__link"></td>
            <td className="footer__link">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="../menu/users"
              >
                Users
              </Link>
            </td>
            <td className="footer__link">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="../blog/blogs?_page=1&_limit=10"
              >
                Blogs 10pcs
              </Link>
            </td>
          </tr>
          <tr className="bodysTr">
            <td className="footer__link"></td>
            <td className="footer__link"></td>
            <td className="footer__link">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="../menu/photos?_page=1"
              >
                Photos
              </Link>
            </td>
            <td className="footer__link">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="../blog/blogs?_page=1&_limit=20"
              >
                Blogs 20pcs
              </Link>
            </td>
          </tr>
          <tr className="bodysTr">
            <td className="footer__link"></td>
            <td className="footer__link"></td>
            <td className="footer__link">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/menu/comments"
              >
                Comments
              </Link>
            </td>
            <td className="footer__link">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="../blog/blogs?_page=1&_limit=50"
              >
                Blogs 50pcs
              </Link>
            </td>
          </tr>
          <tr className="bodysTr">
            <td className="footer__link"></td>
            <td className="footer__link"></td>
            <td className="footer__link">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="../menu/contacts"
              >
                Contacts
              </Link>
            </td>
            <td className="footer__link"></td>
          </tr>
          <tr className="bodysTr">
            <td className="footer__link"></td>
            <td className="footer__link"></td>
            <td className="footer__link ">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="../menu/helps"
              >
                Map website
              </Link>
            </td>
            <td className="footer__link"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
