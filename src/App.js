
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import User from './components/User'; 
import Account from './components/Account'; 
import Card from './components/Card'; 
import Blogcard from './components/Blogcard';
import Articlecard from './components/Articlecard';
import Collage from './components/Collage';
import Additionalinfo from './components/Additionalinfo';
import Salescard from './components/Salescard'; 


function App() {
  return (

   <main>
    <Header/>

    <Outlet/>
   
    <Footer/>
   </main>
  );
}

export default App;
