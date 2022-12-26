import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <BrowserRouter >
        <Navbar />
          <Routes>
              <Route path='/' element={<Home/>} ></Route>
              <Route path='/cart' element={<Cart/>} ></Route>
          </Routes>
        <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
