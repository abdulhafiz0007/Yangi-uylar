import './App.css'
import { Article } from './components/Article/Article'
import { Filter } from './components/Filter/Filter'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { PopularPlaces } from './components/PopularPlaces/PopularPlaces'
import { PopularPlaces2 } from './components/PopularPlaces2/PopularPlaces2'
import { PropertyListingPage } from './components/PropertyListPage/PropertyListingPage'
import { Slider } from './components/Slider/Slider'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <div className='relative bg-gray-50 rounded-t-[100px] mt-[90px] pt-[80px] pb-[40px]'>
        <Filter />
        {/* <PropertyListingPage /> */}
        <PopularPlaces />
        <Article />
        <div className='bg-white pb-[60px] rounded-[40px] mt-[30px] pt-[60px]'>
          <Slider />
        </div>
        <PopularPlaces2 />
        
      </div>
      <Footer />
    </>
  )
}

export default App
