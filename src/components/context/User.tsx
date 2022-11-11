import { useUserContext,AuthUser } from "./UserContext";

function User() {
    const { user, setUser }=useUserContext() || {};

    function handleClick(type:"Login" | "Logout"){
        return function(){
            if(!setUser)
                return 0;
            if(type==="Login")
                return setUser({name:"Ahmad",email:"ahmedhamed1312@gmail.com"});
            return setUser({} as AuthUser);
        }
    }

    return (
        <div>
            <p>{user.name}</p>
            { user.name && <div><p>User name is { user.name }</p><p>User email is { user.email }</p> </div> }
            {
                user.name
                ?<button onClick={handleClick("Logout")}>Logout</button>
                :<button onClick={handleClick("Login")}>Login</button>
            }
        </div>
    );
}

export default User;