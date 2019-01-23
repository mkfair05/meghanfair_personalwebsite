import React, { Component } from 'react';
import './App.css';
import {Row, Col} from 'react-materialize';

class MainPage extends Component {

    render() {
        return (
            <div className="App">
                <Row className="App-header">
                <Col xl={12} l={12} m={12}>
                    <div>
                        <h1 className="App-title">Meghan Fair</h1>
                    </div>
                
                </Col>
                    <div>
                        <div className="Main-Page-Icons">
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