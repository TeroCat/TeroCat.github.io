import '../index.css';
import Navbar from './Navbar.jsx'; 
import { Outlet } from "react-router-dom";


function App(){
  return(
    <div className="App">
      <div className="App-title">
        <h1>WetFeed</h1>
      </div>
      <Navbar />
      <Outlet />

    </div>
  );  
  
}

export default function Root(){
  return(
    <App />
  );
}
