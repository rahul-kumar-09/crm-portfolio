import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div>
    <Home />
   </div>
   </>
  )
}

export default App
