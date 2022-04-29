import ProfilePicture from '../../images/dp.jpg';
import FadeIn from 'react-fade-in';

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

const paragraphStyle = {
    fontFamily: 'Roboto',
    color: 'lightgrey',
    fontSize: '18px',
    fontWeight: 100,
    lineHeight: 1.5
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
                    <p style={paragraphStyle}>Hi, my name's Lorenzo! I'm based in
                        <strong> Sydney, Australia.</strong>
                    </p>

                    <p style={paragraphStyle}>
                        I'm an alumni from <strong>The University of New South Wales</strong>, having graduated in late 2021 as a Computer Science major.
                    </p>

                    <p style={paragraphStyle}>
                        Currently, I work as a Graduate Software Engineer at <strong>Honeywell</strong>!
                    </p>

                    <p style={paragraphStyle}>I used to work as a Full-Stack Software Engineer at <strong>ServiceRocket</strong>, focusing on
                        weekly sprints which contribute towards the <a href="https://marketplace.atlassian.com/apps/186/reporting-for-confluence?tab=overview&hosting=cloud">
                            Reporting for Confluence (Cloud)
                        </a> Atlassian application.
                    </p>
                        
                    <p style={paragraphStyle}>Throughout my experiences, I've grown to become fluent in these technologies:</p>

                    <div id="languages">
                        <ul style={paragraphStyle}>
                            <li><span>JavaScript/TypeScript</span></li>
                            <li><span>React</span></li>
                            <li><span>HTML/CSS</span></li>
                            <li><span>Python</span></li>
                            <li><span>Java</span></li>
                            <li><span>C++</span></li>
                            <li><span>Linux/Unix/Shell</span></li>
                            <li><span>MySQL</span></li>
                            <li><span>PostgreSQL</span></li>
                            <li><span>MongoDB</span></li>
                            <li><span>C</span></li>
                            <li><span>Perl</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </FadeIn>
	);
}

export default About;
