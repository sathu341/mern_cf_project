
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
export default function Addtodolist() {
    const [todolist,setTodolist]=useState({});
    const changeValue=(e)=>{
        setTodolist({...todolist,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const api="http://localhost:9000/todolist/addtodolist"
        axios.post(api,todolist)
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
             <Form onSubmit={handleSubmit}>
                <Form.Group className='mt-2'>
                    <Form.Label>
                        Task  Title
                    </Form.Label>
                    <Form.Control
                    onChange={changeValue}
                     type="text"
                      name="title" 
                      value={todolist.title}
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
                    <Form.Label>
                       Task Date
                    </Form.Label>
                    <Form.Control
                    onChange={changeValue}
                     type="date"
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
