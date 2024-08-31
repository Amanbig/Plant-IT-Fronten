import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import SignUp from './pages/auth/SignUp'
import Homepage from './pages/Homepage'
import MyAccount from './pages/Myaccount'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='hidden xl:flex flex-row justify-between p-4 text-white bg-black'>
        <Nav/>
      </div>
      <div className="xl:hidden w-full">
        <MobileNav/>
      </div> */}
      {/* <div className='flex justify-center text-center'>
        <FrontPageSlider/>
      </div> */}
      
        {/* <SignUp/> */}
        {/* <Login/> */}
        {/* <Homepage/> */}
        <MyAccount/>
      
    </>
  )
}

export default App
