import './App.css';
import Nav from './App/Nav';
import Profile from './App/Content/Profile';
import About from './App/Content/About';
import Skills from './App/Content/Skills';
import Contact from './App/Content/Contact';

const App = () => (
  <div className="App">
    <Nav />
    <Profile />
    <About />
    <Skills />
    <Contact />
  </div>
);
    

export default App;
