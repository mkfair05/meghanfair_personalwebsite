import React, { Component } from 'react';
import './App.css';
import ReusableSideNav from './ReusableSideNav';
import {Navbar, NavItem, Icon} from 'react-materialize';
import AboutMe from './AboutMe.js';

class HeaderIcons extends Component {

    handleClick = () => {
        return (
            <AboutMe/>
        )
    }
    render(){
        return(
            <Navbar brand="Meghan Fair" className="brand-logo App-navbar" left>
                <ReusableSideNav/>
                <NavItem href='MainPage.js'>
                    <Icon>home</Icon>
                </NavItem>
                <NavItem href='AboutMe.js'>
                    <Icon>person</Icon>
                </NavItem>
                <NavItem href='meghanfair_resume.pdf'>
                    <Icon>attachment</Icon>
                </NavItem>
                <NavItem href="https://github.com/mkfair05/mkfair05.github.io">
                    <i className="fab fa-github"></i>
                </NavItem>
                <NavItem href="https://www.linkedin.com/in/meghan-fair-05/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </NavItem>
            </Navbar>
        )
    }
}
export default HeaderIcons;