import React, { Component } from 'react';
import './App.css';
import {Row, Col, Button} from 'react-materialize';

class AboutMe extends Component {

    render() {
        return (
            <div className="Container">
                <Row className="App-header">
                    <Col xl={4} l={4} m={4} s={4} className="App-Title">
                        <div>
                            <h1>About Me</h1>
                        </div>
                    </Col>
                </Row>                    
            </div>
        );
    }

}
export default AboutMe;