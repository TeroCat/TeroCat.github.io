import '../index.css';
import vaccum from '../images/vaccum.jpg';


function App(){
  return(
    <div className="App">
      <div className="row">
        <div className="column middle">
          <Articles Image={vaccum} Title={"10 Signs That Your Vaccum is Trying to Kill Your Cat."}/>
          <Articles Image={vaccum} Title={"10 Signs That Your Vaccum is Trying to Kill Your Cat."}/>
          <Articles />

        </div>
        <div className="column side">
          <Trend Image={'./images/cat110.jpg'} Title={"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."} />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );  
  
}


function Articles({Image,Title}){
  return(
  <table>
    <tr>
      <th><img src={Image} alt="cat" className="Article" /></th>
      <th>{Title}</th>
    </tr>
  </table>  

  );
}

function Trend({Image, Title}){
  return(
    <div className="Trends">
      <h2>Trending Now</h2>
      <article>
      <img src={Image} alt="cat" className="Trend"/>
      <span> {Title}</span>
      </article>
    </div>
  );
}

function Footer(){
  return(
    <p>This site was created using Neovim and hosted using GitHub Pages.</p>
  );
}
export default function Root(){
  return(
    <App />
  );
}
