import "../App.css";
import {
	Link
} from "react-router-dom";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navBarStyle = {
	height: 'fit-content',
	position: 'fixed',
	width: '165px',
	right: '8vw',
	bottom: '10vh',
	fontFamily: 'Benne-Regular',
	textAlign: 'center',
	zIndex: 1
}

const navItemStyle = {
	textDecoration: 'none',
	color: 'white',
	fontSize: '24px'
}

const navSocialStyle = {
	display: 'flex',
	justifyContent: 'flex-end',
	marginTop: '10%'
}

function DesktopNavBar() {

  	return (
	  	<div style={navBarStyle}>
			<div style={{textAlign: 'right'}}>
				<Link to="/" style={navItemStyle}>
					<h1 style={navItemStyle}>lorenzo paras.</h1>
				</Link>
				<div>
					<Link to="/about" style={navItemStyle}>
						about-me
					</Link>
				</div>
				<div>
					<Link to="/software-projects" style={navItemStyle}>
						software-projects
					</Link>
				</div>
				<div>
					<Link to="/work-experiences" style={navItemStyle}>
						work-experiences
					</Link>
				</div>
				<div>
					<Link to="/gallery" style={navItemStyle}>
						gallery
					</Link>
				</div>
				<div>
					<Link to="/contact" style={navItemStyle}>
						contact-me!
					</Link>
				</div>
			</div>
			<div style={navSocialStyle}>
				<a rel="noreferrer" target="_blank" href="https://github.com/lorenzoparas">
					<FaGithub size={"24px"} color={"white"}/>
				</a>
				<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/lorenzo-paras/">
					<FaLinkedin size={"24px"} color={"white"}/>
				</a>
			</div>
		</div>
	);
}

export default DesktopNavBar;
