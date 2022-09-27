import './App.css';
import {Routes,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Cart from './Pages/Cart/Cart';
import Account from './Pages/AccountPage/Account';
function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/account/:id' element={<Account/>}/>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    <Footer/>   
    </div>
  );
}

export default App;
