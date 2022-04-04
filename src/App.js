import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componnets/Footer/Footer';
import Navbar from './componnets/Navbar/Navbar';
import NotFound from './componnets/NotFound/NotFound';
import About from './componnets/Pages/About/About';
import Blogs from './componnets/Pages/Blogs/Blogs';
import Dashboard from './componnets/Pages/Dashboard/Dashboard';
import Home from './componnets/Pages/Home/Home';
import Reviews from './componnets/Pages/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
