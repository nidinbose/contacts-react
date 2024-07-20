import React,{useState,useEffect} from 'react';
import './contacts.css'
import { Link } from 'react-router-dom';
import add from './add';
import axios from 'axios';
const contacts = (name) => {

  const [value,setValue]=useState([]);
  const getValue=async ()=>{

    const res=await axios.get("http://localhost:3003/api/get")
    console.log(res.data);
    setValue([...res.data])
  }
  useEffect(()=>{
    getValue()
    
  },[])

    return(
        <>
  
  <div className="main7">

   
       
<div className="inn7">
<Link to={`/add`} className='asd'><div className="f7">
  <b>Contacts</b>
  <button>+</button>
</div>
</Link>

<div className="sch">
  <input type="search" placeholder='Search'/>
</div>


 <div className="b7">

 <img src="data:image/png;base64,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" alt="" />
   <h1>Nidin bose</h1>
 
 </div>


     
<div className="icon7">
<p sty>A</p>

<form action="">

{      value.map((value,index)=>(<div className="cnt7">
<Link to={`/view/${value._id}`} className='asd'><img src={value.photo} alt="" />
<b>{value.Fname + value.Lname}</b></Link>

</div>))  }








</form>





   </div>


      

           
</div>

  </div>
         
        </>
    )
}

export default contacts;