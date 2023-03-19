import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { privateRoutes, publicRoutes } from '../../routes';

export default function AppRouter() {
  const { isAuth } = useAppSelector((state) => state.userReducer);

  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      {isAuth &&
        privateRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
    </Routes>
  );
}
