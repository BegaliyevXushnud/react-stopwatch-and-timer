
import { useState } from 'react'
import './App.css'
import Stopwatch from './component/stopwatch'
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './component/Timer';


function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='app'>
<Stopwatch></Stopwatch>
<Timer></Timer>
  </div>
  )
}

export default App
