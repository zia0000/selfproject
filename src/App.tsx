import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/Main";
import Research from "pages/Research";
import Result from "pages/Result";
import Nav from "components/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/research" element={<Research />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// 프로젝트 초기 설정
// 프로젝트 설계

// mbti 검사하는 사이트
// 메인 페이지 /
// 검사 페이지 -> 여러개 /research
// 결과 페이지 /result

// Nav
// 개발할 때 페이지 이동을 쉽게 하면서 개발속도향상!

// 검사 페이지
// 1페이지 A or B 1점
// 2페이지 C or D 2점
// 3페이지 E or F 3점
// 결과페이지 6점
// 6점인 당신 뭐시기입니다.

// 한 페이지 내에서 /route 의 이동이 X
// 안에 컴포넌트 (질문과 사지선다) 바꿔준다.
// A or B A를 선택한 순간
// C or D의 문제로 element를 바꾼다.
// let sum = 1
// sum = sum + 2
// E or F 마지막 문제를 선택하면 move to 결과페이지
// home > research > result
// research 2번 문제를 풀다가 페이지에서 뒤로가기를 하면
// home 으로

// /1 A or B
// /2 C or D
// /3 E or F

// /2?선택한값=A
// /3?선택한값=D

// redux(global 저장소)
// 1페이지에서 선택한 값을 redux sum
// 2페이지에서 선택한 값을 redux sum
// 결과페이지에서는 저장된 값을 가져오기만 하면된다.
// redux를 쓸줄알면 제일 쉬운 방법이다.

// / 한 번 꾸며보고
// 질문지페이지를 만든다.
// 중간에 사진이 있고 선택지가 4가지다.
// - css는 나중에 해도됨.
// - 선택지가 선택되었을 때 console 값을 찍어본다.
// 지금은 한페이지를 만들었지만
// 여러페이지로 만들 수 있을까
// -> 동적라우팅

// redux로 결과값을 저장
