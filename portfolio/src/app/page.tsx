import HeroBanner from './components/Home/HeroBanner';
import IconsRow from './components/Home/IconsRow';
import About from './components/Home/About';
import Reviews from './components/Home/Reviews';
import Contact from './components/ContactForm/ContactForm';

const Page = () => {
    return(
        <div>
            <HeroBanner />
            <IconsRow />
            <About />
            <Reviews />
            <Contact />
        </div>
    );
};

export default Page;