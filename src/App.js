import './App.css';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import TopHeader from './components/TopHeader';
import Skill from './components/Skill';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProjectContainer from './components/ProjectContainer';
import "./App.css";
import Contact from './components/Contact';

function App() {
  return (
    <div className='app'>
      <Header/>
      <TopHeader/>
      <Skill/>
      <ProjectContainer/>
      <Contact/>
    </div>
  );
}

export default App;