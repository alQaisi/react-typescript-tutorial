import { PersonProps } from "./Person.types";

function Person({personName:{first,last}}:PersonProps) {
    return (
        <div>{ first } { last }</div>
    );
}

export default Person;