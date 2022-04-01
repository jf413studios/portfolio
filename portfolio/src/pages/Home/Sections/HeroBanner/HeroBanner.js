import './HeroBanner.css';

function HeroBanner(){
    return(
        <div className="hero-banner-v1">
            <div className="container">
                <div className="row">
                    <div className="text">
                        <p>HI I'M</p>
                    </div>
                    <div className="line white"></div>
                </div>
                <div className="row">
                    <h1>JOSE FUENTES</h1>
                </div>
                <div className="row">
                    <div className="line yellow"></div>
                    <div className="text">
                        <p>Front End Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;