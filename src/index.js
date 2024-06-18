import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import User from './components/User';
import Products from './pages/Products';
import Seating from './pages/Seating';
import Benches from './pages/Benches';

import Diningchairs from './pages/Diningchairs';
import Loungechairs from './pages/Loungechairs';
import Ottomans from './pages/Ottomans';
import Sofas from './pages/Sofas';
import Stools from './pages/Stools';
import Blog from './pages/Blog'; 

import Blog2 from './pages/Blog2'; 
import Blog3 from './pages/Blog3'; 
import Blog4 from './pages/Blog4'; 
import Blog5 from './pages/Blog5'; 

import Article from './pages/Article'; 
import Article2 from './pages/Article2'; 
import Article3 from './pages/Article3'; 

import Article4 from './pages/Article4'; 
import Article5 from './pages/Article5'; 

import Chiara from './pages/Chiara'; 
import Anthea from './pages/Anthea'; 
import Beatrice from './pages/Beatrice'; 
import Ayla from './pages/Ayla'; 
import Celine from './pages/Celine'; 
import Chloe from './pages/Chloe'; 





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
       {
        path: "/contact",
        element: <Contact />,
      },

       {
        path: "/user",
        element: <User />,
      },
      {
        path: "/seating",
        element: <Seating />,
      },
      {
        path: "/benches",
        element: <Benches />,
      },

      {
        path: "/diningchairs",
        element: <Diningchairs />,
      },
      {
        path: "/loungechairs",
        element: <Loungechairs />,
      },
      {
        path: "/ottomans",
        element: <Ottomans />,
      },
      {
        path: "/sofas",
        element: <Sofas />,
      },
      {
        path: "/stools",
        element: <Stools />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/2",
        element: <Blog2 />,
      },

      

      {
        path: "/blog/3",
        element: <Blog3 />,
      },

      {
        path: "/blog/4",
        element: <Blog4 />,
      },

      {
        path: "/blog/5",
        element: <Blog5 />,
      },

      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "/article2",
        element: <Article2 />,
      },
      {
        path: "/article3",
        element: <Article3 />,
      },
      {
        path: "/article4",
        element: <Article4 />,
      },
      {
        path: "/article5",
        element: <Article5 />,
      },
{
        path: "/chiara",
        element: <Chiara/>,
      },
      {
        path: "/anthea",
        element: <Anthea/>,
      },
      {
        path: "/beatrice",
        element: <Beatrice/>,
      },
      {
        path: "/ayla",
        element: <Ayla/>,
      },
      {
        path: "/celine",
        element: <Celine/>,
      },
      {
        path: "/chloe",
        element: <Chloe/>,
      },


    ]
  },

  // {
  //   path: "/stools",
  //   element: <Stools/>,
  // },
  // {
  //   path: "/stools/:name",
  //   element: <SinlePageStool/>,
  // },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
