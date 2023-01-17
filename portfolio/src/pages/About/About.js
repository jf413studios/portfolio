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
                        <a className="cta" target="_blank" href="/Jose_Fuentes_Resume_Updated.pdf">Download Resume</a>
                    </div>
                </section>
                <section id="work-experience">
                    <div className="container">
                        <h3>My Work</h3>
                        <h2>Experience</h2>
                        <hr/>
                        <div id="work-breakdown">
                            <div className="experience-row left">
                                <div className="experience-row-container">
                                    <div className="content">
                                        <h2>HealthCasts Media</h2>
                                        <p className="position-title">Front End Developer</p>
                                        <p className="position-description">
                                            Created responsive landing pages for our clients that focus on disease, patient, treatment and practice-related medical information.
                                        </p>
                                    </div>
                                    <div className="line"></div>
                                    <div className="year">
                                        <p className="dates">Jul 2020 &ndash; Present</p>
                                    </div>
                                </div>
                            </div>
                            <div className="experience-row right">
                                <div className="experience-row-container">
                                    <div className="content">
                                        <h2>AirTank</h2>
                                        <p className="position-title">Front End Developer</p>
                                        <p className="position-description">
                                            Created responsive landing pages for our e-commerce clients. Used Zeplin to convert designs into full HTML pages. Made edits to both WordPress and Shopify themes/sites.
                                        </p>
                                    </div>
                                    <div className="line"></div>
                                    <div className="year">
                                        <p className="dates">Oct 2020 &ndash; Jul 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="experience-row left">
                                <div className="experience-row-container">
                                    <div className="content">
                                        <h2>Craft Studios Boston LLC</h2>
                                        <p className="position-title">Front End Developer</p>
                                        <p className="position-description">
                                            Created and led large responsive landing pages weekly on a team of two for Staples.com. Collaborated with multiple internal teams including project management and creative to execute on multiple projects at a time.
                                        </p>
                                    </div>
                                    <div className="line"></div>
                                    <div className="year">
                                        <p className="dates">Jan 2019 &ndash; May 2020</p>
                                    </div>
                                </div>
                            </div>
                            <div className="experience-row right">
                                <div className="experience-row-container">
                                    <div className="content">
                                        <h2>Advanced Remarketing Service</h2>
                                        <p className="position-title">Web Developer</p>
                                        <p className="position-description">
                                            Created responsive donation pages on www.cardonationwizard.com for the following charities: Habitat for Humanity, American Cancer Society, ASPCA, and UNICEF.
                                        </p>
                                    </div>
                                    <div className="line"></div>
                                    <div className="year">
                                        <p className="dates">Aug 2015 &ndash; Dec 2018</p>
                                    </div>
                                </div>
                            </div>
                            <div className="experience-row left">
                                <div className="experience-row-container">
                                    <div className="content">
                                        <h2>Precision Design Studios</h2>
                                        <p className="position-title">Web Developer</p>
                                        <p className="position-description">
                                            Worked in a team to create solutions for e-commerce projects. Used Demandware to connect the CMS and code for each e-commerce site.
                                        </p>
                                    </div>
                                    <div className="line"></div>
                                    <div className="year">
                                        <p className="dates">May 2014 &ndash; Aug 2015</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;