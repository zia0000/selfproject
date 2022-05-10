const ADD_SCORE = "quiz/ADD_SCORE";
const MINUS_SCORE = "quiz/MINUS_SCORE";
const INIT_SCORE = "quiz/INIT_SCORE";
const SCORE5 = "quiz/SCORE5";
const NEXT_PAGE = "quiz/NEXT_PAGE"; //내가 만든 함수

// https://github.com/joshephan/fastcampus_quiz_project

// redux-toolkit 한 번 사용해보세요. (이후에 리덕스에 익숙해지면)
// redux를 더 쉽게 사용하기 위한 tool이구요.
// redux team에서 만듬
// 거의 공식 라이브러리죠 물론 redux 측에서 생각하면

// 액션 생성 함수
export function addScore({ score }: { score: number }) {
  return {
    type: ADD_SCORE,
    payload: { score }, // score를 받아서 더해지는 역할
  };
}

export function minusScore({ score }: { score: number }) {
  return {
    type: MINUS_SCORE,
    payload: { score }, // score를 받아서 빼지는 역할
  };
}

export function initScore() {
  return {
    type: INIT_SCORE,
  };
}

export function scoreTo5() {
  return {
    type: SCORE5,
  };
}

export function nextPage({ page }: { page: number }) {
  return {
    type: NEXT_PAGE,
    payload: { page },
  };
}

// 초기값
const initialState: { score: number; page: number } = {
  score: 0,
  page: 1,
};

// 리듀서
export default function quiz(state = initialState, action: any) {
  switch (action.type) {
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + action.payload.score,
      };
    case MINUS_SCORE:
      return {
        ...state,
        score: state.score - action.payload.score,
      };
    case INIT_SCORE:
      return {
        ...state,
        score: 0,
      };
    case SCORE5:
      return {
        ...state,
        score: 5,
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      return state;
  }
}

//액션을 생성해서 리듀서에 넣어주는 형식으로 진행됨.
//그리고 이걸 다른 함수에 가져다 넣으면(index.ts같은) 이 폴더 밖에서도 사용할 수 있음.
