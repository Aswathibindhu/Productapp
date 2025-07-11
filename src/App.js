import logo from './logo.svg';
import './App.css';
import Addproduct from './Components/Addproduct';
import Searchproduct from './Components/Searchproduct';
import Deleteproduct from './Components/Deleteproduct';
import ViewAllProducts from './Components/ViewAllProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={ <Addproduct/> } />
        <Route path="/search" element={ <Searchproduct/> } />
        <Route path="/delete" element={ <Deleteproduct/> } />
        <Route path="/view" element={ <ViewAllProducts/> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
