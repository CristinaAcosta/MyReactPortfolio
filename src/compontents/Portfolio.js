import React from 'react';
import {Container, Table} from 'react-bootstrap';
import Style from './style.css';


function Portfolio() {
    return (
        <div class="port">
        <Container class="table">
        <Table>
            <thead>
            <tr>
          <th scope="col">#</th>
          <th scope="col">Preview</th>
          <th scope="col">Title</th>
          <th scope="col">Created</th>
          <th scope="col">Site Link</th>
          <th scope="col">Github Link</th>
        </tr>
      </thead>

      <tbody>
        <tr>
        <td>1</td>
          <td><img class="image" src="Project 1.png"/></td>
          <td>Random Acts of Kindness</td>
          <td>Febuary 2021</td>
          <td><a href="https://patrick-brandt.github.io/random_Acts_Of_Kindess/" class="btn btn-primary">Click here</a></td>
          <td><a href="https://github.com/Patrick-Brandt/random_Acts_Of_Kindess" class="btn btn-primary">Click here</a></td>
        </tr>

        <tr>
          <td> 2</td>
          <td>< img class="image"src="Coding.png"/></td>
          <td>Coding Challenge</td>
          <td>January 2021</td>
          <td> <a href="https://cristinaacosta.github.io/CodingQuiz.github.io/index.html" class="btn btn-primary">Click here</a></td>
          <td> <a href="https://github.com/CristinaAcosta/CodingQuiz.github.io" class="btn btn-primary">Click here</a></td>
        </tr>
  
        <tr>
          <td>3</td>
          <td>
          <img class="image" src="Calendar.png"/>
          </td>
          <td>Calendar Challenge</td>
          <td>January 2021</td>
          <td> <a href="https://cristinaacosta.github.io/workdayplanner/." class="btn btn-primary">Click here</a></td>
          <td> <a href="https://github.com/CristinaAcosta/workdayplanner" class="btn btn-primary">Click here</a></td>
        </tr>

        <tr>
          <td>4</td>
          <td><img class="image" src="Envision.png"/></td>
          <td>Envision Student Portal</td>
          <td>April 2021</td>
          <td> <a href="https://wow-envision.herokuapp.com/" class="btn btn-primary">Click here</a></td>
          <td> <a href="https://github.com/charvey0/Envision" class="btn btn-primary">Click here</a></td>
        </tr>

        <tr>
          <td>5</td>
          <td>
          <img class="image" src="Calendar.png"/>
          </td>
          <td>Weather API</td>
          <td>Febuary 2021</td>
          <td> <a href="https://cristinaacosta.github.io/weather.io.github/" class="btn btn-primary">Click here</a></td>
          <td> <a href="https://github.com/CristinaAcosta/weather.io.github" class="btn btn-primary">Click here</a></td>
        </tr>

        <tr>
          <td>6</td>
          <td>
          <img class="image" src="Haperson.jpg"/>
          </td>
          <td>Haperson Template</td>
          <td> December 2020</td>
          <td> <a href="https://cristinaacosta.github.io/CodeRefractor/" class="btn btn-primary">Click here</a></td>
          <td> <a href="https://github.com/CristinaAcosta/CodeRefractor" class="btn btn-primary">Click here</a></td>
        </tr>

        </tbody>
        </Table>
        </Container>
        </div>
    )
}

export default Portfolio;