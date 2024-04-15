import './App.css';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Programs from './components/Programs/Programs';
import Testimonials from './components/Testimonials/Testimonials';
import Title from './components/Title/Title';

//The programs inside the container class will be applied with the css we added in index.css
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle ='OUR PROGRAM' title='What We Offer'/>
        <Programs />
        <About/>
        <Title subTitle ='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle ='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>
      </div>
    </div>
  );
}

export default App;
