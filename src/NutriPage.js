import './style.css';
import {
  Link
} from "react-router-dom";
import React from 'react';
import nutri from './nutri.png';
import adobexd from './adobexd.png';
import one from './nutriPics/1.png';
import two from './nutriPics/2.png';
import three from './nutriPics/3.png';
import four from './nutriPics/4.png';
import five from './nutriPics/5.png';

function NutriPage() {
  document.title = "Nutri App Prototype";
  return (
    <div className="project">
      <h2 className="project-title">Nutri App Prototype</h2>
      <div className="project-created">Feburary 2021</div>
      <img className="logo-resize" src={adobexd} alt="adobe xd logo"/>
      <br />
      <img className="project-pic-resize" src={nutri} alt="nutri" />
      <br />
      <div className="info">
      Nutri is an application that aims to simplify the lives people with
      dietary requirementes by reducing the burden of reading long
      nutritional information labels.
      <br />
      <br />
      The basic functionalities of the application shown are -
      searching and scanning for food products, how to interpret the
      results and viewing past searches.
      <br />
      <br />
      The concept was built on Adobe Experience Design.
      </div>


      <div className="project-flex-container">

        <div className="image-with-caption">
          <img className="gallery-resize" src={one} alt="Landing page" />
          Landing page - Users can select the dietary requirements
          that are relevant to them
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={two} alt="Search page" />
          Search page - Users can search, scan barcode or browse to find
          their products. Users can easily chnage their dietary filters.
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={three} alt="Product result - successful" />
          Product result - A successful product page. Users can experiment
          with the dietary options without leaving the page.
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={five} alt="Product result - unsuccessful" />
          Product result - An unsuccessful product page. The ingredients that
          affect the result are highlighted.
        </div>

        <div className="image-with-caption">
          <img className="gallery-resize" src={four} alt="" />
          Search history - users can access the most recent searches.
        </div>

        <div className="image-with-caption">
        </div>

      </div>
      <Link to='/'>Take me home</Link>

    </div>
  );
}

export default NutriPage;
