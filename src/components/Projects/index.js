import { useContext } from "react";
import Header from "../Header";
import store from "../../Context/index";
import "./index.css";

import ProjectComponent from "../ProjectComponent";
const Projects = (props) => {
  const { projectsArr } = useContext(store);

  return (
    <div>
      <Header />
      <div className="projects-bg">
        <div>
          <h1>Projects</h1>

          <div>
            {projectsArr.map((item) => (
              <ProjectComponent key={item.id} dt={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
