import { React, useState } from "react";
import { questions } from "../accordian/api";
import MyAccordian from "./MyAccordian";
import "./Accordian.css";

const Accordian = () => {
  const [data, setData] = useState(questions);

  return (
    <>
      <section className="main-div">
        <h1>React Interview FAQ</h1>
        {data.map((curData) => {
          const { id } = curData;
          return <MyAccordian key={id} {...curData} />;
        })}
      </section>
    </>
  );
};

export default Accordian;
