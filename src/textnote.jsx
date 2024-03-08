import React, {useState} from 'react'
import './textnote.css'

function Textnote() {
    const[inputvalue,setInputvalue]=useState("")
    const[task,setTasks]=useState([])

    function handleSubmit(e){
     e.preventDefault();
     setTasks([...task,inputvalue])
     setInputvalue("")
    }

    function closeTask(index) {
      const updatedTasks = [...task];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    }
 
  return (
    <>
   
  <div className='main'>
    <div className='left-box'>
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
   <div className='tasks-box'>
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