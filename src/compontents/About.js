import React from 'react';
import {Card,Container, Row,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Style from './style.css';
import pdf from './Update Cristina Acosta.pdf';

function About() {
    return (
        <div class="about">
        <Container>
    <Row id="about">
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src="400.png" />
            <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: Cristina Acosta </li>
                    <li class="list-group-item">Location: Seattle, Washington</li>
                    <li class="list-group-item">Email address: ceacosta1313@gmail.com</li>
                    <li class="list-group-item">Phone number: XXX-XXX-XXXX</li>
                </ul>
                </Card.Text>
                <a href = {pdf} target = "_blank">Download My Resume</a>
            </Card.Body>
        </Card>
        
                <Card style={{ width: '40rem' }}  >
            <Card.Body id="sectiontwo">
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                    <p> This is Cristina, a 26-year-old living in Seattle, Washington where my goal is to become a UI/UX designer. I graduated with my BBA in Marketing in 2017. 
                I am currently a full-time student at the University of Washington studying for my Master of Communication in 
                Digital Media and receiving my web development certification in order to get the right tools to achieve this goal. 
                I have 4 years of marketing experience working for Junior Achievement from 2015-2019. I am energetic and a self-starter. 
                I love reading and attaining knowledge.</p>
               <Container>
                <p> Coding Languages:
                <ul class="list-group list-group-flush"> 
                    <li class="list-group-item">HTML/CSS </li>
                    <li class="list-group-item">JavaScript</li>
                    <li class="list-group-item">Node</li>
                    <li class="list-group-item">Express</li>
                    <li class="list-group-item">MySQL</li>
                    <li class="list-group-item">React</li>
                </ul>
                </p>
                </Container>
                <Container>
                <p>Frameworks/Systems:
                <ul class="list-group list-group-flush"> 
                    <li class="list-group-item">Github </li>
                    <li class="list-group-item">VisualStudioCode</li>
                    <li class="list-group-item">BootStrap</li>
                    <li class="list-group-item">Insomnia</li>
                </ul>
                </p>
                </Container>
                </Card.Text>
            </Card.Body>
        </Card>
        </Row>
        </Container>
            </div>
    )
}

export default About;