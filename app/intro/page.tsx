import Image from "next/image";
import Card from "../components/card";
import "../components/card.css";
import Intro from "../components/intro";

export default function Home() {
  const introhead= "This is heading"
  const introsubhead="This is subheading This is subheading This is subheading This is subheading This is subheading"
  const introimg="./images/introimg.jpg"
  const arr1 = [
    {
      heading: "This is heading 1",
      subhead: "This is sub heading 1",
      text: "This is paragraph 1 This is paragraph This is paragraph This is paragraph This is paragraph This is paragraph This is paragraph.",
      img1: "./images/Introduction.jpg",
    },
    {
      heading: "This is heading 2",
      subhead: "This is sub heading 2",
      text: "This is paragraph 2 This is paragraph This is paragraph This is paragraph This is paragraph This is paragraph This is paragraph.",
      img1: "./images/Introduction.jpg",
    },
    {
      heading: "This is heading 3",
      subhead: "This is sub heading 3",
      text: "This is paragraph 3 This is paragraph This is paragraph This is paragraph This is paragraph This is paragraph This is paragraph.",
      img1: "./images/Introduction.jpg",
    },
    {
      heading: "This is heading 4",
      subhead: "This is sub heading 4",
      text: "This is paragraph 4 This is paragraph This is paragraph This is paragraph This is paragraph This is paragraph This is paragraph.",
      img1: "./images/Introduction.jpg",
    },
  ];

  // const renderDottedLines = () => {
  //   const lines = [];
  //   for (let i = 0; i < arr1.length - 1; i++) {
  //     lines.push(
  //       <div
  //         key={`line-${i}`}
  //         className="dotted-line"
  //         style={{
  //           height: "10px",
  //           marginTop: "2px"
  //         }}
  //       >
  //       <svg width="432" height="462" viewBox="0 0 432 462" fill="none" xmlns="http://www.w3.org/2000/svg">
  //       <path d="M7.99958 0.5C-19.1671 163.5 27.4996 483.4 431.5 459" stroke="#553272" stroke-width="2" stroke-dasharray="16 16"/>
  //       </svg>
  //       </div>
  //     );
  //   }
  //   return lines;
  // };

  return (
    <div >
      <Intro heading={introhead}
          subhead={introsubhead} introimg={introimg}>
      </Intro>
      {arr1.map((item, index) => (
        <Card 
          key={index}
          classDot={`${index === arr1.length -1 ? 'last' : ''}`}
          className={`${index % 2 === 1 ? 'reverse' : 'card'}`}
          heading={item.heading}
          subhead={item.subhead}
          text={item.text}
          img1={item.img1}
        ></Card>
        
      ))}
      {/* {renderDottedLines()} */}
    </div>
  );
}
