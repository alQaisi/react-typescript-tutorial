type InputProps={
    placeholder?:string,
    value?:string,
    handleChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    test(x:string):number
}

function Input({placeholder,value,handleChange}:InputProps) {

    function handleChange2(event:React.ChangeEvent<HTMLInputElement>):void{
        console.log(event.target.value)
    }

    return (
        <input placeholder={placeholder || "start typing"} value={value || ""} onChange={handleChange || handleChange2}/>
    );
}

export default Input;