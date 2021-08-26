import "../App.css";
import ProfilePicture from '../images/dp.jpg';
import Button from '@material-ui/core/Button';
import FadeIn from 'react-fade-in';

const contentStyle = {
    margin: '8vh 8vw 8vh 8vw',
    textAlign: 'left',
    display: 'inline-block',
    backgroundColor: '#212121',
    marginLeft: '8vw',
	width: 'min(1200px, 70vw)',
	position: 'relative',
    flexDirection: 'column',
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

const dpStyle = {
    width: '140px',
    height: '140px',
    marginLeft: '20px'
}

const formFieldStyle = {
    fontFamily: 'Roboto',
    color: 'lightgrey',
    fontSize: '48px',
    fontWeight: 100
};

const formInputStyle = {
    fontSize: '24px',
    padding: '12px',
    borderRadius: '18px',
    marginBottom: '24px'
}

function Contact() {
  	return (
        <FadeIn delay={200}>
            <div style={contentStyle}>
                <div style={headerStyle}>
                    /contact-<span style={{color: '#FF4545'}}>me!</span>
                    <img style={dpStyle} src={ProfilePicture} alt="profile-pic"/>
                </div>
                <div style={{marginTop: '-45px'}}>
                    <h3 style={subHeaderStyle}>
                        (if you want to)
                    </h3>
                </div>
                <div>
                    <form action="https://formspree.io/f/mnqooyqw" method="POST">
                        <div style={formFieldStyle}>
                            <label>
                                <div>Name:</div>
                                <input 
                                    type="text" 
                                    name="Name"
                                    size={40}
                                    style={formInputStyle}
                                />
                            </label>
                        </div>
                        <div style={formFieldStyle}>
                            <label>
                                <div>Email:</div>
                                <input 
                                    type="email" 
                                    name="Email"
                                    size={40}
                                    style={formInputStyle}
                                />
                            </label>
                        </div>
                        <div style={formFieldStyle}>
                            <label>
                                <div>Message:</div>
                                <textarea 
                                    name="Message"
                                    size={40}
                                    style={formInputStyle}
                                />
                            </label>
                        </div>
                        <Button 
                            variant="contained" 
                            color="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </FadeIn>
	);
}

export default Contact;
