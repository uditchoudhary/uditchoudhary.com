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
              eque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..
            </div>
          </div>
          <div className="pl-list">
              {
                  data.map(item => {
                       return <Project key={item.id} img={item.img} link={item.link}/>
                  })
              }
          </div>
        </div>
      </>
    );
}

export default ProjectList;