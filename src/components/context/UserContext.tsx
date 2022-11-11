import { useContext, createContext, useState } from "react";

type UserContextType={
    user: AuthUser,
    setUser:React.Dispatch<React.SetStateAction<AuthUser>>
}

const UserContext=createContext<UserContextType>({} as UserContextType);

type UserProviderProps={
    children:React.ReactNode
}

export type AuthUser={
    name:string,
    email:string
}

export const UserProvider=({children}:UserProviderProps)=>{
    const [user,setUser]=useState<AuthUser>({} as AuthUser);
    const value={user,setUser};
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
} 

export const useUserContext=()=>{
    const data=useContext(UserContext);
    return data;
}