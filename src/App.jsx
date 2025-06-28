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
        <div className='refresh'>
          
          <h2>No Tours left</h2>
          <button className='ref' onClick={() => setTours(data)}>
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
