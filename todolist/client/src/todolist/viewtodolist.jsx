

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

  return (
     <Container>
        <Row>
            <Col>
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
