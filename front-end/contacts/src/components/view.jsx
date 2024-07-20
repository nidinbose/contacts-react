import React,{useEffect,useState} from 'react';
import './view.css'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
const view = (name) => {


  const {id}=useParams();
  const [data,setData]=useState({});
  const [count,setCount]=useState(0)


  const getData=async()=>{
    console.log(id);
    const res=await axios.get(`http://localhost:3003/api/getforedit/${id}`);
    console.log(res.data);

    setData({...res.data})
  }

  useEffect(()=>{
    getData()
  },[count])

  async function handleDelete(){
    

    const res=await axios.delete(`http://localhost:3003/api/delete/${id}`);
    console.log(res);
  }
    return (
        <>
<div className="main12">

   
       
<div className="inn12">

 <div className="bck">
   {/* <a href=""><p>back</p></a> */}
 </div>
<div className="btn">
 {/* <button>Edit</button> */}
</div>

 <div className="b9">
{
  
<img src={data.photo} alt="" />

   
    


}

<h1>{data.Fname} <span>{data.Lname}</span></h1>


 
 </div>

 <div className="call">
   <p></p>
   <p></p>
 </div>

     
<div className="icon10">

<form action="">




<input type="number" name='number' id='number'  placeholder={data.number} disabled/>

<input type="number" name='altnumber' id='altnumber'  placeholder={data.altnumber} disabled/>

<input type="email" name='email' id='email'  placeholder={data.email} disabled/>


<input type="date" name='dob' id='dob'  placeholder={data.dob} disabled/>


</form>

         <div className="delete11">
        <Link to={`/edit/${data._id}`}>edit</Link>
           <button onClick={()=>{handleDelete`${data.id}`}}>Delete</button>
         </div>
   
   </div>


      

           
</div>

  </div>
        </>

    )
}

export default view;