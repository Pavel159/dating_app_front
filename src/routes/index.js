import Registration from '../components/screens/auth/Registration';
import Login from '../components/screens/auth/Login';
import Home from '../components/screens/home/Home';
import Dashboard from '../components/screens/dashboard/Dashboard';
import RegistrationSuccess from '../components/screens/auth/RegistrationSuccess';

export const publicRoutes = [
  { path: '/registration', element: <Registration /> },
  { path: '/login', element: <Login /> },
  { path: '/', element: <Home /> },
];

export const privateRoutes = [
  { path: '/*', element: <Dashboard /> },
  { path: '/registration-success', element: <RegistrationSuccess /> },
];
