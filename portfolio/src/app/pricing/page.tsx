import Pricing from '../components/Pricing/Pricing';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description: "Find the right plan for your team.",
};

const PricingPage = () => {
    return(
        <div>
            <div className="w-full h-16 bg-gradient-to-r from-white to-woodsmoke-950 animate-gradient-x dark:hidden"></div>
            <div className="w-full h-16 bg-gradient-to-r from-gold-500 to-woodsmoke-950 animate-gradient-x hidden dark:block"></div>
            <Pricing />
        </div>
    );
};

export default PricingPage;