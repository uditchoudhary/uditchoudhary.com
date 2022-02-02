import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./Toggle.css"
const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleToggleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return (
      <div className="t">
        <img src="https://img.icons8.com/material-outlined/24/000000/sun--v2.png" />
        <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-moon-basic-ui-elements-flatart-icons-outline-flatarticons.png" />
        <button className="t-button" onClick={handleToggleClick} style={{
         left: theme.state.darkMode && 0
        }}/>
      </div>
    );

}

export default Toggle;