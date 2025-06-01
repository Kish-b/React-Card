
import { useEffect, useRef } from "react";
import { Data } from "./Data";
// import Scrollbar from "smooth-scrollbar";


function OneCard (props) {

  
    return (




<div className="card-container ">

<h1 className="head">
{props.question}
</h1>


<img src={props.img} alt="" />

<p> {props.des}</p>

</div>



      )

}




export const Cards = () => {

//            USE ONWHEEL METHOD

  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    const onWheel = (e) => {
      container.scrollLeft += e.deltaY;
      
    };

    container.addEventListener("wheel", onWheel);
    return () => container.removeEventListener("wheel", onWheel);
  }, []);
  



  return (

    <>
<div className="back">
<div className="warp" ref={scrollRef}>


{
  Data.map( (item,index) => (<OneCard key={index} question={item.question}  img={item.img} des={item.des}    />)   )
}




</div>

</div>
    </>

  )
}
