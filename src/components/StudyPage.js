import '../style.css';
import {
  Link,
  NavLink
} from "react-router-dom";
import React from 'react';
import figma from '../images/figma.png';
import study from '../studyPics/study.png';
import book from '../studyPics/book.png';
import building from '../studyPics/building.png';
import level from '../studyPics/level.png';
import login from '../studyPics/login.png';
import results from '../studyPics/results.png';
import time from '../studyPics/time.png';
import type from '../studyPics/type.png';
import upcoming from '../studyPics/upcoming.png';
import when from '../studyPics/when.png';
import unswLanding from '../studyPics/unswLanding.png';
import bookProcess from '../studyPics/bookProcess.png';
import persona1 from '../studyPics/persona1.png';
import persona2 from '../studyPics/persona2.png';
import sketch1 from '../studyPics/sketch1.jpeg';
import sketch2 from '../studyPics/sketch2.jpeg';
import testing from '../studyPics/testing.png';


function StudyPage() {
  document.title = "Study@ App Prototype";
  return (
    <div className="project" id="test">
      <h2 className="project-title">Study@ App Prototype</h2>
      <div className="project-created">March 2021</div>
      <img className="logo-resize" src={figma} alt="figma logo"/>
      <br />
      <img className="project-pic-resize" src={study} alt="study" />
      <br />
      <div className="info">
        As I tried to book a room at UNSW Library every week, I found the process very
        tedious and difficult. Therefore, I aimed to make booking study spaces more
        efficient and exciting.
          <br />
          <br />
          <p className="heading">Design Process</p>
          Empathize -> Define -> Ideate -> Prototype -> Test
          <p className="heading">Empathize</p>
          With the COVID19 pandemic affecting how we interact with spaces,
          universities had to ensure that capacity requirements were met by
          ensuring that students booked their study spaces.
          Currently at UNSW, there is no app to book rooms to study in - only online.
          <br />
          <br />
          <img className="project-pic-resize" src={unswLanding} alt="UNSW Library Page" />
          Current booking system
          <br />
          <br />
            <p className="subHeading">Challenges with the current platform and process</p>
          <ol>
            <li>Difficult checking upcoming bookings - can only check by searching
            for confirmation email.
            </li>
            <li>Building levels are prioritized over capacity/type of space
              <img className="project-pic-resize" src={bookProcess} alt="UNSW Room Booking"/>
            </li>
            <li>Students are unable to view rooms by their equipment e.g. screen,
            power points etc.
            </li>
          </ol>
          <p className="heading">Define</p>
          <p className="subHeading">Problem statement </p>
          Students require an easy way to book study spaces that
          prioritizes the most common needs.
          <br />
          <br />
          <p className="subHeading">Research and Observations</p>
          <p className="subHeading2">Personas</p>
          <img className="project-pic-resize" src={persona1} alt="Persona 1"/>
          <img className="project-pic-resize" src={persona2} alt="Persona 2"/>
          <br />
          <br />
          <p className="subHeading2">Research Questions</p>
          <ol>
            <li>How often are students booking study spaces at UNSW?
            </li>
            <li>Why are students booking study spaces?
            </li>
            <li>What are the most important things when booking study spaces?
            </li>
          </ol>
          I conducted informal questionnaires with my peers by asking these questions.
          <p className="subHeading2">Observations</p>
          <ol>
            <li>How often are students booking study spaces at UNSW?
            <br />
            <br />
            Many weren't booking study spaces due to the online process and its
            inconvience. There were also responses that study spaces were not
            required as it was relatively easy to find other empty spaces in different
            buildings.
            </li>
            <br />
            <li>Why are students booking study spaces?
            <br />
            <br />
            For students who were booking study spaces, many were booking for scheduled
            events, online classes or interviews.
            </li>
            <br />
            <li>What are the most important things when booking study spaces?
            <br />
            <br />
            The most important thing students considered when booking a study space
            was the capacity and date/time. Then it was building, equipment (e.g.
            screen, whiteboard, power point) then the level in the building.
            </li>
          </ol>
          <p className="heading">Ideate</p>
          <p className="subHeading">Study@</p>
          Study@ is a space booking application that allows students to find the
          perfect study space. The app streamlines the booking process and is aimed
          to replace the current system offered via the UNSW Library website.
          <br />
          The app can also be used with other institutions (Study@______) and offers
          a standarized way to book study spaces for universities and libraries.
          <p className="heading">Prototype</p>
          <p className="subHeading">Sketches</p>
          <img className="project-pic-resize" src={sketch1} alt="Sketch 1"/>
          <p className="subHeading">High-Fidelity Mockup Screens</p>

          <div className="project-flex-container">

            <div className="image-with-caption">
              <img className="gallery-resize" src={login} alt="Landing page" />
              Log in using university account to ensure only students can book.
            </div>

            <div className="image-with-caption">
              <img className="gallery-resize" src={building} alt="Home screen" />
              Select building and can also rebook previously booked rooms.
            </div>

            <div className="image-with-caption">
              <img className="gallery-resize" src={type} alt="Type of space" />

            </div>

            <div className="image-with-caption">
              <img className="gallery-resize" src={when} alt="Date" />

            </div>

            <div className="image-with-caption">
              <img className="gallery-resize" src={time} alt="Time" />

            </div>

            <div className="image-with-caption">
              <img className="gallery-resize" src={results} alt="Results" />

            </div>

            <div className="image-with-caption">
              <img className="gallery-resize" src={level} alt="Can filter by level" />

            </div>

            <div className="image-with-caption">
              <img className="gallery-resize" src={book} alt="Book" />

            </div>

            <div className="image-with-caption">
              <img className="gallery-resize" src={upcoming} alt="Upcoming bookings" />

            </div>

            <div className="image-with-caption">
            </div>
          </div>

          <p className="heading">Usability Testing</p>
          <p className="subHeading">Heuristics</p>
          <img className="gallery-resize" src={testing} alt="Heuristics Testing" />

      </div>


      <div className="project-flex-container">


      </div>

      <ul className="nav">
        <li>
          <NavLink exact to='/'
            activeStyle={{
              color: '#282c34',
              backgroundColor: '#c4c9d2',
              borderColor: '#c4c9d2',
              borderStyle: 'solid',
              borderWidth: 'thin'
            }}
          >Take me home</NavLink>
        </li>
      </ul>

    </div>
  );
}

export default StudyPage;
