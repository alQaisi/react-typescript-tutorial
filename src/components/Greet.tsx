type LoggedInProps={
    isLoggedIn:true,
    messageCount:number,
    name:string
}

type LoggedOut={
    isLoggedIn:false
    name?:never,
    messageCount?:never,
}

type GreetProps=LoggedInProps | LoggedOut

function Greet({name,messageCount,isLoggedIn}:GreetProps) {
    return (
        <div>
            { isLoggedIn && <h2>Welcome {name}! You have {messageCount} unread messages</h2> }
        </div>
    );
}

export default Greet;