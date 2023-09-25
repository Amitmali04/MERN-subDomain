import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { getApp } from './util/Helpers';

function App() {
const Currunt = getApp();
  
  return (
    <BrowserRouter>
    <Currunt />
    </BrowserRouter>
    
  );
}

export default App;
