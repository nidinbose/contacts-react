import React, { useState } from 'react';
import './add.css'
import { useNavigate } from 'react-router-dom';
import Contacts from './contacts';
import axios from 'axios'




const add = (name) => {
const navigator=useNavigate()
const [photo,setPhoto]=useState("")

const [contact,setContact]=useState({
  Fname:"",
  Lname:"",
 dob:"",
email:"",
number:"",
altnumber:"",
})

const handleChange=(e)=>{
  setContact((pre)=>({...pre,[e.target.name]:e.target.value}))
}
const convert=async(e)=>{
setPhoto(await convertToBase64(e.target.files[0]))

}

function convertToBase64(file) {
console.log("b64",file);
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


const AddContact=async()=>{
console.log(contact);
console.log(`photo is ${photo}`);
const res=await axios.post("http://localhost:3003/api/add",{contact,photo})
console.log(res);
if(res.status==201){
  navigator('/')
 

}

}   


    return(
        <>
             <div className="main1">

   
       
<div className="inn1">

 <div className="bck">
   {/* <a href=""><p>back</p></a> */}
 </div>
<div className="btn">
 {/* <button>Edit</button> */}
</div>

 <div className="b1">
{
  
<img src={photo} alt="" />
   
    


}

 <input type="file" onChange={convert} placeholder='photo' id='photo' name='photo'/>
 
 </div>

 <div className="call">
   <p></p>
   <p></p>
 </div>

     
<div className="icon1">

<form action="">



<input type="text" name='Fname' id='Fname'  placeholder='First Name' onChange={handleChange}/>

<input type="text" name='Lname' id='Lname'  placeholder='Last Name' onChange={handleChange}/>

<input type="number" name='number' id='number'  placeholder='Phone Number' onChange={handleChange}/>

<input type="number" name='altnumber' id='altnumber'  placeholder=' Alternative Phone Number' onChange={handleChange}/>

<input type="email" name='email' id='email'  placeholder='email adress' onChange={handleChange}/>
{/* <br />   */}

<input type="date" name='dob' id='dob'  placeholder='Date of birth' onChange={handleChange}/>


</form>

         <div className="delete1">
         <button onClick={()=>navigator('/')}>contacts</button>
           <button onClick={AddContact}>add</button>
         </div>
   .
   </div>


      

           
</div>

  </div>


        </>
    )
}

export default add;