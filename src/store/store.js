import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducers";
import friendsReducer from "./reducers/friendsReducer";
import chatReducer from "./reducers/chatReducers";
import roomReducer from "./reducers/roomReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  friends: friendsReducer,
  chat: chatReducer,
  room: roomReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
