import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact(){
    return(
        <div className="contact-section-v1">
            <div className="container">
                <h1>Contact</h1>
                <p>Want to collaborate on an upcoming project? Have specific questions for me? Use the information below and I’ll get back to you as soon as possible. Hope you have an amazing day! God Bless!</p>
                <div id="phone-email">
                    <div id="phone-info">
                        <FontAwesomeIcon icon={faPhone} />
                        <a href="tel:4014190189">401-419-0189</a>
                    </div>
                    <div id="email-info">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href="mailto:jf413studios@gmail.com">jf413studios@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;