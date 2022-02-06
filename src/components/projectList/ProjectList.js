import "./ProjectList.css"
import Project from "../project/Project"
import { data } from "../../data";

const ProjectList = () => {
    return (
      <>
        <div className="pl">
          <div className="pl-texts">
            <h1 className="pl-title">Projects I have worked on!</h1>
            <div className="pl-desc">
              I have made sure the following clients could deliver good customer experiences
            </div>
          </div>
          <div className="pl-list">
              {
                  data.map(item => {
                       return <Project key={item.id} img={item.img} link={item.link} company={item.company}/>
                  })
              }
          </div>
        </div>
      </>
    );
}

export default ProjectList;