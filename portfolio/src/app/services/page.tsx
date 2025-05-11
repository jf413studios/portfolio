import Features from '../components/Services/Features';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "Find the right plan for your team.",
};

const ServicesPage = () => {
    return(
        <div>
            <div className="w-full h-16 bg-gradient-to-r from-white to-woodsmoke-950 animate-gradient-x dark:hidden"></div>
            <div className="w-full h-16 bg-gradient-to-r from-gold-500 to-woodsmoke-950 animate-gradient-x hidden dark:block"></div>
            <Features />
        </div>
    );
};

export default ServicesPage;