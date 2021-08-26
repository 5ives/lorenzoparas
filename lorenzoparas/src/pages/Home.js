import "../App.css";
import React from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import FadeIn from 'react-fade-in';
import ProfilePicture from '../images/dp.jpg';

const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
}

const homeStyle = {
	marginLeft: '8vw',
	width: 'min(1200px, 70vw)',
	backgroundColor: '#212121',
	position: 'relative',
	display: 'flex',
    flexDirection: 'column',
};

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

const paragraphStyle = {
    fontFamily: 'Roboto',
    color: 'lightgrey',
    fontSize: '18px',
    fontWeight: 100,
    lineHeight: 1.5,
    fontStretch: 'ultra-expanded'
};

const dpStyle = {
    width: '140px',
    height: '140px',
    marginLeft: '20px'
}

function Home() {
    return (
        <div style={wrapperStyle}>
            <div style={homeStyle}>
                <div style={headerStyle}>
                    <Typist>
                        hey, I'm <span style={{color: '#FF4545'}}>Lorenzo!</span>
                    </Typist>
                    <FadeIn delay={1500}>
                        <img style={dpStyle} src={ProfilePicture} alt="profile-pic"/>
                    </FadeIn>
                </div>
                <FadeIn delay={1800}>
                    <div style={{marginTop: '-65px'}}>
                        <h3 style={subHeaderStyle}>
                            I find creating tech to be pretty enjoyable.
                        </h3>
                    </div>
                    <div style={{marginTop: '-35px'}}>
                        <p style={paragraphStyle}>
                            I'm a software engineer based in <span style={{color: '#FF4545'}}>Sydney, Australia</span>,
                            where I'm currently in my final term of my computer science
                            degree at The University of New South Wales. I have passion
                            in the realm of front-end development and love creating software
                            in general.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}

export default Home;
