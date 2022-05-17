import React from "react";
import Select from "../../../../../../../components/atoms/Select/Select";

const style = {
  marginBottom: "5px",
};
export default function FindSort({ setDataFindsort, dataFindsort }) {
  const selectsortOptions = [
    { name: "sort by Id", value: "id" },
    { name: "sort by title", value: "title" },
    { name: "sort by body", value: "body" },
  ];
  return (
    <div>
      <Select
        options={selectsortOptions}
        onChange={(e) => setDataFindsort({ ...dataFindsort, sort: e })}
        style={style}
      ></Select>
      <input
        placeholder="Enter your find Title"
        onChange={(e) =>
          setDataFindsort({ ...dataFindsort, find: e.target.value })
        }
      ></input>
    </div>
  );
}
