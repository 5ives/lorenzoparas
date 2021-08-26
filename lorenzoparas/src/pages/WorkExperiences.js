import "../App.css";
import LorenzoParasResume from '../files/LorenzoParasResume.pdf';
import React from 'react';
import FadeIn from 'react-fade-in';
import Button from '@material-ui/core/Button';

const contentStyle = {
    margin: '8vh 8vw 8vh 8vw',
    textAlign: 'left',
    display: 'inline-block',
    backgroundColor: '#212121',
    marginLeft: '8vw',
	width: 'min(1200px, 70vw)',
	position: 'relative',
    flexDirection: 'column',
	color: 'white'
}

const headerStyle = {
    color: 'white',
    fontSize: '100px',
    letterSpacing: '1px',
    fontWeight: '600',
    display: 'flex',
    flexDirection: 'row'
};

const subHeaderStyle = {
    color: 'lightgrey',
    fontSize: '50px'
};

function WorkExperiences() {
	return (
		<FadeIn delay={200}>
			<div style={contentStyle}>
				<div style={headerStyle}>
					/work-<span style={{color: '#FF4545'}}>experiences</span>
				</div>
				<div style={{marginTop: '-45px'}}>
					<h3 style={subHeaderStyle}>
						(places i've worked at in the past and present)
					</h3>
				</div>
				<Button 
					variant="contained" 
					color="primary"
					type="submit"
				>
					<a href={LorenzoParasResume} style={{color: 'white'}} download>
						Resume
					</a>
				</Button>
			</div>
		</FadeIn>
	);
}

export default WorkExperiences;