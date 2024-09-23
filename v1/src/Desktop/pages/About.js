import ProfilePicture from '../../images/dp.jpg';
import FadeIn from 'react-fade-in';
import AboutBody from '../../components/AboutBody';

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
    fontSize: '90px',
    letterSpacing: '1px',
    fontWeight: '600',
    display: 'flex',
    flexDirection: 'row'
};

const subHeaderStyle = {
    color: 'lightgrey',
    fontSize: '45px'
};



const dpStyle = {
    width: '140px',
    height: '140px',
    marginLeft: '20px'
}

function About() {
  	return (
        <FadeIn delay={200}>
            <div style={contentStyle}>
                <div style={headerStyle}>
                    /about-<span style={{color: '#FF4545'}}>me</span>
                    <img style={dpStyle} src={ProfilePicture} alt="profile-pic"/>
                </div>
                <div style={{marginTop: '-45px'}}>
                    <h3 style={subHeaderStyle}>
                        (some stuff about me)
                    </h3>
                </div>
                <div style={{marginTop: '-20px'}}>       
                    <AboutBody/>
                </div>
            </div>
        </FadeIn>
	);
}

export default About;
