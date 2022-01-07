import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
