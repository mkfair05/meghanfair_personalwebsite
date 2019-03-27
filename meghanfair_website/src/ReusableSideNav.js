import React, { Component } from 'react';
import './App.css';
import {Navbar, NavItem, Icon, SideNav} from 'react-materialize';
import AboutMe from './AboutMe.js';

class ResusableSideNav extends Component {
    render(){
        return(
            <SideNav
                trigger={<Button></Button>}
                options={{ closeOnClick: true }}
            >
                {/* <SideNavItem userView
                        user={{
                        background: 'img/office.jpg',
                        image: 'img/yuna.jpg',
                        name: this.Prop1.value,
                        email: this.Prop2.value
                    }}
                /> */}
                <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
                <SideNavItem href='#!second'>Second Link</SideNavItem>
                <SideNavItem divider />
                <SideNavItem subheader>Subheader</SideNavItem>
                <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
            </SideNav>
        )
    }
}
export default ResusableSideNav;
