import React from "react";

export default function Form({ data }) {
  return (
    <div>
      {data.length <= 0 ? (
        <h1>Reddy Photos from Server</h1>
      ) : (
        data.map((item) => (
          <div key={item.url} className="photosblock__conteiner--photo">
            <img
              alt={item.title}
              src={item.url}
              className="photosblock__conteiner--photoImg"
            />
          </div>
        ))
      )}
    </div>
  );
}
