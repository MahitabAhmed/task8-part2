import './App.css';
import React, { useState } from 'react';
import { Generator } from './useForm';
import{toast} from "react-hot-toast";
import Logo from '../src/img/180daraga.png';

function App() {
  const[values,setvalues]=Generator({
    name: "",
    email: "",
    phone: ""
  });

  const[result,setresult]= useState('');

  const handelOnSubmit = (e)=>{
    e.preventDefault()
    let good = true;
    for(let i = 0 ; i < values.name.length;i++)
      if(!((values.name[i]  >= 'a' && values.name[i] <= 'z') || (values.name[i]  >= 'A' && values.name[i] <= 'Z')))
        good = false;
    
    if(values.email.length <= 4)
      good = false;
   
   console.log(values.email.substring(values.email.length  ,values.email.length-4) ) ;
  
   if(values.email.substring(values.email.length , values.email.length-4) != ".com")
      good = false;
    for(let i = 0; i < values.phone.length; i++){
      if(!(values.phone[i]  >= '0' && values.phone[i] <= '9'))
        good = false;
    }

    if(!good){
      toast.error("Invalid Input");
      // console.log("What are you doing");
    } else
       toast.success("Good Job!!")
      // console.log("Good Job!!");
  };


  return (
    <form class="center" onSubmit = {handelOnSubmit}>
   
    <br/>

      <img src={Logo} alt="please check your internet connection" width="100" height="100" class="center" />

      <br/>

      <h4 >Registeration</h4>
        <div>
        <label>Name</label>
        <br/>
        <input type="text" class="center" name='name' value={values.name} onChange={setvalues}/>
        </div>
        
        <br/>
        
        <div>
        <label >Email</label>
        <br/>
        <input type='email' class="center" name='email' value={values.email} onChange={setvalues}/>
        </div>

        <br/>

        <div>
        <label >phone</label>
        <br/>
        <input type='number' class="center" name='phone' value={values.phone} onChange={setvalues}/>
      <br/>
      <button class="center" type="submit" >submit</button>
        </div>
    </form>
   
  );
}

export default App;
