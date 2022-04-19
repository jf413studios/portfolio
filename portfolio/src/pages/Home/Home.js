import './Home.css';
import Header from '../../components/Header/Header';
import HeroBanner from './Sections/HeroBanner/HeroBanner';
import About from './Sections/About/About';
import Portfolio from './Sections/Portfolio/Portfolio';

function Home(){
    return(
        <div className="home">
            <Header />
            <div className="page-content">
                <HeroBanner />
                <About />
                <Portfolio />
            </div>
        </div>
    );
}

export default Home;