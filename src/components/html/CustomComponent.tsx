import React from "react";
import Greet from "../Greet";

function CusotmComponent({isLoggedIn,messageCount,name}:React.ComponentProps<typeof Greet>) {
    return (
        <div>
            { isLoggedIn && <h1>name:{ name+" messages count: "+messageCount}</h1> }
        </div>
    );
}

export default CusotmComponent;