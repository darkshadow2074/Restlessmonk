import './App.css';
import AccountSection from './components/AccountSection';
import Card from './components/Card';
import HeadSection from './components/HeadSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeadSection />
     <Card/>
     <AccountSection/>
    </div>
  );
}

export default App;
