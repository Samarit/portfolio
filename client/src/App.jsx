import './css/_reset.sass'
import './css/App.sass'
import './css/Pages.sass'
import './css/Navbar.sass'
import Navbar from "./components/Navbar"
import Content from "./components/Content";


function App() {

  return (
    <div className="App">
          
          <Navbar />

          <Content />

    </div>
  );
}

export default App