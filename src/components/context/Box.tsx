import { useThemeContext } from "./ThemeContext";

function Box() {
    const theme=useThemeContext();
    console.log(theme)
    return (
        <div style={{backgroundColor:theme.primary.main,color:theme.primary.text}}> Theme Context </div>
    );
}

export default Box;