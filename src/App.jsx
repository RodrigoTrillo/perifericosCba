import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/todo' element={<ItemListContainer/>} />
    <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
   </Routes>
   </BrowserRouter>
   </>
    
  );
}

export default App;
