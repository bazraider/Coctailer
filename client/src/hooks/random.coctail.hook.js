// import translate from "translate";

// translate.engine = "google"; // Or "yandex", "libre", "deepl"
// translate.key = "something else";

// async function translateReceipe(receipe) {
//   const text = await translate(receipe, "ru");
//   console.log(text);
// }

async function getRandomCoctail() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const data = await response.json();
  displayRandomCoctail(data);
}

function displayRandomCoctail (coctail) {
  
  //------------------------> Общий контейнер карточки
  const cardCoctail = document.querySelector('.drink-random-section')
  cardCoctail.style.display = 'block';

  //------------------------> Название Коктейля
  const nameCoctail = document.querySelector('.text > h2')
  nameCoctail.innerHTML = coctail.drinks[0].strDrink
  
  //------------------------> Фото Коктейля
  const imgCoctail = document.querySelector('.header > img')
  imgCoctail.setAttribute('src', `${coctail.drinks[0].strDrinkThumb}`);

  //------------------------> Состав Коктейля
  const backSide = document.querySelector('.back');
  const compoundTitleCoctail = document.querySelector('.back > h2');
  compoundTitleCoctail.innerHTML = `Коктейль ${coctail.drinks[0].strDrink}`

  for (let i = 1; i < 16; i++) {

    if (coctail.drinks[0][`strIngredient${i}`] === null || coctail.drinks[0][`strIngredient${i}`] === '') {
      break
    }

    const ingridients = document.createElement('li');
    ingridients.innerHTML = coctail.drinks[0][`strMeasure${i}`] + ': ' + coctail.drinks[0][`strIngredient${i}`];
    backSide.appendChild(ingridients);
  }

  //------------------------> Рецепт Коктейля

  const recipeCoctail = document.querySelector('.back > p');
  recipeCoctail.innerHTML = coctail.drinks[0].strInstructions;

}

export {getRandomCoctail}




  
