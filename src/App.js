import { useState } from 'react';
import drumData from './drumData';
import Drums from './drums';
import './index.css';


function App() {
  
  
  const [power, setPower] = useState(true)
  const styles = {
      transform: power ? 'translateX(100%)' : 'none'
  }
  function handleButton(){
    setPower(!power)
  }

  const Drumz = drumData.map(a => { return(
    <Drums
    {...a}
    on = {power}
    />
  )
  })



  return (
    <div className="App flex justify-center items-center">

      <div id="drum-machine" className='flex '>
    
          <div className='pads grid grid-cols-3 grid-rows-3 gap-2 p-6 '>
            {Drumz}
          </div>


          <div id="display-container" className='flex flex-col items-center justify-center gap-4'>

            <div className='button-area flex gap-3'>
              <p className={!power ? 'text-white' : 'text-gray-600'}>OFF</p>
              <div className='button-container bg-black p-1 pr-1 pl-1 w-14 h-7 flex'>
                <div className='buttonz' style = {styles} onClick={handleButton}></div>
              </div>
              <p className={power ? 'text-white' : 'text-gray-600'}>ON</p>
            </div>
            
            <div id="display" className=' text-white'>
              By 4SRG
            </div>
          </div>


      </div>

    </div>
  )
}

export default App;
