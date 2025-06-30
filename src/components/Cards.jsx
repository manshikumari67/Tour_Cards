import { useState } from "react";


function Cards({id,Price,info,name,image,removeTour}){

   const[readmore,setReadmore]=useState(false);
   const description=readmore? info : `${info.substring(0,200)}....`

   function readMoreHandler(){
     setReadmore(!readmore);
   }

   return (

      <div className="Card w-[350px] h-max m-4 p-4 flex flex-col items-center rounded-[10px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]">
        <img src={image} alt=""  className="image w-[300px] aspect-[1/1] object-cover"/>
        
         <div className="tours-details my-[20px] mx-[5px]">
            <h4 className="tour-price text-[1.3rem] text-[#1faa59] mr-60 font-bold">{Price}</h4>
            <h4 className="tour-name text-[1.5rem]">{name}</h4>
         </div>
        
         <div className="description"> 
             {description}
             <span onClick={readMoreHandler} className="read-more text-[#12b0e8] cursor-pointer">
               {readmore ? `show less`:`read more`}
             </span>
         </div>

         <button className="btn mt-[18px] px-[80px] py-[10px] border border-[#b4161b] cursor-pointer rounded-[10px] text-[18px] font-bold bg-[#b4161b21] hover:bg-red-600 hover:text-white transition-all duration-200" onClick={() => removeTour(id)}>
            Not Interested
         </button>
      </div>

   )

}

export default Cards;