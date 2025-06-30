import Cards from './Cards'


function Tour({tours,removeTour}){

  return(
   <div className='container flex flex-col items-center justify-center'>
      <div>
         <h2 className='title text-5xl m-[6vh] border-[7px] border-dashed border-[rgb(1,17,160)] rounded-[20px] p-[1vh_5vw]'>Plan with Love</h2>
      </div>

       <div className='cards flex  justify-center flex-wrap max-w-[1300px] mx-auto'>
        {
            
            tours.map((tour) =>  {
               return <Cards key={tour.id} {...tour} removeTour={removeTour}></Cards>
             })

        }
             
       </div>
   </div>


  )
}

export default Tour;