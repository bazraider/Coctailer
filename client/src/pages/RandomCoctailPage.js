import React from "react";
import { getRandomCoctail } from "../hooks/random.coctail.hook";


const RandomCoctailPage = () => {
    
  return (
    <div>
      <h1>Твой случайный коктейль...</h1>
      <button 
        type="button" 
        className="btn btn-light btn-lg" 
        id="shadowtest"
        onClick={getRandomCoctail}
        >
        Получить
      </button>

      <div className="drink-random-section">
        <div className="flipper">
          <div className="front">
            <div className="header">
              <img src=""/>
              <div className="text">
                <h2></h2>
              </div>
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
