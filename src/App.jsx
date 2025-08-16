// App.jsx

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddData from './components/AddData';
import DASHBOARD from './components/DASHBOARD.JSX';


const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <DASHBOARD />,
  },
  {
    path: '/add',
    element: <AddData />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;

