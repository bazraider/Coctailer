import React, { useState } from "react";
import translate from "translate";
import "../css/scroll_styles.css"

const RandomCoctailPage = () => {
    
  // ----------------------------------> Переводчик ---------------------------------
  translate.engine = "google"; // Or "yandex", "libre", "deepl"
  translate.key = "something else";

  async function translateText(text) {
    const info = await translate(text, "ru");
    return info;
  }

  // ---------------------------------> Получаем коктейль из базы--------------------
  async function getRandomCoctail() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    return response.json();
  }

  // ---------------------------------> Достаём рецепт из нашего коктейля------------
  const reciepe = (coctailObj) => {
    let array = [];
    for (let i = 1; i < 16; i++) {
      if (coctailObj[`strMeasure${i}`] === null || coctailObj[`strMeasure${i}`] === '') break;
      else array.push(coctailObj[`strMeasure${i}`] + ': ' + coctailObj[`strIngredient${i}`]);
    }
    return array;
  }

  // ------------> Используем useState для хранения данных о полученном коктейле-----
  const [random, setRandom] = useState(null)
  // ------------------> Прочитаем данные полученные и запишем их в стейт ------------
  const clickHandler = async () => {
    const data = await getRandomCoctail();
    const { drinks } = data;
    setRandom(drinks[0])
  }

  return (
    <div>
      <h1>Твой случайный коктейль...</h1>
      
      <a
        className="glow-button"
        onClick={clickHandler}
        >
        Получить
      </a>
      
        {random && (
        <div className="drink-random-section">
        <div className="flipper">
          <div className="front">
            <div className="header">
              <img src={random.strDrinkThumb} alt="random coctail"/>
              <div className="text">
                <h2>{random.strDrink}</h2>
              </div>
            </div>
          </div>
          <div className="back" id="custom_scroll">
            <h2>{random.strDrink}</h2>
            <p>{random.strInstructions}</p>
            {reciepe(random).map((item, index) => <li key={index}>{item}</li>)}
          </div>
        </div>
      </div>
      )}

    </div>
  )
}

export {RandomCoctailPage}
