import { Container, Form, Row,Col, Button } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export default  function Userreg(){
    const nav=useNavigate()
    const [user,setUser]=useState({})
    const changeValue=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
       // formdata.append(`${e.target.name}`,e.target.value)
    }
    const getPic=(e)=>{
        setUser({...user,[e.target.name]:e.target.files[0]})
    }
    const formdata=new FormData()
    const handleSubmit=(e)=>{   
        e.preventDefault()
        formdata.append("fullname",user.fullname)
        formdata.append("images",user.images)
        formdata.append("email",user.email)
        formdata.append("password",user.password)
        const api="http://localhost:9000/user/register"
        axios.post(api,formdata,{headers:{
            'Content-Type':'multipart/form-data',
            
        }})
        .then((res)=>{
            if(res.data.status==1){
                nav("/login")
            }
            else{
                alert(res.data.msg)
            }
        })
        .catch(err=>console.log(err))

    }
    return(
        <>
        <Form onSubmit={handleSubmit}   encType="multipart/form-data">
        <Container>
            <Row className="justify-content-center mt-3 p-2 border shadow rounded">
                
                <Col lg={4}>
                 <Form.Label>FullName</Form.Label>
                 <Form.Control 
                   type="text"
                   name="fullname"
                   onChange={changeValue}
                   required
                   />
                </Col>
                <Col lg={4}>
                 <Form.Label>Upload Photo</Form.Label>
                 <Form.Control 
                   type="file" //e.target.files[0] [image1,image2]
                   name="images"
                   onChange={getPic}
                   required
                   />
                </Col>
                <Col lg={4}>
                 <Form.Label>Email</Form.Label>
                 <Form.Control 
                   type="text"
                   name="email"
                   onChange={changeValue}
                   required
                   />
                </Col>
                <Col lg={4}>
                <Form.Label>Password</Form.Label>
                 <Form.Control 
                   type="password"
                   name="password"
                   onChange={changeValue}
                   required
                   />
                </Col>
                <Col lg={12} align="center" className="mt-2 p-3">
                
                 <Button variant="success" type="submit">
                    Register
                 </Button>
                </Col>
            </Row>
        </Container>
        </Form>
        </>
    )
}
