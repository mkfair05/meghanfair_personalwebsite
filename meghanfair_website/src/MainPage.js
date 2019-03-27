import React, { Component } from 'react';
import './App.css';
import {ReusableSideNav} from './ReusableSideNav';
// import {Row, Col, Button} from 'react-materialize';
import AboutMe from './AboutMe.js';
// import {Route, Redirect, Link} from 'react-router-dom';
import HeaderIcons from './HeaderIcons.js';

class MainPage extends Component {
    state = {
        navigate: false
    }

    render() {
        return (
            <div className='body'>
                <HeaderIcons/>
                {/* <ReusableSideNav/> */}

            </div>
        );
    }

}
export default MainPage;