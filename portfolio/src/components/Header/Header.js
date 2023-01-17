import './Header.css';
import {ReactComponent as ReactLogo} from './jf_fed100.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasScrolled: false,
            showMobileNav: false
        }
        this.showMobileNav = this.showMobileNav.bind(this); //Binds the showMobileNav function to this class-based component
        this.hideMobileNav = this.hideMobileNav.bind(this); //Binds the hideMobileNav function to this class-based component
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll); //Adds scroll event listener when user is scrolling on the page.
        window.scrollTo(0, 0); //Scrolls to top of the page after the header has been rendered.
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        let windowScroll = window.scrollY;
        //Determines if the user has scrolled past a certain vertical limit on the page. If so an animation will take place in the header.
        if(windowScroll > 150){
            this.setState({hasScrolled: true});
        }else{
            this.setState({hasScrolled: false});
        }
    };

    showMobileNav = () => {
        this.setState({showMobileNav: true});
    }

    hideMobileNav = () => {
        this.setState({showMobileNav: false});
    }

    render(){
        return(
            <header className={this.state.hasScrolled ? "active" : ""} id={this.state.showMobileNav ? "mobile-nav" : ""}>
                <FontAwesomeIcon icon={faBars} onClick={this.showMobileNav} />
                <div className="leftCol">
                    <Link to="/">
                        <ReactLogo id="logo" />
                    </Link>
                </div>
                <div className="rightCol" id={this.state.showMobileNav ? "mobile" : ""}>
                    <FontAwesomeIcon icon={faXmark} onClick={this.hideMobileNav} />
                    <nav>
                        <ul>
                            <li>
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">PORTFOLIO</Link>
                            </li>
                            <li>
                                <Link to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </nav>
                    <div id="space"></div>
                    <ul id="social">
                        <li>
                            <a href="https://github.com/jf413studios" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/jf413studios/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jose-fuentes-17316b52/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;