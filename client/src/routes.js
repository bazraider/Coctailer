import React from 'react';
import {Route} from 'react-router-dom';
import {IndexPage} from './pages/IndexPage';
import {RandomCoctailPage} from './pages/RandomCoctailPage';
import {FindCoctailByFilter} from './pages/FindCoctailByFilter';
import {UserRoom} from './pages/UserRoom';
import {NotFoundPage} from './pages/NotFoundPage';
import {Registration} from './pages/Registration';
import {Login} from './pages/Login';
import {Layout} from './components/Layout';

export const useRoutes = (isAuthenticated) => {
  // if (isAuthenticated) {
    return (
      <Route path="/" element={<Layout />}>
        <Route index element={ <IndexPage /> } />
        <Route path="/find" element={<FindCoctailByFilter />} />
        <Route path="/random" element={<RandomCoctailPage />} />
        <Route path="/user/:id" element={<UserRoom />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  // }

  // return (
  // <Route path='/' element={<Layout />}>
    //     <Route index element={ <IndexPage /> } />
    //     <Route path="/find" element={<FindCoctailByFilter />} />
    //     <Route path="/random" element={<RandomCoctailPage />} />
    //     <Route path="/user/:id" element={<UserRoom />} />
    //  <Route path="*" element={<NotFoundPage />} />
  // )
}
