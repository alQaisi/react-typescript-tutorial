import { createContext,useContext } from "react";
import { theme } from "./theme";

type ThemProviderProps={
    children:React.ReactNode
}

const ThemeContext=createContext(theme);

export const ThemeProvider=({children}:ThemProviderProps)=>{
    return <ThemeContext.Provider value={theme} >{ children }</ThemeContext.Provider>
}

export function useThemeContext(){
    const data=useContext(ThemeContext);
    return data;
}