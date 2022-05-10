import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; //코딩앙마 js #10 라우터 구현

export default function Test() {
  const { milktea } = useParams();
  console.log(milktea);
  const users = ["john", "rhea", "semi"];
  return (
    <>
      <h1>여기는 {milktea} 유저의 페이지입니다.</h1>
      <div>
        {users.map((user) => (
          <div>
            <Link to={`/test/${user}`}>{user}의 페이지로 이동</Link>
          </div>
        ))}
      </div>
      {/* <div>
        <Link to="/test/1">test 1</Link>
      </div>
      <div>
        <Link to="/test/2">test 2</Link>
      </div>
      <div>
        <Link to="/test/3">test 3</Link>
      </div> */}
    </>
  );
}
