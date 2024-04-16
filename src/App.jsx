import Events from "./Components/Events/Events"
import HostYourEventsSection from "./Components/HostYourEventsSection/HostYourEventsSection"
import QrScanner from "./Components/QrScanner/QrScanner"
import Tracking from "./Components/Tracking/Tracking"
import Footer from "./Components/footer/Footer"
import Navbar from "./Components/navbar/Navbar"
import Slider from "./Components/slider/Slider"

function App() {

  return (
    <div className=" mt-[25px] ">
      <div className="container mx-auto">
      <Navbar/>
      <Slider/>
      <Events/>
      <HostYourEventsSection/>
      <QrScanner/>
      <Tracking/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
