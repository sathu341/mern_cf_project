
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useState,useEffect,useRef } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function Edittodolist() {
    const params=useParams()
    const [task,setTask]=useState([])
    const refElement=useRef(null)
    //effect data from server 
    useEffect(()=>{
        const api="http://localhost:9000/todolist/findbyid"
         axios.get(api,{headers:{idno:params.id}})
         .then((res)=>{
             let list=res.data[0]
             console.log(res.data)
              refElement.current['title'].value=list.title;
              refElement.current['description'].value=list.description;
              refElement.current['taskdate'].value=list.taskdate
         })
         .catch(err=>console.log(err))
   
        
    },[])



    const [todolist,setTodolist]=useState({});
    const changeValue=(e)=>{
        setTodolist({...todolist,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const api="http://localhost:9000/todolist/updatetodolist"
        axios.post(api,todolist,{headers:{idn:params.id}})
        .then((res)=>{
            res.data.status==1? alert(res.data.msg):alert("error in submission")
            setTodolist(todolist.title='')
        })
        .catch(err=>console.log(err))

    }
  return (
      <>
      <Container>
        <Row className='justify-content-center mt-2'>
            <Col lg={6} className='p-3 border shadow rounded'> 
            <h2> {params.id}</h2>
             <Form onSubmit={handleSubmit} ref={refElement}>
                <Form.Group className='mt-2'>
                    <Form.Label>
                        Task  Title
                    </Form.Label>
                    <Form.Control
                    onChange={changeValue}
                     type="text"
                      name="title" 
                      
                      required/>

                </Form.Group>
                <Form.Group className='mt-2'>
                    <Form.Label>
                        Description
                    </Form.Label>
                    <Form.Control 
                    onChange={changeValue}
                     as="textarea"
                      cols={25} 
                      rows={4} 
                      name="description" 
                      required/>

                </Form.Group>
                <Form.Group className='mt-2'>
                    <Form.Label >
                       Task Date
                    </Form.Label>
                    <Form.Control
                    onChange={changeValue}
                     type="test"
                      name="taskdate" 
                      required/>

                </Form.Group>
                <Form.Group className='mt-2'>
                    <Form.Label>
                        Task Time
                    </Form.Label>
                    <Form.Control type="time"
                    onChange={changeValue}
                     name="tasktime" required/>

                </Form.Group>
                <Form.Group className='mt-2' align="center">
                    
                    <Button type="submit" variant='warning'>
                        Submit
                    </Button>

                </Form.Group>

             </Form>
            </Col>
        </Row>
      </Container>
      
      </>
  )
}
