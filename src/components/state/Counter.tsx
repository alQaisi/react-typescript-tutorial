import { useReducer } from "react";

type CounterState={
    count:number
}

type UpdateAction={
    type:"increment" | "decrement",
    payload:number
}

type ResetAction={
    type:"reset",
}

type CounterAction= ResetAction | UpdateAction;

const initialState= { count:0 }

function reducer(state:CounterState,action:CounterAction){
    switch(action.type){
        case "increment":
            return { count: state.count+action.payload };
        case "decrement":
            return { count: state.count-action.payload };
        case "reset":
            return initialState;
        default:
            return state;
    }
}

function Counter() {
    const [{count},dispatch]=useReducer(reducer,initialState);

    function handleUpdate(type:UpdateAction["type"],payload:number){
        return function(){
            dispatch({type,payload});
        }
    }

    function handleReset(){
        dispatch({type:"reset"})
    };

    return (
        <>
            <br/>
            Count : { count }
            <br/>
            <button onClick={handleUpdate("increment",10)}>
                Increment 10
            </button>
            <br/>
            <button onClick={handleUpdate("decrement",10)}>
                Decrement 10
            </button>
            <br/>
            <button onClick={handleReset}>
                Reset
            </button>
        </>
    );
}

export default Counter;