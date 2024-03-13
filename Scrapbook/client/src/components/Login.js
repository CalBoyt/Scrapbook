import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Managers/UserProfileManager";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function Login({setIsLoggedIn}) {
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const loginSubmit = (e) => {
      e.preventDefault();
      login({email, password})
        .then(r =>{
        if(r){
        setIsLoggedIn(true)
        navigate('/')
        }
        else{
          alert("Invalid email or password")
        }
      })
    };
  
    return (
      <div className="bg-success bg-opacity-25 pb-5 p-5">

      <Form onSubmit={loginSubmit}>
        <fieldset>
        <h1 className='pt-5 p-5  text-danger'>Please Log In</h1>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Button>Login</Button>
          </FormGroup>
          <em>
            Not registered? <Link to="/register">Register</Link>
          </em>
        </fieldset>
      </Form>
      </div>
    );
  
}