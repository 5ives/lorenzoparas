import "../App.css";
import ProfilePicture from '../images/dp.jpg';

function About() {
  	return (
		<div class="container">
            <div class='sub-container'>

                <div class="title">
                    <h1>about me</h1>
                </div>

                <img id="dp" src={ProfilePicture} alt="profile-pic"/>

                <div id="description">
                
                    <p>Hi, my name's Lorenzo! I'm based in
                        <strong> Sydney, Australia.</strong>
                    </p> 

                    <p>I'm currently a Software Engineer Intern at a small SEO company 
                        <strong> Digital Presence. </strong>
                        I'm generally assigned with the responsibility of creating webscrapers 
                        to discover potential SEO clients and managing the webhosting
                        of sites owned by Digital Presence.
                    </p>
                    
                    <p>I'm used to work as a Junior End User Support Specialist at Swedish mining equipment
                        manufacturer
                        <strong> Epiroc. </strong> 
                        I assist users with software and hardware related problems, along 
                        with asset management and building new computers for existing and new 
                        employees all over Australia.
                    </p>

                    <p>I'm also completing my Computer Science degree at <strong>The University of New 
                        South Wales.</strong> Upon completion, I aspire to become a software engineer/developer 
                        focused on database systems and webscraping.</p>
                        
                    <p>Throughout my experiences, I've grown to become fluent in these technologies:</p> 

                    <div id="languages">
                        <ul>
                            <li><span>Python</span></li>
                            <li><span>Java</span></li>
                            <li><span>Javascript</span></li>
                            <li><span>React</span></li>
                            <li><span>HTML/CSS</span></li>
                            <li><span>Linux/Unix/Shell</span></li>
                            <li><span>MySQL</span></li>
                            <li><span>PostgreSQL</span></li>
                            <li><span>MongoDB</span></li>
                            <li><span>C</span></li>
                            <li><span>Perl</span></li>
                        </ul>
                    </div>

                    <p>If you would like to get in touch with me or have any questions, please 
                        access my <strong>"contact me!"</strong> page.
                    </p>

                </div>
            </div>
        </div>
	);
}

export default About;
