import { Link } from "react-router-dom";
import { useContext } from "react";

import store from "../../Context";
import "./index.css";

import Header from "../Header";

const Home = () => {
  const { projectsArr, setProjects } = useContext(store);
  const addData = (event) => {
    event.preventDefault();
    const projectName = document.getElementById("name").value;
    const projectUrl = document.getElementById("link").value;
    const imageUrl = document.getElementById("img").value;
    const description = document.getElementById("discription").value;

    const obj = {
      id: new Date(),
      projectName: projectName,
      description: description,
      link: projectUrl,
      imgUrl: imageUrl,
    };
    setProjects([...projectsArr, obj]);
    // console.log(obj);
  };

  return (
    <div>
      <Header />
      <div className="home-bg">
        <div className="home-image-container">
          <div>
            <h3>Full stack developer</h3>
            <h1>Hello my name is Govind </h1>
            <p>Description</p>

            <Link to="/projects">
              <button className="home-project-btn">Projects</button>
            </Link>
            <button className="home-linkdin-btn">LinkDin</button>
          </div>

          <div>
            <img
              className="home-img"
              alt="img"
              src="https://fincity-assignment.vercel.app/_next/image?url=%2Fbanner-img.png&w=750&q=75"
            />
          </div>
        </div>
        <div className="home-add-project-container">
          <div>
            <h1 className="add-project-heading">Add project</h1>
            <form onSubmit={addData}>
              <label htmlFor="name">Project name</label>
              <br />
              <input required id="name" type="text" />
              <br />
              <label htmlFor="link">Project Link</label>
              <br />
              <input required id="link" type="text" />
              <br />
              <label htmlFor="img">Image Url</label>
              <br />
              <input required id="img" type="text" />
              <br />
              <label htmlFor="discription">Discription</label>
              <br />
              <input required id="discription" columns="30" rows="40" />
              <br />
              <button className="home-linkdin-btn" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
