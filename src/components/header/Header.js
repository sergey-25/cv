import React from "react";
import './Header.css'
import resumeData from "../../utils/resumeData";
import CustomButton from "../button/CustomButton";
import { NavLink,  useLocation,
    useNavigate,
    useParams } from "react-router-dom";
import {
  HomeRounded,
  Telegram,
} from "@mui/icons-material";
import {
  Nav,
  Navbar,
} from "react-bootstrap";
import {HashLink as Link} from 'react-router-hash-link';
import "bootstrap/dist/css/bootstrap.min.css";



function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }

    return ComponentWithRouterProp;
  }




function Header(props) {
  const pathName = props?.location?.pathname;

  return (
    <div>
      <Navbar expand="lg" sticky="top" className="header">
        <Nav.Link as={NavLink} to="/" className="header_navlink">
          <Navbar.Brand className="header_home">
            <HomeRounded />
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="header_left">
            {/* About me */}

            <Link to="#About-me"  className={
              pathName === "/" ? "active" : "header_link"
            }>About me
              {/*<Nav.Link*/}
              {/*    as={NavLink}*/}
              {/*    to="/"*/}
              {/*    className={*/}
              {/*      pathName === "/" ? "active" : "header_link"*/}
              {/*    }*/}
              {/*>*/}
              {/*  About me*/}
              {/*</Nav.Link>*/}
            </Link>
<Link to="#edu"  className={
  pathName === "/" ? "active" : "header_link"}>
      Education and experiences
</Link>
            <Link to="#skills"  className={
              pathName === "/" ? "active" : "header_link"}>
              Skills
            </Link>
            {/* Portfolio Link */}

            {/*<Nav.Link*/}
            {/*  as={NavLink}*/}
            {/*  to="/portfolio"*/}
            {/*  className={*/}
            {/*    pathName === "/portfolio" ? "header_link_active" : "header_link"*/}
            {/*  }*/}
            {/*>*/}
            {/*  Portfolio*/}
            {/*</Nav.Link>*/}
          </Nav>
          <div className="header_right">
            {Object.keys(resumeData.socials).map((key, index) => (
              <a
                key={index}
                href={resumeData.socials[key].link}
                target="_blank"
                rel="noreferrer"
              >
                {resumeData.socials[key].icon}
              </a>
            ))}
            <CustomButton text={'Hire Me'} icon ={<Telegram/>}/>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(Header);
