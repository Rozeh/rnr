import { ajax } from "rxjs/observable/dom/ajax"
import { of } from "rxjs";
import { map, mergeMap, catchError, withLatestFrom } from "rxjs/operators";
import { ofType } from "redux-observable";

const CHANGE_RANK_INPUT = "rank/CHANGE_RANK_INPUT";

const ADD_RANKING = "rank/ADD_RANKING"
const ADD_RANKING_SUCCESS = "rank/ADD_RANKING_SUCCESS";
const ADD_RANKING_FAILURE = "rank/ADD_RANKING_FAILURE";

export const changeRankInput = ({ value }) => ({
  type: CHANGE_RANK_INPUT,
  payload: { value }
});
export const addRanking = () => ({
  type: ADD_RANKING
});
export const addRankingSuccess = rank => ({
  type: ADD_RANKING_SUCCESS,
  payload: {
    rank
  }
});
export const addRankingFailure = error => ({
  type: ADD_RANKING_FAILURE,
  payload: {
    error
  }
});

const addRankingEpic = (action$, state$) => {
  return action$.pipe(
    ofType(ADD_RANKING),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      return ajax.post('rank/', { text: state.rank.rankInput }).pipe(
        map(response => {
          const rank = response.response;
          return addRankingSuccess(rank);
        }),
        catchError(error =>
          of({
            type: ADD_RANKING_SUCCESS,
            payload: error,
            error: true
          })
        )
      );
    })
  );
};



const initialState = {
  rankInput: "",
  rankies: []
};

export const rank = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_RANK_INPUT:
      return {
        ...state,
        rankInput: action.payload.value
      };

    case ADD_RANKING_SUCCESS:
      const { rank } = action.payload;
      return {
        ...state,
        rankies: [rank].concat(state.rank),
        rankInput:""
      };

    case ADD_RANKING_FAILURE:
      return {
        ...state,
        error: {
          triggered: true,
          message:"순위체크 자료가 넘어오지 않습니다."
        }
      }

    default:
      return state;
  }
};

export const rankEpics = {
  addRankingEpic
};