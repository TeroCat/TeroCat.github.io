import cat1 from './images/cat285.jpg'
import './App.css';

function App(){
  return(
    <div className="App">
      <Title />
      <Header />
      <div class="row">
        <div className="column middle">
          <Articles />
        </div>
        <div className="column side">
          <Trend />
        </div>
      </div>
    </div>
  );  
  
}

function Title(){
  return (
    <div className="App-title">
      <h1>WetFeed</h1>
    </div>
  );
}

function Trend(){
  return(
    <div className="Trends">
      <h2>Trending Now</h2>
      <article>
      <img src={cat1} alt="cat" className="Trend"/>
      <span> Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</span>
      </article>
    </div>
  );
}

function Articles(){
  return(
  <table>
    <tr>
      <th><img src={cat1} alt="cat" className="Article" /></th>
      <th>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</th>
    </tr>
  </table>  

  );
}

function Header() {
  return(
    <div className="topnav">
      
        <a href="" target="_blank">Home</a>
        <a href="" target="_blank">Quizzes</a>
        <a href="" target="_blank">Shopping</a>
        <a href="" target="_blank">Articles</a>
    </div>
  );
  
}
export default function Main(){
  return(
    <App />
  );
}
