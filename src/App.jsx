
// import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";

function App() {

  const categoryLinks1 = [
    { text: 'Terms Of Use', url: '#', current: false },
    { text: 'Privacy policy (New)', url: '#', current: false },
    { text: 'Ad Choices', url: '#', current: false },
    { text: 'Advertising', url: '#', current: false },
    { text: 'Jobs', url: '#', current: false },
    { text: 'Subscriptions', url: '#', current: false },
    { text: 'Talent Workshop', url: '#', current: false },
    { text: 'CPSC Certificates', url: '#', current: false },
    { text: 'Ratings', url: '#', current: false },
    { text: 'Shop Help', url: '#', current: false },
    { text: 'Contact Us', url: '#', current: false },
  ];

  const categoryLinks2 = [
    { text: 'Characters', url: '#', current: false },
    { text: 'Comics', url: '#', current: false },
    { text: 'Movies', url: '#', current: false },
    { text: 'TV', url: '#', current: false },
    { text: 'Games', url: '#', current: false },
    { text: 'Videos', url: '#', current: false },
    { text: 'News', url: '#', current: false },
  ];

  const categoryLinks3 = [
    { text: 'Shop DC', url: '#', current: false },
    { text: 'Shop DC Collectibles', url: '#', current: false },
  ];

  const categoryLinks4 = [
    { text: 'DC', url: '#', current: false },
    { text: 'MAD Magazine', url: '#', current: false },
    { text: 'DC Magazine', url: '#', current: false },
    { text: 'DC Universe', url: '#', current: false },
    { text: 'DC Power Visa', url: '#', current: false },
  ];

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
