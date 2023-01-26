import './Portfolio.css';
import Header from '../../components/Header/Header';
import React from 'react';
import CosentyxImage from './images/cosentyx-landing-page.png';
import MerckImage from './images/keytruda-landing-page.png';
import SoCleanImage from './images/soclean-landing-page.png';
import ZiftrshopImage from './images/ziftrshop-landing-page.png';
import TruRedImage from './images/tru-red-landing-page.png';
import NxtImage from './images/nxt-landing-page.png';
import WizardImage from './images/wizard-landing-page.png';
import ArscarsImage from './images/arscars-mbid-landing-page.png';

class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showWorkSample: false,
            hidePortfolio: false,
            selectedSampleId: ""
        }

        this.showWorkSample = this.showWorkSample.bind(this);
        this.hideWorkSample = this.hideWorkSample.bind(this);
    }

    showWorkSample = (sampleId) => {
        this.setState({showWorkSample: true, hidePortfolio: true, selectedSampleId: sampleId});
        document.getElementById(sampleId).classList.add("active"); //adds an active class to the specific work sample the user wants to see
        window.scrollTo(0, 0); //scrolls to top of page once a work sample has been clicked
    }

    hideWorkSample = () => {
        this.setState({showWorkSample: false, hidePortfolio: false});
        document.getElementById(this.state.selectedSampleId).classList.remove("active"); //removes active class from last viewed work sample
    }

    render(){
        return(
            <div className="portfolio">
                <Header />
                <div className="page-content">
                    <div className={"row " + (this.state.hidePortfolio ? 'hide' : '')}>
                        <div className="column">
                            <div className="portfolio-card" onClick={() => this.showWorkSample("cosentyx")}>
                                <div className="portfolio-card-content">
                                    <h2 className="title">Cosentyx Landing Page</h2>
                                    <p className="company">HealthCasts Media</p>
                                    <p className="year">2022</p>
                                </div>
                            </div>
                            <div className="portfolio-card" onClick={() => this.showWorkSample("merck")}>
                                <div className="portfolio-card-content">
                                    <h2 className="title">Merck Keytruda Landing Page</h2>
                                    <p className="company">HealthCasts Media</p>
                                    <p className="year">2022</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="portfolio-card" onClick={() => this.showWorkSample("soclean")}>
                                <div className="portfolio-card-content">
                                    <h2 className="title">SoClean<sup>&reg;</sup> Website Redesign</h2>
                                    <p className="company">AirTank</p>
                                    <p className="year">2021</p>
                                </div>
                            </div>
                            <div className="portfolio-card" onClick={() => this.showWorkSample("ziftrshop")}>
                                <div className="portfolio-card-content">
                                    <h2 className="title">Ziftrshop<sup>&trade;</sup> Landing Page</h2>
                                    <p className="company">AirTank</p>
                                    <p className="year">2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="portfolio-card" onClick={() => this.showWorkSample("trured")}>
                                <div className="portfolio-card-content">
                                    <h2 className="title">TRU RED<sup>&trade;</sup> Landing Page</h2>
                                    <p className="company">Craft Studios Boston LLC</p>
                                    <p className="year">2019</p>
                                </div>
                            </div>
                            <div className="portfolio-card" onClick={() => this.showWorkSample("nxt")}>
                                <div className="portfolio-card-content">
                                    <h2 className="title">NXT Technologies<sup>&trade;</sup> Landing Page</h2>
                                    <p className="company">Craft Studios Boston LLC</p>
                                    <p className="year">2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="portfolio-card" onClick={() => this.showWorkSample("wizard")}>
                                <div className="portfolio-card-content">
                                    <h2 className="title">Car Donation Wizard<sup>&trade;</sup> Charities Landing Page</h2>
                                    <p className="company">Advanced Remarketing Services</p>
                                    <p className="year">2017</p>
                                </div>
                            </div>
                            <div className="portfolio-card" onClick={() => this.showWorkSample("mbid")}>
                                <div className="portfolio-card-content">
                                    <h2 className="title">Arscars mBid Platform</h2>
                                    <p className="company">Advanced Remarketing Services</p>
                                    <p className="year">2016</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="work-samples" className={this.state.showWorkSample ? 'active' : ''}>
                        <div id="back-button" className="cta" onClick={this.hideWorkSample}>Back</div>
                        <div className="work-samples-container">
                            <div id="cosentyx" className="sample">
                                <h1>Cosentyx Landing Page</h1>
                                <img src={CosentyxImage} alt="Cosentyx Logo"/>
                            </div>
                            <div id="merck" className="sample">
                                <h1>Merck Keytruda Landing Page</h1>
                                <img src={MerckImage} alt="Merck Logo"/>
                            </div>
                            <div id="soclean" className="sample">
                                <h1>SoClean<sup>&reg;</sup> Website Redesign</h1>
                                <p>View website <a href="https://www.soclean.com/" target="_blank" title="SoClean Website" rel="noopener">here</a>.</p>
                                <img src={SoCleanImage} alt="SoClean Logo"/>
                            </div>
                            <div id="ziftrshop" className="sample">
                                <h1>Ziftrshop<sup>&trade;</sup> Landing Page</h1>
                                <p>View website <a href="https://www.ziftrshop.com/" target="_blank" title="Ziftrshop Website" rel="noopener">here</a>.</p>
                                <img src={ZiftrshopImage} alt="Ziftrshop Logo"/>
                            </div>
                            <div id="trured" className="sample">
                                <h1>TRU RED<sup>&trade;</sup> Landing Page</h1>
                                <p>View website <a href="https://www.staples.com/tru-red/cat_SC350051" target="_blank" title="TRU RED Website" rel="noopener">here</a>.</p>
                                <img src={TruRedImage} alt="Tru Red Logo"/>
                            </div>
                            <div id="nxt" className="sample">
                                <h1>NXT Technologies<sup>&trade;</sup> Landing Page</h1>
                                <p>View website <a href="https://www.staples.com/nxt-technologies/cat_SC350050" target="_blank" title="NXT Technologies Website" rel="noopener">here</a>.</p>
                                <img src={NxtImage} alt="NXT Technologies Logo"/>
                            </div>
                            <div id="wizard" className="sample">
                                <h1>Car Donation Wizard<sup>&trade;</sup> Charities Landing Page</h1>
                                <p>View website <a href="https://www.cardonationwizard.com/all-charities/" target="_blank" title="Car Donzation Wizard Website" rel="noopener">here</a>.</p>
                                <img src={WizardImage} alt="Car Donation Wizard Logo"/>
                            </div>
                            <div id="mbid" className="sample">
                                <h1>Arscars mBid Platform</h1>
                                <p>View website <a href="https://www.arscars.com/mbid-2/" target="_blank" title="Arscars mBid Platform" rel="noopener">here</a>.</p>
                                <img src={ArscarsImage} alt="Arscars Logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;