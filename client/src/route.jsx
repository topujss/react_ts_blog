import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Single from './pages/Single';
import Edit from './pages/Edit';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const user = true;

// Create a router
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post/:id',
        element: <Single />,
      },
      {
        path: '/write',
        element: user ? <Edit /> : <Register />,
      },
      {
        path: '/setting',
        element: user ? <Settings /> : <Register />,
      },
      {
        path: '/login',
        element: user ? <Home /> : <Login />,
      },
      {
        path: '/register',
        element: user ? <Home /> : <Register />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
