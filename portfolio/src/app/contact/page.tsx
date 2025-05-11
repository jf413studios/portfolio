import type { Metadata } from "next";
import ContactForm from '../components/ContactForm/ContactForm';

export const metadata: Metadata = {
    title: "Contact Me",
    description: "I'd love to talk about how I can help you.",
};

const Contact = () => {
    return(
        <div>
            <div className="w-full h-16 bg-gradient-to-r from-white to-woodsmoke-950 animate-gradient-x dark:hidden"></div>
            <div className="w-full h-16 bg-gradient-to-r from-gold-500 to-woodsmoke-950 animate-gradient-x hidden dark:block"></div>
            <ContactForm />
        </div>
    );
};

export default Contact;