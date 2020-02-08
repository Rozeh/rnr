import {ping} from "./ping";
import {rank, rankEpics} from "./rank";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

export const rootReducers = combineReducers({rank});
export const rootEpics = combineEpics(rankEpics.addRankingEpic)
