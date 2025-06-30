import { useState } from 'react'; // ✅
import './App.css';
import Tour from './components/Tour';
import data from './data';

function App() {

  const[tours,setTours]=useState(data);

    function removeTour(id){
     const newTours=tours.filter(tour => tour.id !=id);
     setTours(newTours);
    }

    if(tours.length ===0){
      return(
        <div className='refresh flex items-center justify-center flex-col mt-64'>
          
          <h2 className='no-tour text-5xl font-bold'>No Tours left</h2>
          <button className='ref mt-[25px] px-[80px] py-[10px] border border-black cursor-pointer hover:bg-fuchsia-300 hover:text-black transition-all duration-200 cursor-pointer rounded-[10px]' onClick={() => setTours(data)}>
            Refresh</button>

        </div>
      )
    };
  
  return (
   <div>

      <Tour tours={tours} removeTour={removeTour}></Tour>

   </div>
  )
}

export default App;
