import React, { useState } from 'react'
import "./About.css"
export default function About( props) {
  const [Mode , setMode] =useState("Enable Dark Mode")
  var tymode = props.mode ; 
 const togglestyle = () =>{
  if( tymode == "light"){
    tymode = "dark"
   setMode("Enable Light Mode")
   
  }
  else{
    tymode = "light"
   setMode("Enable Dark Mode")
  }
 }
 
// console.log(tymode);


   
  return (
    <div>
        <div className={`conatiner text-${ tymode} bg-${ tymode== "light" ? "black" : "light"}`} >
          <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className={`accordion-item text-${ tymode} bg-${ tymode== "light" ? "black" : "light"}`}>
    <h2 className="accordion-header" >
      <button className={`accordion-button text-${ tymode} bg-${ tymode== "light" ? "black" : "light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className={`accordion-body text-${ tymode} bg-${ tymode== "light" ? "black" : "light"}`}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className={`accordion-item text-${ tymode} bg-${ tymode== "light" ? "black" : "light"}`} >
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed text-${ tymode} bg-${ tymode== "light" ? "black" : "light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className={`accordion-item text-${ tymode} bg-${ tymode== "light" ? "black" : "light"}`}>
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed text-${ tymode} bg-${ tymode== "light" ? "black" : "light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>
<button type="button" className="btn btn-primary my-3 "  onClick={togglestyle} >{Mode}</button>   
 </div>
  )
}
