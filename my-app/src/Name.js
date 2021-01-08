import React, { useState } from "react";
import axios from "axios";

const getName = async (slug) =>
  //await axios.post(`${process.env.REACT_APP_API}/name`, {
  await axios.post("/name", {
    slug,
  });

export const Name = () => {
  const [name, setName] = useState("");
  const [show, setShow] = useState("");

  const handleClick = async () => {
    console.log(process.env.REACT_APP_API);
    try {
      const res = await getName(name);
      console.log(res.data.post.slug);
      setShow(res.data.post.slug);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Input your name please</h2>
      <div className="form-group m-4">
        <input
          type="text"
          className="form-control m-4"
          placeholder="Recipient's username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary m-4"
          type="button"
          onClick={handleClick}
        >
          Button
        </button>
        {show && (
          <div>
            <h2>{show}</h2>
          </div>
        )}
      </div>
    </div>
  );
};
