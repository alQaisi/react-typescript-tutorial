import Login from "./Login";
import {ProfileProps} from "./Profile";

type LoggedInProps={
    isLoggedIn:true,
    Component():JSX.Element
}

type LoggedOutProps={
    isLoggedIn:false
}

// type PrivateProps=LoggedInProps | LoggedOutProps

type PrivateProps={
    isLoggedIn:boolean,
    component:React.ComponentType<ProfileProps>
}


function Private({isLoggedIn,component:Component}:PrivateProps) {
    if(isLoggedIn){
        return <Component name="ahmad"/>
    }else{
        return <Login/>
    }
}

export default Private;