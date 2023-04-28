import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <ul className={css.navList}>
          <li className={css.navListItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.activeNavLink : css.navLink
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={css.navListItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.activeNavLink : css.navLink
              }
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default SharedLayout;
