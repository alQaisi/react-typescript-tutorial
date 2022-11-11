import { useState } from "react";

type AuthUser={
    name:string,
    email:string,
}

function User(){
    
    // const [user,setUser]=useState<null | AuthUser>(null);
    const [user,setUser]=useState<AuthUser>({} as AuthUser);

    console.log(user);

    function handleLogin(){
        setUser({
            name:"alQaisi",
            email:"ahmedhamed1312@gmail.com"
        });
    }

    function handleLogout(){
        setUser({} as AuthUser);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            {user?.name &&(<>
                <div>User name is { user.name } </div>
                <div>User email is { user.email } </div>
            </>)}
            
        </div>
    );
}

export default User;