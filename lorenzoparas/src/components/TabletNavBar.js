import "../App.css";
import {
	Link
} from "react-router-dom";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navBarStyle = {
	display: 'flex',
	flexDirection: 'column',
	fontFamily: 'Benne-Regular',
	textAlign: 'center',
	zIndex: 1,
	padding: '20px'
}

const navItemStyle = {
	textDecoration: 'none',
	color: 'white',
	fontSize: '18px'
}

const navSocialStyle = {
	display: 'flex',
	justifyContent: 'center',
	margin: '1%'
}

const linkStyle = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-evenly'
}

const socialLinkStyle = {
	margin: '5px 20px 5px 20px'
}

function TabletNavBar() {

  	return (
	  	<div style={navBarStyle}>
			<div>
				<Link to="/" style={navItemStyle}>
					<h1 style={navItemStyle}>lorenzo paras.</h1>
				</Link>
			</div>
			<div style={linkStyle}>
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
				<div style={socialLinkStyle}>
					<a rel="noreferrer" target="_blank" href="https://github.com/lorenzoparas">
						<FaGithub size={"24px"} color={"white"}/>
					</a>
				</div>
				<div style={socialLinkStyle}>
					<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/lorenzo-paras/">
						<FaLinkedin size={"24px"} color={"white"}/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default TabletNavBar;
