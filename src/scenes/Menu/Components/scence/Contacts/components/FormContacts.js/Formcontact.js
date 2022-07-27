import React from "react";
import { CONTACTS_DATA } from "../../../../../../../helpers/constants/constantcontacts";
import "./Formcontacts.css";
export default function Formcontact() {
  return (
    <div className="contacts">
      <div className="contacts_title">
        {" "}
        <strong>Our Contacts:</strong>{" "}
      </div>
      <div className="contacts__data contacts__data--name">
        {" "}
        <strong>Name:</strong> {CONTACTS_DATA.Surname}{" "}
        {CONTACTS_DATA["First Name"]}
      </div>
      <div className="contacts__data contacts__data--phone">
        {" "}
        <strong>Phone:</strong> {CONTACTS_DATA.Phone}
      </div>
      <div className="contacts__data contacts__data--mail">
        {" "}
        <strong>E-mail:</strong> {CONTACTS_DATA["E-mail"]}
      </div>
      <div className="contacts__data contacts__data--adress">
        {" "}
        <strong>Adress:</strong> {CONTACTS_DATA.Adress}
      </div>
    </div>
  );
}
