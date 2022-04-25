import React, { useState } from 'react'
import translateReceipe from '../hooks/random.coctail.hook'

const FindCoctailByFilter = () => {
  
  const [value, setValue] = useState({coctailInput: ''})
  const [data, setData] = useState(null)

  const changeHandler = event => {
    setValue({ ...value, [event.target.name]: event.target.value })
  }

  const search = async (e) => {
    e.preventDefault();
    try {
      const { coctailInput } = value;
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctailInput}`);
      const data = await response.json();
      const { drinks } = data;
      setData(drinks)
      document.querySelector('.whatShouldYouDo > p').style.display = 'none';
    } catch (error) {
      
    }
  }
  
  const reciepe = (coctailObj) => {
    let array = [];
    for (let i = 1; i < 16; i++) {
      if (coctailObj[`strMeasure${i}`] === null || coctailObj[`strMeasure${i}`] === '') break;
      else array.push(coctailObj[`strMeasure${i}`] + ': ' + coctailObj[`strIngredient${i}`]);
    }
    return array;
  }

  return (
    <>
      <form action="" method="get">
        <input 
          name="coctailInput" 
          placeholder="Искать здесь..."
          onChange={changeHandler} 
          type="search" />
        <button 
          id="onNamePage"
          type="submit"
          onClick={search}
          ></button>
      </form>      

      <div class="whatShouldYouDo">
        <img src="/img/findByNamePic52.png" alt="coctail"></img>
        <p>Введите название коктейля в поисковую строку</p>
      </div>

      <div className="searchResultByName">

      {data &&
          data.map(elem => {
            const img = elem.strDrinkThumb.toString()
            
            return (
             
              <div className="drink-all-section">
                <div className="flipper">
                  <div className="front">
                    <div className="header">
                      <img src={img} alt="img of coctail"/>
                      <div className="text">
                        <h2>{elem.strDrink}</h2>
                      </div>
                    </div>
                  </div>
                  <div className="back">
                    <h2>{`Коктейль ${elem.strDrink}`}</h2>
                    <p>{elem.strInstructions}</p>
                    {reciepe(elem).map(item => <li>{item}</li>)}
                  </div>
                </div>
              </div>
              );
            })}
      </div>

    </>
  )
}

export {FindCoctailByFilter}
