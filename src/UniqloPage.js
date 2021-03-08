import './style.css';
import {
  Link,
  NavLink
} from "react-router-dom";
import React from 'react';
import figma from './figma.png';
import uniqlo from "./uniqlo.png";
import one from "./uniqloPics/1.jpg";
import two from "./uniqloPics/2.jpg";
import three from "./uniqloPics/3.jpg";
import four from "./uniqloPics/4.jpg";
import five from "./uniqloPics/5.jpg";
import six from "./uniqloPics/6.jpg";
import seven from "./uniqloPics/7.jpg";
import eight from "./uniqloPics/8.jpg";
import nine from "./uniqloPics/9.jpg";
import ten from "./uniqloPics/10.jpg";
import eleven from "./uniqloPics/11.jpg";
import twelve from "./uniqloPics/12.jpg";
import thirteen from "./uniqloPics/13.jpg";
import fourteen from "./uniqloPics/14.jpg";
import fifteen from "./uniqloPics/15.jpg";
import sixteen from "./uniqloPics/16.jpg";

function UniqloPage() {
  document.title = "UNIQLO App Redesign";
  return (
    <div className="project">
      <h2 className="project-title">UNIQLO App Redesign</h2>
      <div className="project-created">Feburary 2021</div>
      <img className="logo-resize" src={figma} alt="figma logo"/>
      <br />
      <img className="project-pic-resize" src={uniqlo} alt="uniqlo" />
      <br />
      <div className="info">
        I worked as a retail assistant at UNIQLO for a couple years and I was able to
        observe how consumers used the app and the difficulties they experienced
          while using their shopping and membership services.
        <br />
          <br />
          Using these observations, I have redesigned some of the user journeys
          on the app.
          <br />
            <br />
          The concept was created using Figma.
      </div>


      <div className="project-flex-container">

        <div className="image-with-caption">
          <img className="gallery-resize" src={one} alt="Landing page" />
          Landing page
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={two} alt="Home screen" />
          Home screen
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={three} alt="Search page" />
          Search page
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={four} alt="Profile - Coupons page (logged in)" />
          Profile - Coupons page (logged in)
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={six} alt="Profile - Coupons page (not logged in)" />
          Profile - Coupons page (not logged in)
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={seven} alt="Profile - Purchase history" />
          Profile - Purchase history
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={five} alt="Saved items" />
          Saved items
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={eight} alt="Bag" />
          Bag
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={nine} alt="Search - Category: Tops" />
          Search - Category: Tops
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={fifteen} alt="Product - Size and Colour not selected" />
          Product - Size and Colour not selected
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={sixteen} alt="Product - Size and Colour not selected" />
          Product - Size and Colour selected
        </div>

        <div className="image-with-caption">
        </div>
      </div>

      <br />

      <div className="project-flex-container">
        <div className="info">
          A common observation I made was the difficulty customers had
          when attempting to sign-up.
          <br />
          <br />
          Despite this being paramount to
          increasing customer loyalty, many
          customers felt frustrated with the lack of feedback between the steps
          and the lack of confirmation when the sign-up process was completed.
          <br />
          <br />
          I have designed a simpler sign-up process to address this issue.
        </div>
        <div className="image-with-caption">
          <img className="gallery-resize" src={ten} alt="10" />
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={eleven} alt="11" />
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={twelve} alt="12" />
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={thirteen} alt="13" />
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={fourteen} alt="14" />
        </div>

        <div className="image-with-caption">
        </div>

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

export default UniqloPage;
