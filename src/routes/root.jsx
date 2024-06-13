import '../index.css';
import Bar from './Navbar.jsx'; 
import Home from './Home.jsx';




function App(){
  return(
    
      <div className="App">
        <div className="App-title">
         <h1>WetFeed</h1>
        </div>
        <Bar />
        <Home />
      </div>
  );  
  
}

export default function Root(){
  return(
    <App />
  );
}
