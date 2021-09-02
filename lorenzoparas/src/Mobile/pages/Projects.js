import FadeIn from 'react-fade-in';
import { Fade } from "@material-ui/core";

const contentStyle = {
    margin: '8vh 8vw 8vh 8vw',
    textAlign: 'left',
    display: 'inline-block',
    backgroundColor: '#212121',
    marginLeft: '8vw',
	width: 'min(1200px, 65vw)',
	position: 'relative',
    flexDirection: 'column',
}

const headerStyle = {
    color: 'white',
    fontSize: '30px',
    letterSpacing: '1px',
    fontWeight: '600',
    display: 'flex',
    flexDirection: 'row'
};

const subHeaderStyle = {
    color: 'lightgrey',
    fontSize: '15px'
};

const projectStyle = {
    color: 'lightgrey',
    fontSize: '15px',
    textDecoration: 'none'
};

function Projects() {
  	return (
        <FadeIn delay={200}>
            <div style={contentStyle}>
                <div style={headerStyle}>
                    /software-<span style={{color: '#FF4545'}}>projects</span>
                </div>
                <div style={{marginTop: '-15px'}}>
                    <h3 style={subHeaderStyle}>
                        (stuff i've worked on)
                    </h3>
                </div>
                <a rel="noreferrer" target="_blank" href="https://github.com/lorenzoparas/recipeScraper">
                    <h3 style={projectStyle}>recipeScraper</h3>
                </a>
                <a rel="noreferrer" target="_blank" href="https://github.com/lorenzoparas/lorenzoparas">
                    <h3 style={projectStyle}>lorenzoparas (this site!)</h3>
                </a>
            </div>
        </FadeIn>
	);
}

export default Projects;
