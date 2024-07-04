import { useState } from 'react'
import './App.css'
// import Sidebar from './Pages/Sidebar';
import Home from './Pages/Home'
import Details from './Pages/Details'
import Router from './Router/Router';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Sidebar/> */}
        {/* <Home/>
         */}
        {/* <Details/> */}
        <Router/>
      </div>
    </>
  )
}

export default App
