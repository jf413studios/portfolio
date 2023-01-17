import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio(){
    return(
        <div className="portfolio-section-v1">
            <div className="container">
                <div id="leftCol">
                    <h1>Portfolio</h1>
                    <p>
                        I’ve been very blessed to work for amazing companies. Learning something new every step of the way. View my latest work. 
                    </p>
                    <Link to="/portfolio" className="cta">View Portfolio</Link>
                </div>
                <div id="rightCol">
                    <div className="row">
                        <div className="col col-lg" id="staples"></div>
                        <div className="col col-sm" id="healthcasts"></div>
                    </div>
                    <div className="row">
                        <div className="col col-sm" id="airtank"></div>
                        <div className="col col-lg" id="ars"></div>
                    </div>
                    <div className="row">
                        <div className="col col-lg" id="pds"></div>
                        <div className="col col-sm empty"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;