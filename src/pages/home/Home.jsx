import Navbar from '../../components/Navbar'
import Hero from './Hero'
import Stats from './Stats'
import Service from './Service'
import About from './About'
import VideoSection from './VideoSection'
import Partners from './Partners'
import LocationMap from './LocationMap'
import Contact from './Contact'
import Footer from '../../components/Footer'
import Banner from './Banner'
import Reviews from './Reviews'
import Mockup from './Mockup'
function App() {
  
  return (
    <>
    <nav>
    <Navbar/>
    </nav>
    <div>
      <Hero/>
      <Stats/>
      <About/>
      <Partners/>
      <Service/>
      <Banner/>
      <VideoSection/>
      <Mockup/>
      <LocationMap/>
     <Reviews/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App
