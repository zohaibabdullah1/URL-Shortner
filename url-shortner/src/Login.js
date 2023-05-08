import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import { Outlet, useNavigate } from 'react-router-dom';

const Login = () => {
    const Navigate=useNavigate();
    const login=()=>{
        localStorage.setItem('login',true)
        Navigate('/')
    }
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if(login){
            Navigate('/')
        }
    })

    return (
    <div className='login'>
        <Form action='post'>
        <h2 className="display-6">Login Page</h2>
        <FormGroup className="position-relative">
          <Label for="email">Email Address</Label>
          <Input type='email' value="talhanonari@gmail.com" required/>
        </FormGroup>
        <FormGroup className="position-relative">
          <Label for="password">Password</Label>
          <Input type='password' value="syco321" required/>
        </FormGroup>
          <div className="d-grid">
      <Button variant='success' size='md' onClick={login}>Login</Button>
          </div>
      </Form>
        <Outlet/>
    </div>
    )
}

export default Login;