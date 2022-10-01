import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Cart from './Pages/Cart/Cart';
import Account from './Pages/AccountPage/Account';
import Beauty from './Pages/Products/Beauty';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Homepage/Home';
import SingleProduct from './Pages/Products/Product';
import DummyProducts from './Pages/Products/DummyProducts';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/beauty" element={<Beauty/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/account/:id' element={<Account/>}/>
        <Route path='/cart' element={<Cart/>} />
        {/* <Route path='/products' element={<DummyProducts/>} /> */}
        <Route path = "/products/:id" element = {<SingleProduct />} />
      </Routes>
    <Footer/>   
    </div>
  );
}

export default App;
