import React, { useState } from "react";
import "./MyAccordian.css";

const MyAccordian = ({ ques, ans }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="main-heading">
        <p className=" ques" onClick={() => setShow(!show)}>
          {show ? "➖" : "➕"}
        </p>
        <h3 className="ques">{ques}</h3>
      </div>
      <div className="ansbox">{show && <p className="ans">{ans}</p>}</div>
    </>
  );
};

export default MyAccordian;
