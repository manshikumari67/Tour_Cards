import { useState } from "react";


function Cards({id,price,info,name,image,removeTour}){

   const[readmore,setReadmore]=useState(false);
   const description=readmore? info : `${info.substring(0,200)}....`

   function readMoreHandler(){
     setReadmore(!readmore);
   }

   return (

      <div className="Cards">
        <img src={image} alt=""  className="image"/>
        
         <div className="tours-details">
            <h4 className="tour-price">{price}</h4>
            <h4 className="tour-name">{name}</h4>
         </div>
        
         <div className="description"> 
             {description}
             <span onClick={readMoreHandler} className="read-more">
               {readmore ? `show less`:`read more`}
             </span>
         </div>

         <button className="btn" onClick={() => removeTour(id)}>
            Not Interested
         </button>
      </div>

   )

}

export default Cards;