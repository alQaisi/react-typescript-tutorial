type InputProps=React.ComponentProps<"input">

function CustomInput({...allProps}:InputProps) {
    return (
        <input {...allProps} />
    );
}

export default CustomInput;