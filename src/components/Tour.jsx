import Cards from './Cards'


function Tour({tours,removeTour}){

  return(
   <div>
      <div>
         <h2>Plan with Love</h2>
      </div>

       <div>
        {
            
            tours.map((tour) =>  {
               return <Cards {...tour} removeTour={removeTour}></Cards>
             })

        }
             
       </div>
   </div>


  )
}

export default Tour;