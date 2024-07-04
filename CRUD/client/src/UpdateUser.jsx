import React from 'react'
import { useParams } from 'react-router-dom' 
import {useState,useEffect} from 'react' 
import axios from 'axios'   
import { useNavigate } from 'react-router-dom'
const UpdateUser = () => { 
  const {id}=useParams() 

  const [name,setName]=useState() 
  const [age,setAge]=useState() 
  const [email,setEmail]=useState()  
  const navigate=useNavigate() 


  useEffect(()=>{ 
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result=> 
      {
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age) 
      }
    )
    .catch(err => console.log(err))
 },[])  

 const Update =(e)=>{ 
  e.preventDefault();  

  axios.put("http://localhost:3001/updateUser/"+id,{ name,email,age})
  .then(result=>{
    
    console.log(result)  
    navigate('/')
  
  
  }) 
  .catch(err => console.log(err))
 
 }

  return (
    <div className='d-flex vh-100 bg-danger bg-gradient justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'> 
      <form onSubmit={Update}> 
         <h2>Update User</h2>
         <div className='mb-2'> 
           <label htmlFor="">Name</label> 
           <input type="text" placeholder='Enter name' value={name}
            className='form-control'  onChange={(e)=>setName(e.target.value)}/>
         </div> 
         <div className='mb-2'> 
           <label htmlFor="">Email</label> 
           <input type="text" placeholder='Enter Email' value={email} 
           className='form-control'  onChange={(e)=>setEmail(e.target.value)} ></input>
         </div> 
         <div className='mb-2'> 
           <label htmlFor="">Age</label> 
           <input type="number" placeholder='Enter Age' value={age}
              onChange={(e)=>setAge(e.target.value)}
            className='form-control'></input>
         </div> 
         <button className='btn btn-success'>Update</button>
      </form>
    </div>
   </div>
  )
}

export default UpdateUser
