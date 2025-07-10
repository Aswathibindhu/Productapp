import logo from './logo.svg';
import './App.css';
import Addproduct from './Components/Addproduct';
import Searchproduct from './Components/Searchproduct';
import Deleteproduct from './Components/Deleteproduct';
import ViewAllProducts from './Components/ViewAllProducts';

function App() {
  return (
    <div>

      <Addproduct/>

      <Searchproduct/>

      <Deleteproduct/>
      

      <ViewAllProducts/>
    </div>
  );
}

export default App;
