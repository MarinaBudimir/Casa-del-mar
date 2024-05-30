
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import User from './components/User'; 
import Account from './components/Account'; 



function App() {
  return (

   <main>
    <Header/>

    <About/>
   
    <Footer/>
   </main>
  );
}

export default App;
