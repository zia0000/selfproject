import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import quiz from "./modules/quiz";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["quiz"],
};

const rootReducer = combineReducers({
  quiz,
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
