import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Style from './style.css';

function footer () {
    return (
        <div class="footer"> 
        <nav class="navbar fixed-bottom navbar-light bg-dark text-white-50 bg-dark">
        <Container>
        <h6>Social media:
      <a href="https://www.linkedin.com/in/cristina-acosta1313/" class="fab fa-linkedin"></a>
      <a href="https://github.com/CristinaAcosta" class="fab fa-github-square"></a>
      </h6>
      </Container>
    </nav>
    </div>
    )
}
export default footer;