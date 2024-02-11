import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
