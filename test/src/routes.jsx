import App from './App';
import Contact from './Contact';
import Profile from './Profile';
import CV from './CV';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/profile/',
    element: <Profile />,
    // children: [{ path: 'cv', element: <CV /> }],
    // index: true,
  },
  {
    path: '/profile/:name',
    element: <CV />,
    // children: [{ path: 'cv', element: <CV /> }],
    // index: true,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
];

export default routes;
