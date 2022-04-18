import './App.css';
import travel_01 from './assets/travel-01.jpg';
import travel_02 from './assets/travel-02.jpg';
import travel_03 from './assets/travel-03.jpg';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Navbar from './components/Navbar';

const navbarLinks = [
  {url: '#', title: 'Home'},
  {url: '#', title: 'Projects'},
  {url: '#', title: 'About'},
  {url: '#', title: 'Contacts'},
];

function App() {
  return (
    <div className='App'>
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_01}/>
      <Slider 
        imageSrc={travel_02} 
        title={'This is my small react project'} 
        subtitle={'Project by Vitaliy'}
      />
      <Slider 
        imageSrc={travel_03} 
        title={'Hands-on learning React'} 
        subtitle={'Project by Vitaliy'}
        flipped={true}
      />
    </div>
  );
}

export default App;
