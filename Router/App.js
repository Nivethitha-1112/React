import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Landingpage from './components/Landingpage';
import Signin from './components/Signin';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/sign-in" element={<Signin/>} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
