import './App.css';
import Navbar from './Navbar';
import TitleSection from './TitleSection';
import NewCollection from './NewCollection';
import NewGoods from './NewGoods';
import Footer from './Footer';
import Infa from './Information';


function App() {
  return (
    <div className="all">
        <Navbar/>
        <TitleSection/>
        <NewCollection/>
        <Infa/>
        <NewGoods/>
        <Footer/>
    </div>

  );
}

export default App;
