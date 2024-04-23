import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending"
import Film from "./components/Film"
import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div class="myBG">
        <NavigationBar />  
        <Intro />    
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="film">
        <Film />
      </div>
    </div>
  );
}

export default App;
