import About from '../components/About/About';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Jose Fuentes. My passion is to create. Create something new that will bring a positive difference into this world.",
};

const AboutPage = () => {
    return (
        <div>
            <div className="w-full h-16 bg-gradient-to-r from-white to-woodsmoke-950 animate-gradient-x dark:hidden"></div>
            <div className="w-full h-16 bg-gradient-to-r from-gold-500 to-woodsmoke-950 animate-gradient-x hidden dark:block"></div>
            <About />
        </div>
    );
};

export default AboutPage;