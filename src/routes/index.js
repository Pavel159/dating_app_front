import Registration from '../components/screens/auth/Registration';
import Login from '../components/screens/auth/Login';
import Home from '../components/screens/home/Home';
import Dashboard from '../components/screens/dashboard/Dashboard';

export const publicRoutes = [
  { path: '/registration', element: <Registration /> },
  { path: '/login', element: <Login /> },
  { path: '/', element: <Home /> },
];

export const privateRoutes = [
  { path: '/*', element: <Dashboard /> },
  { path: '/mytodos', element: <Dashboard /> },
];
