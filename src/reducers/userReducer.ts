import {
  UserDataType,
  UserActionType,
} from "../context/UserDataContext/userData.types";

export const userReducer = (
  state: UserDataType,
  action: UserActionType
): UserDataType => {
  switch (action.type) {
    case "INITIALIZE_USER":
      return {
        ...action.payload.userData,
      };

    case "CLEAR_DATA":
      return {
        _id: null,
        name: "",
        email: "",
      };

    default:
      return state;
  }
};
