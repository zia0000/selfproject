import { useState, useEffect } from "react";
import Research from "./Research";
export default function Main() {
  return (
    <>
      <h1>¡GENREME!</h1>
      <div>
        <button>play</button>
      </div>
      <footer>inspired by spotify</footer>
    </>
  );
}
/* 삭제 금지
import { useState, useEffect } from "react";

export default function Main() {
  const [name, setName] = useState("");
  const [sum, setSum] = useState(0);

  let printOne = () => {
    console.log("one");
  };

  function printTwo() {
    console.log("two");
  }

  function addNum(num: number) {
    setSum(sum + num);
  }

  useEffect(() => {
    console.log(name);
  }, [name]);

  const questions: Array<{ q: string }> = [
    { q: "aaaaaaaaaaaaaa" },
    { q: "bbbbbbbbbbbb" },
    { q: "cccccccccc" },
  ];

  return (
    <>
      <h1>Home</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <span>1. aaaaaaaaaaaaaa</span>
        <span>2. bbbbbbbbbbbb</span>
        <span>3. cccccccccc</span>

        {questions.map((item) => (
          // item = questions[0]
          // item = questions[1]
          <div>{item.q}</div>
        ))}

      </div>
      <button onClick={() => printOne()}>클릭</button>
      <button onClick={() => printTwo()}>클릭2</button>
      <div>
        <button onClick={() => addNum(2)}>+2</button>
        <button onClick={() => addNum(3)}>+3</button>
        {sum}
      </div>
    </>
  );
}
*/
