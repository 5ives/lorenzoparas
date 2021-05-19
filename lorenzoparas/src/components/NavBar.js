import "../App.css";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import {
	Link
} from "react-router-dom";

function NavBar() {
  	return (
	  	<div id="nav-bar">
			<div id="head">
				<Link to=""><h1>lorenzo paras.</h1></Link>
			</div>
			<div id="nav">
				<Link to="/about" class="nav-item">about me</Link>
				<Link to="/projects" class="nav-item">projects</Link>
				<Link to="/resume" class="nav-item">resume</Link>
				<Link to="/contact" class="nav-item">contact me!</Link>
			</div>
			<div id="social-link-logos">
				<a href="https://www.linkedin.com/in/lorenzo-paras/">
					<img src={linkedin}/>
				</a>
				<a href="https://github.com/5ives">
					<img src={github}/>
				</a>
			</div>
		</div>
	);
}

export default NavBar;
