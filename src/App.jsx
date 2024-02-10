import './App.css';
import Header from './components/Home/Header';
import SignupCard from './components/Home/SignupCard';
import Footer from './components/Home/Footer';
import Achieve from './components/Home/Achieve';
import Hero from './components/Home/Hero';
import Prize from './components/Home/Prize';
import Hero2 from './components/Home/Hero2';
import Account from './components/Home/Account';

function App() {
  return (
    <div>
      <Header />
      <SignupCard />
      <Achieve />
      <Hero />
      <Prize />
      <Hero2 />
      <Account />
      <Footer />
    </div>
  );
}

export default App;
