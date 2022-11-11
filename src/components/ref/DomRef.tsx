import { useRef,useEffect } from "react";

function DomRef() {
    const inputRef=useRef<HTMLInputElement>(null!);
    useEffect(()=>{
            inputRef.current.focus();
    },[])
    console.log(inputRef);
    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    );
}

export default DomRef;