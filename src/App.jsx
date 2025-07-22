import { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import './App.css'
import { Article } from './components/Article/Article'
import { Filter } from './components/Filter/Filter'
import { Footer } from './components/Footer/Footer'
import { Form } from './components/Form/Form'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { PopularPlaces } from './components/PopularPlaces/PopularPlaces'
import { PopularPlaces2 } from './components/PopularPlaces2/PopularPlaces2'
import { PropertyListingPage } from './components/PropertyListPage/PropertyListingPage'
import { Slider } from './components/Slider/Slider'
import { FormContext } from './context/FormContext'

function App() {

  const { isFormActive } = useContext(FormContext);
   const [shouldShowToast, setShouldShowToast] = useState(false);

   useEffect(() => {
      if (!isFormActive && shouldShowToast) {
        toast.success("Xabar jo'natildi!");
        setShouldShowToast(false);
      }
    }, [isFormActive, shouldShowToast]);

   if (isFormActive === true) {
      document.body.style.overflow = "hidden";
   } else {
      document.body.style.overflow = "auto";
   }

  return (
    <>
      <Header />
      <Hero />
      <Form setShouldShowToast={setShouldShowToast} />
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
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          toastClassName="!w-[80%] sm:!w-[400px] !mx-auto mt-5"
          bodyClassName="text-sm"
        />
    </>
  )
}

export default App
