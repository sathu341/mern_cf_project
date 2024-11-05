import { Button, Container, Form,Col,Row } from "react-bootstrap"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Login(){
  const nav=useNavigate()
  const [login,setLogin]=useState({})
   const  changeValue=(e)=>{
     setLogin({...login,[e.target.name]:e.target.value})
   }

   const handleLogin=(e)=>{
    e.preventDefault();
    const api="http://localhost:9000/user/login"
    axios.post(api,login)
    .then((res)=>{
      if(res.data.status==1){
        localStorage.setItem("userid",res.data.userid)
        localStorage.setItem("token",res.data.token)
        alert(res.data.msg)
        nav("/home")
      }
      else{
        alert(res.data.msg)
      }
    })
    .catch(err=>console.log(err))
   }
  return(
    <>
    <Form onSubmit={handleLogin}>

  
     <Container className="justify-content-center">
      <Row lg={4} className="border p-4 shadow rounded">
        <Col lg={12}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" onChange={changeValue} name="email" required/>
        </Col>
        <Col lg={12}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={changeValue} name="password" required/>
        </Col>
        <Col lg={12} align="center" className="mt-3 p-4">
        <Button variant="warning" type="submit">
          Login
        </Button>
        </Col>
      </Row>
     </Container>

     </Form>
    </>
  )
}

export default Login