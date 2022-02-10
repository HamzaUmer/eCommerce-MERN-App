import { Route, Routes, Navigate } from 'react-router-dom';
import Cart from "./screens/Cart";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Product from "./screens/Product";
import ProductList from "./screens/ProductList";
import Register from "./screens/Register";
import Pay from './Pay';
import Success from './screens/Success';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
      <Route path="/register" element={user ? <Navigate replace to="/"/> :<Register />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}
export default App;