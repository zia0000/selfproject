import { useState, useEffect } from "react";

export default function Research() {
  const [sum, setSum] = useState(0);

  function addNum(num: number) {
    setSum(sum + num);
    console.log(sum + num);
  }

  return (
    <>
      <h1>Question</h1>
      <h3>this is where the question goes</h3>
      <div>
        <span>
          <h4>one</h4>
          Pero hice todo este llanto por nada
          <button onClick={() => addNum(1)}>❤️</button>
          <img src=""></img>
        </span>
        <span>
          <h4>two</h4>
          Pero hice todo este llanto por nada
          <button onClick={() => addNum(2)}>❤️</button>
        </span>
        <span>
          <h4>three</h4>
          Pero hice todo este llanto por nada
          <button onClick={() => addNum(3)}>❤️</button>
        </span>
        <span>
          <h4>four</h4>
          Pero hice todo este llanto por nada
          <button onClick={() => addNum(4)}>❤️</button>
        </span>
      </div>
      <button>back</button>
      <button>next</button>
    </>
  );
}

//한번만 클릭할 수 있게 하는 기능 필요함.
