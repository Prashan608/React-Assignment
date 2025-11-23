import "../App.css";
import { useEffect, useState } from "react";
import ThemedBox from "./ThemedBox";

function ThemeApp () {

    const [theme,setTheme]  = useState("light");

    function changeTheme () {
        if(theme==="light")setTheme("dark")
        else setTheme("light")
    }

    useEffect(()=>{
        let savedTheme = localStorage.getItem("theme");
        if(savedTheme)setTheme(savedTheme);
    },[]);

    useEffect(()=>{
        localStorage.setItem("theme",theme);
    },[theme])

    return (
        <div>
            <button onClick={changeTheme}>Change Theme</button>
            <ThemedBox theme = {theme}/>
            <ThemedBox theme = {theme}/>
            <ThemedBox theme = {theme}/>
        </div>
    )

}

export default ThemeApp;