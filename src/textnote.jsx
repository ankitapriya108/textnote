import React, {useState} from 'react'
// import {useState,useEffect} from 'react'
import './textnote.css'

function Textnote() {
    const[inputvalue,setInputvalue]=useState("")
    const[task,setTasks]=useState([])

   

    function handleSubmit(e){
     e.preventDefault();
     setTasks([...task,inputvalue])
     setInputvalue("")
    }


    function closeTask(index){
        const crossTasks=[...task];
        crossTasks.splice(index,1);
        setTasks(crossTasks);
    }
    // setTasks(task.filter((task,ind=>{
    //     return Number(e.taget.id)!==ind;
    // })))
    
  return (
    <>
  <div className='main'>
    <div className='left'>


    
   <form onSubmit={handleSubmit}>
            <textarea
          type="text" 
          placeholder='Write here something...'
          value ={inputvalue}
          onChange={(e)=>setInputvalue(e.target.value)}
          >
          </textarea>
          <button type='submit'>Add</button> 
   </form>
  
   </div>
   <div className='tasks'>
      {task.map((task, index)=>{
        return(
        
       
            <div className='task' key={index}>
            <span onClick={()=>closeTask(index)}>&times;</span>
            {task}
            </div>
        )
    
       
     })}
      </div>
      
</div>
    </>
   
  )
}

export default Textnote