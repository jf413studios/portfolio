import './About.css';
import Header from '../../components/Header/Header';

function About(){
    return(
        <div className="about">
            <Header />
            <div className="page-content">
                <div className="about-section-v1">
                    <div className="container">
                        <div id="leftCol">
                            <div id="profile-pic"></div>
                        </div>
                        <div id="rightCol">
                            <h1>About</h1>
                            <p>
                               My name is <b>Jose Fuentes</b>.
                            </p>
                            <p>
                                I've been a developer for over 7 years. My passion is to create. Create something new that will bring a positive difference into this world.
                            </p>
                            <p>
                                When I'm not coding, I love spending time with my wonderful family. I’m a big marvel fan. I love to play video games. I like to keep myself in shape by working out. I play basketball, soccer, and volleyball. I’m also a Christian, so I love to spread the love of God wherever I go.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;