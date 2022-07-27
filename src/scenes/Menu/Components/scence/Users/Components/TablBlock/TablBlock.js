import React from "react";

export default function TablBlock({ data }) {
  return (
    <tbody style={{ padding: "15px" }}>
      {data.length ? (
        data.map((item) => (
          <tr key={item.name + item.id}>
            <td className="table__UsersData_datas table__UsersData_datasSmall">
              {item.id}
            </td>
            <td className="table__UsersData_datas table__UsersData_datasSmall">
              {item.name}
            </td>
            <td className="table__UsersData_datas table__UsersData_datasSmall">
              {item.username}
            </td>
            <td className="table__UsersData_datas">{item.email}</td>
            <td className="table__UsersData_datas">
              geo:{item.address.geo.lat}/{item.address.geo.lgn}, zip-code:{" "}
              {item.address.zipcode} Adress: {item.address.city},{" "}
              {item.address.street}, {item.address.suite}
            </td>
            <td className="table__UsersData_datas">{item.phone}</td>
            <td className="table__UsersData_datas table__UsersData_datasSmall">
              {item.website}
            </td>
            <td className="table__UsersData_datas">
              Company:{item.company.name}, {item.company.catchPhrase}, Type:
              {item.company.bs}
            </td>
            {""}
          </tr>
        ))
      ) : (
        <tr>
          <td></td>
        </tr>
      )}
    </tbody>
  );
}
