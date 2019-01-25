import React, { Component } from 'react';
import './App.css';
import {Row, Col, Button} from 'react-materialize';
import AboutMe from './AboutMe.js';
import {Route, Redirect, Link} from 'react-router-dom';
import {PDF} from "./meghanfair_resume.pdf";

class MainPage extends Component {
    state = {
        navigate: false
    }

    handleUser = () => {
        return <Redirect to="/AboutMe/"/>
    }

    render() {
        return (
            <div className="Container">
                <Row className="App-header">
                    <Col xl={4} l={4} m={4} s={4} className="App-Title">
                        <div>
                            <h1>Meghan Fair</h1>
                        </div>
                    
                    </Col>
                    <Col className="Main-Page-Icons Header-Icons" xl={6} l={6} m={6} s={6}>
                        <Col className="Main-Page-Icons " xl={2} l={2} m={2} s={2}>
                            <Link to="/MainPage/">
                                <Button className="Icon-Btn" flat={true}>
                                    <i className="fas fa-home"></i>
                                </Button>
                            </Link>
                        </Col>
                        <Col className="Main-Page-Icons" xl={2} l={2} m={2} s={2}>
                            <Link to="/AboutMe/">
                                <Button className="Icon-Btn" flat={true} onClick={()=> this.handleUser}>
                                    <i className="fas fa-user"></i>
                                </Button>
                            </Link>
                        </Col>
                        <Col className="Main-Page-Icons" xl={2} l={2} m={2} s={2}>
                            <Button className="Icon-Btn" flat={true}>
                                <i className="fas fa-file-pdf"></i>
                            </Button>
                        </Col>
                        <Col className="Main-Page-Icons" xl={2} l={2} m={2} s={2}>
                            <Button className="Icon-Btn" flat={true}>
                                <i className="fab fa-github"></i>
                            </Button>
                        </Col>
                        <Col className="Main-Page-Icons" xl={2} l={2} m={2} s={2}>
                            <Button className="Icon-Btn" flat={true}>
                                <i className="fab fa-linkedin-in"></i>
                            </Button>
                        </Col>
                    </Col>
                </Row>     
                <Route path="/AboutMe/" component={AboutMe}></Route>
                <Route path="/MainPage/" component={MainPage}></Route> 
            </div>
        );
    }

}
export default MainPage;