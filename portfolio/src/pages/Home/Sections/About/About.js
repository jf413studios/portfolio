import './About.css';

function About(){
    return(
        <div className="about-section-v1">
            <div className="container">
                <div id="leftCol">
                    <div id="profile-pic"></div>
                </div>
                <div id="rightCol">
                    <h1>About</h1>
                    <p>
                        Hi there! My name is <b>Jose Fuentes</b>. I’ve been a developer for over 7 years. My passion is to create. Pushing the limits on creativity. On my free time I love to watch movies, play video games, code, play sports, spend time with my family, and workout.
                    </p>
                    <a href="#" className="cta">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default About;