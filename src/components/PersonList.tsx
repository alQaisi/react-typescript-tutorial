import Person from "./Person";
import { Children } from "react";
import { Name } from "./Person.types";

type PersonListProps={
    names:Name[]
}

function PersonList({names}:PersonListProps){
    return (
        <div>
            { Children.toArray(names.map(personName=><Person personName={personName}/>))}
        </div>
    );
}

export default PersonList;