import Result from "pages/Result";
import React from "react";
import { useState, useEffect } from "react";
import Answer from "components/Answers";
import { useDispatch, useSelector } from "react-redux";
import { addScore, initScore } from "../store/modules/quiz";
import { RootState } from "../store";
import { nextPage } from "../store/modules/quiz"; //내가 만든거 첨부

function addNum(num: number) {
  console.log(num);
}

//더미 질문
function Question() {
  const data = [
    {
      title: "one",
      content: "Pero hice todo este llanto por nada",
      score: 1,
      image: "image/dummyone.jpg",
    },
    {
      title: "two",
      content: "Pero hice todo este llanto por nada",
      score: 2,
      image: "image/dummytwo.jpg",
    },
    {
      title: "three",
      content: "Pero hice todo este llanto por nada",
      score: 1,
      image: "image/dummythree.jpg",
    },
    {
      title: "four",
      content: "Pero hice todo este llanto por nada",
      score: 2,
      image: "image/dummyfour.jpg",
    },
    {
      title: "five",
      content: "Pero hice todo este llanto por nada",
      score: 1,
      image: "image/dummyone.jpg",
    },
    {
      title: "six",
      content: "Pero hice todo este llanto por nada",
      score: 2,
      image: "image/dummytwo.jpg",
    },

    {
      title: "seven",
      content: "Pero hice todo este llanto por nada",
      score: 1,
      image: "image/dummythree.jpg",
    },
    {
      title: "eight",
      content: "Pero hice todo este llanto por nada",
      score: 2,
      image: "image/dummyfour.jpg",
    },
  ];

  // const answers = [{ score: 1, content: "당신은 000 타입입니다." }];

  //const [<상태 값 저장 변수>, <상태 값 갱신 함수>] = useState(<상태 초기 값>);
  const [page, setPage] = useState<number>(1);
  const [clicked, setClicked] = useState<number>(0);
  const [sum, setSum] = useState(0);

  const buttonHandler = (number: number) => {
    setClicked(clicked + 1);
    setSum(number + sum);
  };

  useEffect(() => {
    // clicked를 2로 나눴을 때 나머지가 0이면 즉 나눠지면 다음 페이지로 근데 처음이 0이라서 0은 제외
    if (clicked !== 0 && !(clicked % 2)) {
      setPage(page + 1);
    }
  }, [clicked]);

  //내가 실험하고 있는 코드
  // 버튼이 눌리고,라디오 버튼중에 하나가 선택되면
  // nextButtonHandler && scoreButtonHandler
  // useEffect(() => {
  //   if (ture) {function setClicked() && setSum)
  //   setPage(page + 1);}
  // }, [page]);

  // redux code. //quiz.ts 참고
  const quiz = useSelector((state: RootState) => state.quiz.score);
  console.log(`redux store : ${quiz}`);

  const dispatch = useDispatch();
  const answerHandler = (score: number) => {
    setClicked(clicked + 1);
    dispatch(addScore({ score }));
  };
  const scoreInit = (score: number) => {
    dispatch(initScore());
  };

  if (page === 3) {
    return (
      <>
        <Result />
        <h1>점수는 {sum} 이에요~</h1>
        {/* 공유하기랑 홈버튼이랑 인스타 버튼을 여기다가 한번에 달기 */}
      </>
    );
  }

  return (
    <div>
      <h1>이 페이지는 {page} 입니다</h1>
      {/* {data.slice(page * 2 - 2, page * 2).map((item) => ( */}
      {data.slice(page * 4 - 4, page * 4).map((item) => (
        <React.Fragment key={item.title}>
          <h1>{item.title}</h1>
          <article>{item.content}</article>
          {/* <img>{item.image}</img> */}
          {/* {item.image && <img src={item.image} alt={item.image} />} */}
          <button onClick={() => answerHandler(item.score)}>next</button>
          <input type="radio" name="answers" />
          <button>reduxnext</button>
          <button onClick={() => scoreInit(item.score)}>init</button>
          {/* <button onClick={scoreTo5}>5점</button> */}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Question;
