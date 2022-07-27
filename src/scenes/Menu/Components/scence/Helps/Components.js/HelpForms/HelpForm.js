import React from "react";

export default function HelpForm({ data }) {
  console.log(data);
  return (
    <div>
      <h3 style={{ display: "flex", justifyContent: "center" }}>{data.alt}</h3>
      <a key={data.href} href={data.href}>
        <img className="imgHelpForm" alt={data.alt} src={data.src}></img>
      </a>
    </div>
  );
}
