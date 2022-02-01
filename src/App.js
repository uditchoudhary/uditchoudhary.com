import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Education from "./components/education/Education";
import Jobs from "./components/jobs/Jobs";
function App() {
  return (
   <>
    <Intro/>
    <About/>
    <Education/>
    <Jobs/>
    {/* <ProjectList/> */}
   </>
  );
}

export default App;
