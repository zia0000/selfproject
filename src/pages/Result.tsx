import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //코딩앙마 js #10 라우터 구현
import { useNavigate } from "react-router-dom";
import Answer from "components/Answers";

export default function Result() {
  const navigate = useNavigate();
  // if문이 들어가서 점수별로 다 다르게 해야함
  return (
    <>
      <Answer />
      {/* <span>
        <img src="image/resultdummysmall1.jpg"></img>
        <h1>Result 1</h1>
        <p>
          내 이웃 이름자를 가슴속에 지나가는 같이 옥 있습니다. 어머님, 불러 둘
          사랑과 이웃 아름다운 봅니다. 북간도에 어머님, 토끼, 우는 위에도 겨울이
          사랑과 아직 계십니다. 나는 시와 이름을 멀듯이, 프랑시스 있습니다. 내
          이름과 이름을 봅니다. 릴케 무엇인지 프랑시스 가을로 나는 그리워 내린
          시와 불러 까닭입니다. 어머니 겨울이 쉬이 이국 이런 동경과 새겨지는
          까닭입니다. 써 하나에 새겨지는 한 언덕 잔디가 어머니 위에도 다
          까닭입니다. 보고, 쉬이 이름을 토끼, 이웃 멀듯이, 내 걱정도 프랑시스
          있습니다. 잔디가 북간도에 어머니, 하나에 별 듯합니다.
        </p>
        <p>
          같이 아무 이름과, 별 차 계절이 버리었습니다. 부끄러운 쓸쓸함과 이름자
          이름과, 불러 같이 이름과, 아이들의 우는 있습니다. 하나에 옥 불러 않은
          다 이름을 어머님, 봅니다. 써 노루, 계집애들의 지나가는 까닭입니다.
          계절이 위에 겨울이 가난한 것은 아름다운 하나에 라이너 버리었습니다.
          많은 노새, 무성할 우는 별에도 나는 아이들의 있습니다. 까닭이요, 마리아
          이 봅니다. 하늘에는 가을로 없이 버리었습니다. 하나 덮어 별 이름을
          있습니다.
        </p>
      </span> */}
      <div>공유하기</div>
      <span>
        <button>카톡</button>
        <button>인스타</button>
        <button>트위터</button>
      </span>
      <div>
        {/* 공유하기 버튼 말고 글자에 링크 거는 형식 <Link to="/">home</Link> */}
        <button onClick={() => navigate("/")}>홈으로</button>
      </div>
    </>
  );
}
