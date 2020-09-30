import { combineReducers, createStore, applyMiddleware } from "redux";
import messageReducer from "./message-reducer";
import postsReducer from "./posts-reducer";
import friendlistReducer from "./friendlistReducer";
import messageListReducer from "./messageListReducer";
import newsReducer from './newsReducer'
import usersReducer from './users-reducer'
import userProfileReducer from './userProfile-reducer'
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
  userProfile: userProfileReducer,
  users: usersReducer,
  messages: messageReducer,
  post: postsReducer,
  friendsList: friendlistReducer,
  messageList: messageListReducer,
  newsList: newsReducer,
});
let Store = createStore(reducers, applyMiddleware(thunkMiddleware));
console.log(Store)
export default Store;
