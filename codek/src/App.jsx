import './App.css'
import Body from './Body'
import Navbar from './Navbar'
import "./Home.css"
import Home from './Home'
import Contact from './Contact'
import "./Contact.css"
import Footer from './Footer'
import About from './About'
import Course from './Course'
import Reviews from './Reviews'
import Card from "./Card"

import RectangleSVG from './RectangleSVG'
function App() {
  

  return (
    <>
   
    {/* <RectangleSVG/> */}
     {/* <Card></Card> */}
      <Navbar></Navbar>
      <Body></Body>
      <About/>
      {/* <Course/> */}
      <Home></Home>
      <Reviews/>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
