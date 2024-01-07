import "./index.css";
import { Link } from "react-router-dom";

const ProjectComponent = (prop) => {
  //   console.log(prop);
  const { dt } = prop;
  return (
    <div className="project-card">
      <div>
        <h1 className="project-heading">{dt.projectName}</h1>
        <p className="project-description">{dt.description}</p>
        <Link target="_blank" className="view-project" to={dt.link}>
          View Project
        </Link>
      </div>
      <img className="image" src={dt.imgUrl} alt="img" />
    </div>
  );
};
export default ProjectComponent;
