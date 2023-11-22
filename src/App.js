
import './App.css';
import AppRoutes from './components/AppRouts';
import {BrowserRouter} from 'react-router-dom'
import Users from './components/Users'

function App() {
  return (
   <>
   <BrowserRouter><AppRoutes></AppRoutes></BrowserRouter>
   
   </>
  );
}

export default App;
