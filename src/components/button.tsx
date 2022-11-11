import React from "react";

type ButtonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void,
    children:React.ReactNode | string
}

function Button({handleClick,children}:ButtonProps){
    return (
        <button onClick={event=>handleClick(event,10)}>{ children }</button>
    );
}

export default Button;