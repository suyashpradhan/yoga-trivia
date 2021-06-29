import { createContext, useReducer, useState } from "react";
import {
  UserDataProviderProp,
  UserDataType,
  UserDataContextType,
} from "./userData.types";
import { userReducer } from "../../reducers/userDataReducer/userDataReducer";

const initialValue: UserDataType = {
  _id: null,
  name: "",
  email: "",
  takenQuizList: [],
};

export const UserDataContext = createContext<UserDataContextType>(
  {} as UserDataContextType
);

export const UserDataProvider = ({
  children,
}: UserDataProviderProp): JSX.Element => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [state, dispatch] = useReducer(userReducer, initialValue);
  const [userLoading, setUserLoading] = useState(true);

  return (
    <UserDataContext.Provider
      value={{
        isUserLoggedIn,
        userData: state,
        userDispatch: dispatch,
        userLoading,
        setIsUserLoggedIn,
        setUserLoading,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
