import './Portfolio.css';
import Header from '../../components/Header/Header';

function Portfolio(){
    return(
        <div className="portfolio">
            <Header />
            <div className="page-content">
                <div className="row">
                    <div className="column">
                        <div className="portfolio-card">
                            <div className="portfolio-card-content">
                                <h2 className="title">Cosentyx Landing Page</h2>
                                <p className="company">HealthCasts Media</p>
                                <p className="year">2022</p>
                            </div>
                        </div>
                        <div className="portfolio-card">
                            <div className="portfolio-card-content">
                                <h2 className="title">Merck Keytruda Landing Page</h2>
                                <p className="company">HealthCasts Media</p>
                                <p className="year">2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="portfolio-card">
                            <div className="portfolio-card-content">
                                <h2 className="title">Landing Page</h2>
                                <p className="company">HealthCasts Media</p>
                                <p className="year">2022</p>
                            </div>
                        </div>
                        <div className="portfolio-card">
                            <div className="portfolio-card-content">
                                <h2 className="title">Landing Page</h2>
                                <p className="company">HealthCasts Media</p>
                                <p className="year">2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="portfolio-card">
                            <div className="portfolio-card-content">
                                <h2 className="title">Landing Page</h2>
                                <p className="company">HealthCasts Media</p>
                                <p className="year">2022</p>
                            </div>
                        </div>
                        <div className="portfolio-card">
                            <div className="portfolio-card-content">
                                <h2 className="title">Landing Page</h2>
                                <p className="company">HealthCasts Media</p>
                                <p className="year">2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="portfolio-card">
                            <div className="portfolio-card-content">
                                <h2 className="title">Landing Page</h2>
                                <p className="company">HealthCasts Media</p>
                                <p className="year">2022</p>
                            </div>
                        </div>
                        <div className="portfolio-card">
                            <div className="portfolio-card-content">
                                <h2 className="title">Landing Page</h2>
                                <p className="company">HealthCasts Media</p>
                                <p className="year">2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;