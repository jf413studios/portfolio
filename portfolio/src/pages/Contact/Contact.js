import './Contact.css';
import Header from '../../components/Header/Header';
import Contact from '../Home/Sections/Contact/Contact';


function ContactPage(){
    return(
        <div className="contact">
            <Header />
            <div className="page-content">
                <Contact />
            </div>
        </div>
    );
}

export default ContactPage;