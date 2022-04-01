import './Home.css';
import Header from '../../components/Header/Header';
import HeroBanner from './Sections/HeroBanner/HeroBanner';
import About from './Sections/About/About';

function Home(){
    return(
        <div className="home">
            <Header />
            <div className="page-content">
                <HeroBanner />
                <About />
            </div>
        </div>
    );
}

export default Home;