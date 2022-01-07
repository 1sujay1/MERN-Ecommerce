import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

// const Cloth = (props) => {
//   console.log(props.match);
//   return <h1>This is Cloth component</h1>
// }
// const ClothDetail = () => {
//   return (
//     <div>
//       <h1>This is ClothDetail component</h1>
//       <Link to='/cloth'>link</Link>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
