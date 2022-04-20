import {NavLink, Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/find">Find Coctail</NavLink>
      <NavLink to="/random">Random Coctail</NavLink>
      <NavLink to="/user/:id">User room</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Registration</NavLink>
    </header>

    <main className='container'>
      <Outlet />
    </main>

    <footer>2022</footer>
    </>
  )
}

export {Layout}
