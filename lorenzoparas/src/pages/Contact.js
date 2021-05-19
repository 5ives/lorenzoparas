import "../App.css";

function Contact() {
  	return (
		<div class='container'>
            <div class='sub-container'>
                <div class="title">
                    <h1>contact me!</h1>
                </div>
                <div id="contact-form">
                    <form action="https://formspree.io/f/mnqooyqw" method="POST">
                        <div class="contact-input">
                            <label>
                            Name:
                            <input type="text" name="Name"/>
                            </label>
                        </div>
                        
                        <div class="contact-input">
                            <label>
                            Email:
                            <input type="text" name="Email"/>
                            </label>
                        </div>
                        
                        <div class="contact-input">
                            <label>
                            Message:
                            <textarea name="Message"></textarea>
                            </label>
                        </div>
                        
                        <div id="contact-submit">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
	);
}

export default Contact;
