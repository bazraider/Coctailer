import React, { useState } from 'react'

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

      console.log(drinks);

      setData(drinks)
    } catch (error) {
      
    }
  }

  return (
    <div>
      <h1>Find Coctail By Filter</h1>

      <li className="nav-item mx-auto">
        <form className="form-inline">
          <input 
            name="coctailInput" 
            className="form-control" 
            type="text" 
            onChange={changeHandler}
            placeholder="Введите название коктейля" />
          <button 
            className="btn btn-outline-success" 
            onClick={search}
            type="submit">Search</button>
        </form>
      </li>

      <div className="polina">

      {data &&
          data.map(elem => {
            const img = elem.strDrinkThumb.toString()
            
            const backSide = document.querySelector('.back');
            
            for (let i = 1; i < 16; i++) {

              if (elem[`strIngredient${i}`] === null || elem[`strIngredient${i}`] === '') {
                break
              }

              const ingridients = document.createElement('ingridients-list');
              ingridients.innerHTML = elem[`strMeasure${i}`] + ': ' + elem[`strIngredient${i}`];
              backSide.appendChild(ingridients);
            }







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
                    <p></p>
                  </div>
                </div>
              </div>
              );
            })}
      </div>

    </div>
  )
}

export {FindCoctailByFilter}
