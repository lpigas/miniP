import React from "react";
import Layout from "../../../../../components/layouts/Layout/Layout";
import Formcontact from "./components/FormContacts.js/Formcontact";
import Styleofcontacts from "./components/FormContacts.js/styleofcontacts/Styleofcontacts";
import "./Contact.css";
export default function Contacts() {
  return (
    <Layout>
      <div className="contacts_block">
        <Styleofcontacts>
          <Formcontact />
        </Styleofcontacts>
      </div>
    </Layout>
  );
}
