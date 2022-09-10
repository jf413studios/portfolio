import './About.css';
import Header from '../../components/Header/Header';


function About(){
    return(
        <div className="about">
            <Header />
            <div className="page-content">
                <section id="bio-banner">
                    <div className="container">
                        <h1>JOSE FUENTES</h1>
                        <p>Front End Developer</p>
                    </div>
                </section>
                <section id="bio-description">
                    <div className="container">
                        <p>
                            I've been a developer for over 7 years. My passion is to create. Create something new that will bring a positive difference into this world.
                        </p>
                        <p>
                            When I'm not coding, I love spending time with my wonderful family. I’m a big marvel fan. I love to play video games. I like to keep myself in shape by working out. I play basketball, soccer, and volleyball. I’m also a Christian, so I love to spread the love of God wherever I go.
                        </p>
                        <a class="cta" target="_blank" href="/Jose_Fuentes_Resume_Updated.pdf">Download Resume</a>
                    </div>
                </section>
                <section id="work-experience">
                    <div className="container">
                        <h3>My Work</h3>
                        <h2>Experience</h2>
                        <hr/>
                        <div id="work-breakdown">

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;