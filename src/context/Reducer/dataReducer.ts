import { State } from "./dataReducer.types";
import { ACTIONTYPE } from "./dataReducer.types";

export const dataReducer = (state: State, action: ACTIONTYPE): State => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        questions: action.payload.map((item) => {
          return {
            ...item,
            isAttempted: false,
            options: item.options.map((item) => {
              return { ...item, isSelected: false };
            }),
          };
        }),
      };
    case "UPDATE_OPTION_STATE":
      return {
        ...state,
        questions: state.questions?.map((question, index) => {
          if (index === action.payload.questionIndex) {
            return {
              ...question,
              isAttempted: true,
              options: question.options.map((option, index) => {
                if (index === (action.payload.optionIndex as number)) {
                  return { ...option, isSelected: true };
                }
                return { ...option, isSelected: false };
              }),
            };
          }
          return { ...question };
        }),
      };
    default:
      return state;
  }
};
