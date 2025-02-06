import React, { useState } from 'react'

export default function TextUtile(props) {
  const[text , settext] = useState("");

  const  handleClick = ()=>{
    if(text == "")
    {
     props.handleerror()
    }
    else{
      const newtext = text.toUpperCase();
      settext(newtext)
    props.handleClick()

    }
 }
 const  handleClicklow = ()=>{
   if(text == "")
    {
     props.handleerror()
           
    }
    else{   
      console.log(text);
      const newtext = text.toLowerCase();
      settext(newtext)
     props.handleClicklow()
    }
 }
 const  handleClickClear = ()=>{
   if(text == "")
    {
     props.handleerror()
     
    }
    else{     
      console.log(text);
      const newtext = "";
      settext(newtext)
      props.handleClickClear()
    }

 }
 const  handleClickCReverse = ()=>{
   if(text == "")
    {
     props.handleerror()
     
    }
    else{    
      console.log(text);
      const newtext = text.split(" ").reverse().join(" ")
      settext(newtext)
      props.handleClickCReverse()
    }

 }
 const  handleChange = (event)=>{
   
      settext(event.target.value)
    
    
 }
  const handleClickCopy = () => {
     if(text == "")
    {
     props.handleerror()
     
    }
    else{  
      var mytext = document.getElementById("exampleFormControlTextarea1") 
      mytext.select();
      navigator.clipboard.writeText(mytext.value);
      props.handleClickCopy()
    }
 }

 const handleClickRemove = () =>{
   if(text == "")
    {
     props.handleerror()   
    }
    else{     
      let newText = text.split(/[ ]+/);
      settext(newText.join(" "))
      props.handleClickRemove()
    }
 }

 
 document.addEventListener('copy', (event) =>{
      const selectedData = window.getSelection().toString();
      event.clipboardData.setData(
         "text/plain",
         ""
      );
      event.preventDefault();
 });
  

 const handlelenght = () => {
  if(text == "")
  {
   return 0;
  }
  else{
   return text.split(" ").length;
  }
 }
  return ( 
    <div className='container'>
      <div className="mb-4">
        <h2>{props.Heading}</h2>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="8" onChange={handleChange}></textarea>
</div>
<button type="button" className='btn btn-primary ' onClick={handleClick}>Convert Capital</button>
<button type="button" className='btn btn-primary m-3' onClick={handleClicklow}>Convert Lower</button>
<button type="button" className='btn btn-primary me-3' onClick={handleClickClear}>Clear Text</button>
<button type="button" className='btn btn-primary' onClick={handleClickCReverse}>Reverse Text</button>
<button type="button" className='btn btn-primary mx-3' onClick={handleClickCopy}>Copy Text</button>
<button type="button" className='btn btn-primary ' onClick={handleClickRemove}>Remove Space</button>

<p>Number of world :{handlelenght()} and Number Of character {text.length}</p>
<p>Number of world :{handlelenght()} Reading time {text.split(" ").length * 0.008 *1.5} minute</p>
<h2>Preview Text</h2>
<p>{text}</p>
    </div>   
  )
}


TextUtile.defaultProps = { Heading : "Set heading"}