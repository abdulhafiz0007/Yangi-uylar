import {Routes, Route} from 'react-router-dom';
import { Admin } from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import { Home } from './pages/Home';

function App() {

  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<AdminLogin />} />
      </Routes>      
    </>
  )
}

export default App
