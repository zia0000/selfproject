import Result from "pages/Result";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

function Answer() {
  const dataone = {
    title: "answer2",
    content:
      "계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헤일 듯합니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요,내일 밤이 남은 까닭이요,아직 나의 청춘이 다하지 않은 까닭입니다.",
    image: "image/resultdummysmall1.jpg",
  };
  // const data = [
  //   {
  //     title: "answer2",
  //     content:
  //       "계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헤일 듯합니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요,내일 밤이 남은 까닭이요,아직 나의 청춘이 다하지 않은 까닭입니다.",
  //     image: "image/resultdummysmall1.jpg",
  //   },
  //   {
  //     title: "answer3",
  //     content:
  //       "계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헤일 듯합니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요,내일 밤이 남은 까닭이요,아직 나의 청춘이 다하지 않은 까닭입니다.",
  //     image: "image/resultdummysmall1.jpg",
  //   },
  //   {
  //     title: "answer4",
  //     content:
  //       "계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헤일 듯합니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요,내일 밤이 남은 까닭이요,아직 나의 청춘이 다하지 않은 까닭입니다.",
  //     image: "image/resultdummysmall1.jpg",
  //   },
  //   {
  //     title: "answer5",
  //     content:
  //       "계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헤일 듯합니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요,내일 밤이 남은 까닭이요,아직 나의 청춘이 다하지 않은 까닭입니다.",
  //     image: "image/resultdummysmall1.jpg",
  //   },
  //   {
  //     title: "answer6",
  //     content:
  //       "계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헤일 듯합니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요,내일 밤이 남은 까닭이요,아직 나의 청춘이 다하지 않은 까닭입니다.",
  //     image: "image/resultdummysmall1.jpg",
  //   },
  // ];

  const [sum, setSum] = useState(0);

  const quizScore = useSelector((state: RootState) => state.quiz.score);
  console.log(quizScore);

  return (
    <div>
      {dataone.slice(1).map((item) => (
        <React.Fragment key={item.title}>
          <h1>{item.title}</h1>
          <article>{item.content}</article>
        </React.Fragment>
      ))}
    </div>
  );
}

// const [page, setPage] = useState<number>(1);
//   const [clicked, setClicked] = useState<number>(0);
//   const [sum, setSum] = useState(0);

// if (page === 10){
//     return()
// }

export default Answer;
