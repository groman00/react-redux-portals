
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from 'redux-logger';
import * as reducers from "./containers";


const store = createStore(
  combineReducers(reducers),
  applyMiddleware(logger)
);

export default store;
