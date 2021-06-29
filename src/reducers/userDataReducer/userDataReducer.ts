import {
  UserDataType,
  UserActionType,
} from "../../context/user-data-context/userData.types";

export const userReducer = (
  state: UserDataType,
  action: UserActionType
): UserDataType => {
  switch (action.type) {
    case "INITIALIZE_USER":
      return {
        ...action.payload.userData,
      };

    case "SAVE_QUIZ_ANSWER":
      return {
        ...state,
        takenQuizList: state.takenQuizList.concat(action.payload.takenQuiz),
      };

    case "RESET_TAKEN_QUIZ":
      return {
        ...state,
        takenQuizList: action.payload.takenQuizList,
      };

    case "FLUSH_DATA":
      return {
        _id: null,
        name: "",
        email: "",
        takenQuizList: [],
      };

    default:
      return state;
  }
};
