import './About.css';
import Header from '../../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';

function About(){
    return(
        <div className="about">
            <Header />
            <div className="page-content">
                <div className="about-section-v1">
                    <div className="container">
                        <section id="bio">
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
                                <a href="./Jose_Fuentes_Resume_Updated.pdf" class="cta" target="_blank" alt="Download Resume" rel="noopener noreferrer">Download Resume</a>
                            </div>
                        </section>
                        <section id="skills">
                            <h1>Skills</h1>
                            <div id="skills-container">
                                <div class="row">
                                    <div class="skill-card">
                                        <FontAwesomeIcon icon={faHtml5} />
                                        <p>HTML</p>
                                    </div>
                                    <div class="skill-card">
                                        <FontAwesomeIcon icon={faCss3Alt} />
                                        <p>CSS</p>
                                    </div>
                                    <div class="skill-card">
                                        <FontAwesomeIcon icon={faJsSquare} />
                                        <p>JavaScript</p>
                                    </div>
                                    <div class="skill-card">
                                        <FontAwesomeIcon icon={faPhp} />
                                        <p>PHP</p>
                                    </div>
                                    <div class="skill-card">
                                        <FontAwesomeIcon icon={faShopify} />
                                        <p>Shopify</p>
                                    </div>
                                    <div class="skill-card">
                                        <FontAwesomeIcon icon={faJava} />
                                        <p>Java</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;