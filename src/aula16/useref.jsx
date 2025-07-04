import { useEffect, useRef } from "react";

export default function focusInput(){
    const inputRef = useRef();

    useEffect(() =>{
    inputRef.current.focus();
    }, [] );
    return <input ref={inputRef} placeholder="digite algo"/>
}
