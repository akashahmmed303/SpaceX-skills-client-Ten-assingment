import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Courses from '../../Pages/Courses/Courses/Courses';
import FAQ from '../../Pages/FAQ/FAQ/FAQ';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Login/Register/Register';
import ErrorPage from '../../Pages/Shared/ErrorPage/ErrorPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/faqs'),
      },
      {
        path: '/courses/:id',
        element: (
          <PrivateRoute>
            <Courses></Courses>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
      },
      {
        path: '/faq/:id',
        element: (
          <PrivateRoute>
            <FAQ></FAQ>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/faqs/${params.id}`),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
