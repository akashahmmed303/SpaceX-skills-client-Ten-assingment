import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Courses from '../../Pages/Courses/Courses/Courses';
import FAQ from '../../Pages/FAQ/FAQ/FAQ';
import Home from '../../Pages/Home/Home/Home';

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
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
      },
      {
        path: '/faq/:id',
        element: <FAQ></FAQ>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/faqs/${params.id}`),
      },
    ],
  },
]);
