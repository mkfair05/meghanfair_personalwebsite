import React, { Component } from 'react';
import './App.css';
import {Row, Col} from 'react-materialize';

class MainPage extends Component {

    render() {
        return (
            <div className="Container">
                <Row className="App-header">
                    <Col xl={12} l={12} m={12} className="App-Title">
                        <div>
                            <h1>Meghan Fair</h1>
                        </div>
                    
                    </Col>
                    <div className="Main-Page-Icons">
                        <div>
                            <i class="fas fa-home"></i>
                        </div>
                        <div>
                            <i class="fab fa-github"></i>
                        </div>
                        <i class="fas fa-file-pdf"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                </Row>


            </div>
        );
    }

}
export default MainPage;