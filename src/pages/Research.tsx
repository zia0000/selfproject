import { useState, useEffect } from "react";
import Question from "components/Questions";

export default function Research() {
  const [sum, setSum] = useState(0);

  function addNum(num: number) {
    setSum(sum + num);
    console.log(sum + num);
  }

  return (
    <>
      <h1>Question</h1>
      <h3>여기에 문제가 들어갑니다.</h3>
      <Question />
    </>
  );
}
