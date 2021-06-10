import React, { createContext, useContext, useReducer } from "react";
import { dataReducer } from "./Reducer/dataReducer";
import { ChildrenProps, ContextType } from "./game-context.types";

const GameContext = createContext<ContextType | null>(null);

export const GameProvider = ({ children }: ChildrenProps) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    questions: [],
  });

  return (
    <GameContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const data = useContext(GameContext);
  return data!;
};
