import { Link } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import "./index.css";

const Header = (props) => {
  //   console.log(props);

  return (
    <div className="header-bg">
      <h3>
        <Link to="/">Govind</Link>
      </h3>

      <div className="header-about">
        <Link to="/about" className="header-single-component">
          About
        </Link>
        <Link to="/about" className="icons">
          <FcAbout />
        </Link>

        <Link to="/projects" className="header-single-component">
          Projects
        </Link>
        <Link to="/projects" className="icons">
          <GrProjects />
        </Link>
        <Link to="/contact" className="header-single-component">
          Contact us
        </Link>
        <Link to="/contact" className="icons">
          <BiSolidPhoneCall />
        </Link>
      </div>
    </div>
  );
};

export default Header;
