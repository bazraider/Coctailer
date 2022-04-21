import React from "react";
import { useState, useEffect } from 'react';
import { getRandomCoctail } from "../hooks/random.coctail.hook";

const RandomCoctailPage = () => {
   
  return (
    <div>
      <h1>Получи свой случайный коктейль</h1>
      <button 
        type="button" 
        className="btn btn-light btn-lg" 
        id="shadowtest"
        onClick={getRandomCoctail}
        >
        Получить
      </button>

      <div className="drink-section">
        <div className="flipper">
          <div className="front">
            <div className="header">
              <i className="fa fa-creative-commons fa-2x"></i>
              <h3>Wedding Agency</h3>
            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
          <div className="back">
            <h3>About Us</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export {RandomCoctailPage}
