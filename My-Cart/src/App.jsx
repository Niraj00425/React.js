import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // for collapse/toggle to work
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}

export default App;
