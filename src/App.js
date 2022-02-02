import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Education from "./components/education/Education";
import Jobs from "./components/jobs/Jobs";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  console.log(darkMode)
  return (
   <div style={{"backgroundColor": darkMode? "black" : "white", "color": darkMode && "white"}}>
   <Toggle/>
    <Intro/>
    <About/>
    <Education/>
    <Jobs/>
    {/* <ProjectList/> */}
   </div>
  );
}

export default App;
