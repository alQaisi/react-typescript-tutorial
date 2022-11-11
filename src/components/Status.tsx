type StatusProps={
    status:"loading" | "success" | "error"
}

function Status({status}:StatusProps) {
    let message:string;
    switch(status){
        case "loading":
            message="Loading...";
            break;
        case "success":
            message="Data fetched successfully!";
            break;
        default:
            message="Error fetching data";
    }
    return (
        <div>
            <h2>{ message }</h2>
        </div>
    );
}

export default Status;