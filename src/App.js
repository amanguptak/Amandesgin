import './App.css';
import Benefactors from './components/Benefactors/Benefactors';
import Card from './components/Card/Card';
import Casestudy from './components/casestudy/Casestudy';
import Comp2 from './components/comp2/Comp2';
import Footer from './components/Footer/Footer';
import Frame from './components/Frame/Frame';
import Header from './components/Header/Header';
import Moto from "./components/Slogan/Slogan"
import Static from './components/Static/Static';
import Subscribe from './components/Subscribe/Subscribe';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Header/>
      <Moto/>
      <Static/>
      <Card/>
      <Comp2/>
      <Benefactors/>
      <Casestudy/>
      <Frame/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
