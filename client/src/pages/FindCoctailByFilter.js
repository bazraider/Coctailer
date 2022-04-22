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
            return (
              <div className="drink-section">
                <div className="flipper">
                  <div className="front">
                    <div className="header">
                      <i className="fa fa-creative-commons fa-2x"></i>
                      <h2>{elem.strDrink}</h2>
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
