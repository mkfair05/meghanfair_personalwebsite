import React, { Component } from 'react';
import './App.css';
import {Row, Col, Button} from 'react-materialize';

class MainPage extends Component {

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
                            <Button class="Icon-Btn" flat='true' href="./MainPage.js">
                                <i class="fas fa-home"></i>
                            </Button>
                        </Col>
                        <Col className="Main-Page-Icons" xl={2} l={2} m={2} s={2}>
                            <Button class="Icon-Btn" flat='true' href="../../about_me.html">
                                <i class="fas fa-user"></i>
                            </Button>
                        </Col>
                        <Col className="Main-Page-Icons" xl={2} l={2} m={2} s={2}>
                            <Button class="Icon-Btn" flat='true'>
                                <i class="fas fa-file-pdf"></i>
                            </Button>
                        </Col>
                        <Col className="Main-Page-Icons" xl={2} l={2} m={2} s={2}>
                            <Button class="Icon-Btn" flat='true'>
                                <i class="fab fa-github"></i>
                            </Button>
                        </Col>
                        <Col className="Main-Page-Icons" xl={2} l={2} m={2} s={2}>
                            <Button class="Icon-Btn" flat='true'>
                                <i class="fab fa-linkedin-in"></i>
                            </Button>
                        </Col>
                    </Col>
                </Row>                    
            </div>
        );
    }

}
export default MainPage;