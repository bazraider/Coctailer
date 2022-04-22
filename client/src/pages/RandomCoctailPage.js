import React from "react";
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
              <h2></h2>
            </div>
          </div>
          <div className="back">
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export {RandomCoctailPage}
