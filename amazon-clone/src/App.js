import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header/Header';
import SignIn from './SignIn/SignIn';
import Cart from './Cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          
           <Route exact path="/" element={<><Header/> <Home /></> } />
           <Route exact path="/SignIn" element={<SignIn />} />
           <Route exact path="/Cart" element={<Cart/>} />
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
