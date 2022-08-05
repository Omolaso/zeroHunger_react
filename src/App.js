import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Cart from './components/Cart';
import SharedLayout from './components/SharedLayout';
import Products from './components/Products';
import SharedProducts from './components/SharedProducts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/Products/:productsId' element={<SharedProducts/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
