import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import SingleBlogPage from '../pages/SingleBlogPage';
import AllBlog from '../pages/AllBlog';
import AllJobs from '../pages/AllJobs';
import SingleJobPage from '../pages/SingleJobPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/all-blog',
        element: <AllBlog />,
      },
      {
        path: '/all-blog/:id',
        element: <SingleBlogPage />,
      },
      {
        path: '/all-jobs',
        element: <AllJobs />,
      },
      {
        path: '/all-jobs/:id',
        element: <SingleJobPage />,
      },

      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
