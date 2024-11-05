

import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import axios from 'axios'
import { useState,useEffect } from 'react'
export default function Viewtodolist() {
    const [todolist,setTodolist]=useState([])
    useEffect(()=>{
       const api="http://localhost:9000/todolist/gettodolist";
       axios.get(api)
       .then((res)=>{
          setTodolist(res.data)
       })
       .catch(err=>console.log(err))
    })
const deleteList=(idn)=>{
    const ans=window.confirm("do you want to delete")
    const api=`http://localhost:9000/todolist/todolistdelete/${idn}`
    ans?
    axios.delete(api)
    .then((res)=>{
          alert(res.data)
    })
    :
    alert("cancel")
   

}
  return (
     <Container>
        <Row>
            <Col>
            <a href="/add">+</a>
              <Table>
                <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            Desription
                        </th>
                        <th>
                            Task Date
                        </th>
                        <th>
                            Task Time
                        </th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       todolist.length>0?
                       todolist.map((list)=>{
                       return( <tr key={list._id}>
                            <td>
                                {list.title}
                            </td> 
                            <td>
                                {list.description}
                            </td>
                            <td>
                                {list.taskdate}
                            </td>
                            <td>
                                {list.tasktime}
                            </td>
                            <td>
                               <button onClick={
                                ()=>{
                                    deleteList(list._id)
                                }
                               }>
                                delete
                               </button>
                             <a href={`/edit/${list._id}`}>
                             Edit
                             </a>
                            </td>
                          
                        </tr>
                       )
                       })
                       :
                       "No Data Found"
                    }
                </tbody>
              </Table>
            
            </Col>

        </Row>
     </Container>
  )
}
