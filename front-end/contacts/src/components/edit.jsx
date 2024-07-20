import React,{useEffect,useState} from 'react';
import './edit.css'
import { useNavigate } from 'react-router-dom'; 
import {useParams} from 'react-router-dom'
import axios from 'axios';


const Edit = () => {
 
  const {id}=useParams()
  const navigator=useNavigate()
  const [data,setData]=useState({})
  const [photo,setPhoto]=useState("")
  
  const handleChange=(e)=>{
          setData((pre)=>({...pre,[e.target.name]:e.target.value}))
       }
  const update=async()=>{
      console.log(data);
      const res=await axios.patch(`http://localhost:3003/api/update/${id}`)
      console.log(res);
      if(res.status==201){
        navigator('/')
       
      
      }
  }
 const getUser=async ()=>{
    const res=await axios.get(`http://localhost:3003/api/getforedit/${id}`)
     setData(res.data)
  }
  const convert=async(e)=>{
        const pic=await convertToBase64(e.target.files[0])
      setData((pre)=>({...pre,[e.target.name]: pic}))
   
   }
   
   function convertToBase64(file) {
           return new Promise((resolve, reject) => {
           const fileReader = new FileReader();
           fileReader.readAsDataURL(file);
   
           fileReader.onload = () => {
               resolve(fileReader.result);
           }
           fileReader.onerror = (error) => {
               reject(error);
           }
       })
   }
   
  useEffect(()=>{
      getUser()
  },[])

    return(
        <>
         <div className="main2">

   
       
<div className="inn2">


 <div className="b2">

 <img src={data.photo} alt="" />
 <input type="file" placeholder='image' id='image'/>
 
 </div>

 <div className="call">
   <p></p>
   <p></p>
 </div>

     
<div className="icon2">






<form action="">



  <input type="text" name='Fname' id='Fname'  placeholder={data.Fname}/>

  <input type="text" name='Lname' id='Lname'  placeholder={data.Lname}/>

  <input type="number" name='number' id='number'  placeholder={data.number}/>
  
  <input type="number" name='altnumber' id='altnumber'  placeholder={data.altnumber}/>

  <input type="email" name='email' id='email'  placeholder={data.email}/>


  <input type="date" name='dob' id='dob'  placeholder={data.email}/>


</form>




         <div className="delete2">
         <button >home</button>
           <button onClick={update}>Save</button>
         </div>
   .


   </div>


      

           
</div>

  </div>
        </>

    )
}

export default Edit;