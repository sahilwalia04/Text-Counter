import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import TextUtile from './components/TextUtile'
import About from './components/About'
import { useState } from 'react'
import Alert from './components/Alert'
function App() {
    const [mode , setmode] = useState("light");
    const [alert, setalert] = useState(null)
    
    const togglemode = ()=>{
      if( mode == "light")
      {
        setmode("dark")
        showalert("Enable the Dark mode", "success")
       
      }
      else
      {
        setmode ("light")
        showalert("Enable the Light mode","success")
      }
      setTimeout(()=>{
        setalert(null)
     },3000)
    }
     

   const handleClick = () =>{
    showalert("Capitalize the text " , "success")
    setTimeout(()=>{
      setalert(null)
   },3000)
   }
    
   const handleClicklow = () =>{
    showalert("Lower Capital the text " , "success")
    setTimeout(()=>{
      setalert(null)
   },3000)
   }

   const handleClickClear = () =>{
    showalert("Clear your all text" , "success")
    setTimeout(()=>{
      setalert(null)
   },3000)
   }
   const handleClickCReverse = () =>{
    showalert("Reverse your all text" , "success")
    setTimeout(()=>{
      setalert(null)
   },3000)
   }

   const handleChange = () =>{
    showalert("Reverse your all text" , "success")
    setTimeout(()=>{
      setalert(null)
   },3000)
   }
   
   const handleClickCopy = () =>{
    showalert("Copy your all text" , "success")
    setTimeout(()=>{
      setalert(null)
   },3000)
   }

   const handleClickRemove = () =>{
    showalert("Remove your all text" , "success")
    setTimeout(()=>{
      setalert(null)
   },3000)
   }
   const handleerror = () =>{
    showalert("First fill text" , "danger")
    setTimeout(()=>{
      setalert(null)
   },3000)
   }
    const showalert = (message , type) =>{
      setalert({
         msg : message,
         type: type
    })
    }
  return (
    <>
    <div className={`text-${mode} bg-${mode== "light" ? "black" : "light"}`}>
     <Navbar title ="TextUtiles"  Abouttitle ="About Us" mode = {mode} togglemode ={togglemode} />
     <Alert alert ={alert} />
     <TextUtile Heading ="Enter the text herer" handleClick ={handleClick} handleClicklow= {handleClicklow} handleClickClear={handleClickClear}  handleClickCReverse = {handleClickCReverse} handleChange ={handleChange} handleClickCopy= {handleClickCopy} handleClickRemove={handleClickRemove}  handleerror = {handleerror} />
     <div className='container' > <About  mode = {mode} /></div>
     </div>
    </>
  )
}

export default App
