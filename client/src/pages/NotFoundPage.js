import React from "react";
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Такая страница не найдена. Пожалуйста, перейдите на <Link to="/">главную страницу</Link></h1>
    </div>
  )
}

export {NotFoundPage}
