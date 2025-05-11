import Work from '../components/Work/Work';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Work",
    description: "View my latest work.",
};

const WorkPage = () => {
    return(
        <div>
            <div className="w-full h-16 bg-gradient-to-r from-white to-woodsmoke-950 animate-gradient-x dark:hidden"></div>
            <div className="w-full h-16 bg-gradient-to-r from-gold-500 to-woodsmoke-950 animate-gradient-x hidden dark:block"></div>
            <Work />
        </div>
    );
};

export default WorkPage;