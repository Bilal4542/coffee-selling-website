
import './App.css'
import About from './Components/About'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Menu from './Components/Menu'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Review from './Components/Review'

function App() {
  
  return (
    <>
      <Navbar/>

      <main>
        <div id='/'>
          <Home/>
        </div>
        <div id='menu'>
          <Menu/>
        </div>
        <div id='about'>
          <About/>
        </div>
        <div id='products'>
          <Products/>
        </div>
        <div id='reviews'>
          <Review/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
