import ThemeApp from "./ThemeApp";


function ThemedBox ({theme}) {
   
    let lightTheme = {
        backgroundColor : "white",
        color : "black"
    }

    let darkTheme = {
        backgroundColor : "gray",
        color : "white"
    }

    let finalTheme;
    if(theme === "light") finalTheme = lightTheme;
    else finalTheme = darkTheme;

    return(
        <div style={{height:200,width:200,padding:10,margin:10,...finalTheme}}>
        </div>
    )
}

export default ThemedBox;