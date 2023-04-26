import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movie</NavLink>
        </li>
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
