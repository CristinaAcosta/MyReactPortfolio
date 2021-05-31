import React from 'react';
import {Col,Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'


function Home() {
    return (
        <div class="Home">
            <Container >
                <Jumbotron>
                <img id="banner" src="Cup.jpeg"></img>
                <h1 className="display-3">Hello!</h1>
        <hr className="my-2" />
        <p className="lead">My name is Cristina Acosta and this is my portfolio. </p>
                </Jumbotron>
                </Container>
            </div>
    )
}

export default Home;