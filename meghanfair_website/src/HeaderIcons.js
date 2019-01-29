import React, { Component } from 'react';
import './App.css';
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
            <Navbar brand="Meghan Fair" href='MainPage.js' className="App-navbar brand-logo" left>
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
                <NavItem>
                    <i className="fab fa-linkedin-in"></i>
                </NavItem>
            </Navbar>
        )
    }
}
export default HeaderIcons;