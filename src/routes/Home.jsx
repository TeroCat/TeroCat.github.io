import '../index.css';
import vaccum from '../images/vaccum.jpg';
import hundred from '../images/under 100.jpg';
import wizard from '../images/wizard.jpg';
import suit from '../images/suit.jpg';
import cat1 from '../images/stock/cat110.jpg';
import cat2 from '../images/stock/cat285.jpg';
import cat3 from '../images/stock/cat292.jpg';
import cat4 from '../images/stock/cat301.jpg';

function App(){
  return(
    <div className="Main" style={{backgroundimage: "./images/paw.png"}}>
      <div className="row">
        <div className="column middle">
          <h1>Articles</h1>
          <Articles Image={vaccum} Title={"10 Signs That Your Vaccum is Trying to Kill Your Cat."}/>
          <Articles Image={wizard} Title={"13 Activities That Will Strengthen Your Relationships With Cats."}/>
          <Articles Image={hundred} Title={"Top 10 Most Shatterable Household Objects Over 100 Dollars."}/>
          <Articles Image={suit} Title={"Politicans That Just Got 20 Times More Popular With This One Trick!"}/>
          <Articles Image={cat1} Title={"Age Old Question: Cats Vs. Dogs? -- We Asked Our Readers"}/>
          <Articles Image={cat2} Title={"Are Cats Evil?  Science Says 'Who Cares?'"}/>
          <Articles Image={cat3} Title={"Cats Plotting To Kill You? It's Less Likely Than You Think."}/>
          <Articles Image={cat4} Title={"How To Avoid Staring Contests With Your Cat"}/>

        </div>
        <div className="column side">
          <h2>Trending Now</h2>
          <Trend Image={cat4} Title={"2024's Red Carpet And Their Cats' Looks."} />
          <Trend Image={'../images/stock/cat333.jpg'} Title={""} />
          <Trend Image={'./images/cat110.jpg'} Title={""} />
          <Trend Image={'./images/cat110.jpg'} Title={""} />
          <Trend Image={'./images/cat110.jpg'} Title={""} />
          <Trend Image={'./images/cat110.jpg'} Title={""} />
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
export default function Home(){
  return(
    <App />
  );
}
