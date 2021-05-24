import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Player from "./components/player/Player"
import "./app.scss"

function App() {
  return (
    <div className="app">
        <Topbar />
        <div className="sections">
          <Intro />
          <Player /> 
        </div>
    </div>
  );
}

export default App;
