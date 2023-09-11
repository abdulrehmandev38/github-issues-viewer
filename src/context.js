import { createContext, useContext } from "react";

const context = createContext();

export const useStateContext = useContext();
