import { useState, useEffect } from 'react'

async function getRandomCoctail() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const data = await response.json();
  displayRandomCoctail(data);
}

function displayRandomCoctail (coctail) {
  console.log(coctail.drinks[0]);

  const drinkSection = document.querySelector('#drink-section');

}

export {getRandomCoctail}




  
