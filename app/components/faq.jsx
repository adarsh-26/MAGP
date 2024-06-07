"use client";

import React, { useEffect, useState } from "react";
import ".././components/faq.css";
import Footer from "./footer";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

export default function Faq(props) {
  const head1 = "FAQs";
  const head2 = "Have A Question?";
  const head3 = "Solve Your Doubts";

  const data1=props.data1 

  

  const [displaydata, setDisplaydata] = useState(data1[0].matter);

  const [data, setData] = useState(data1);

  const clickHandler = (id) => {
    console.log(id);
    const newData = data.map((item) => {
      if (item?.id === id) {
        setDisplaydata(item?.matter);
        console.log(displaydata);

        return { ...item, highlighted: true };
      }
      return { ...item, highlighted: false };
    });
    setData(newData);
  };

  useEffect(() => {
    setData(data1);
  }, []);
  return (
    <div>
      <div className="mid">
        <h2>{head1}</h2>
        <h1>{head2}</h1>
        <h3>{head3}</h3>
      </div>
      <div className="bottom">
        <div className="list">
          {data?.map((item) => (
            <Button
              className="but"
              onClick={() => clickHandler(item?.id)}
              type={item?.highlighted ? "primary" : "default"}
              style={{
                width: "100%",
                display: "flex",
                paddingLeft: "10%",
                paddingRight: "10%",
                justifyContent: "space-between",
                backgroundColor: item?.highlighted ? "#6f2da8" : undefined,
                color: item?.highlighted ? "#fff" : "#6f2da8",
              }}
            >
              <h3>{item?.text}</h3>
              <span style={{ marginLeft: "auto" }}>
                <RightOutlined />
              </span>
            </Button>
          ))}
        </div>
        <div className="content">

          {displaydata?.map((item) => (
             <div className="matter">
<div className="sub">
                <h3>{item.head}</h3>
                <p>{item.text}</p>
              </div>
             </div>
              
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
