import React from "react";

export default function FormComments({ data, onClick, leng }) {
  // console.log(data)
  return (
    <tr className="comments__data" onClick={onClick}>
      <td className="comments__data--td">{data.id}</td>
      <td className="comments__data--td">{data.email}</td>
      <td className="comments__data--td">{data.name}</td>
      <td className="comments__data--td">
        {data.body.length <= leng
          ? data.name
          : data.name.slice(0, leng) + "..."}
      </td>
    </tr>
  );
}
