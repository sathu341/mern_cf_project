import React, { useEffect,useState } from 'react'
import Viewtodolist from '../todolist/viewtodolist'
import axios from 'axios'
export default function Userhome() {
    let userid= localStorage.getItem('userid')
    const  [profile,setProfile]=useState([])
    useEffect(()=>{
       axios.get("http://localhost:9000/user/findProfile",{headers:{
        idno:userid
       }})
       .then((res)=>{
         setProfile(res.data)
       })
       .catch(err=>console.log(err))
    },[])
  return (
<>

    <a href="/view">View Task</a>
    <div>
      {
        profile.length>0?
        profile.map((pr)=>{
          return(
            <div>
            <img style={{width:'100px',height:'100px',borderRadius:'50%'}} 
            src={`http://localhost:9000/${pr.images}`}/>
            <h2>{pr.fullname}</h2>
             </div>
          )
        })
        :
        "No Data"
      }
    </div>
    <Viewtodolist/>
</>
  )
}
