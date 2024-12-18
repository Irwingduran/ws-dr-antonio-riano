import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Stats from './components/Stats'
import Service from './components/Service'
import About from './components/About'
import VideoSection from './components/VideoSection'
import Partners from './components/Partners'
import LocationMap from './components/LocationMap'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Banner from './components/Banner'
function App() {
  
  return (
    <>
    <nav>
    <Navbar/>
    </nav>
    <div>
      <Home/>
      <Stats/>
      <Service/>
      <About/>
      <Partners/>
      <Banner/>
      <VideoSection/>
      <LocationMap/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App
