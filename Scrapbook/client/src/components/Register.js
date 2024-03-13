import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../Managers/UserProfileManager";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function Register({setIsLoggedIn }) {
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [imageLocation, setImageLocation] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [familyGUID, setFamilyGUID] = useState();

    const registerClick = (e) => {
        e.preventDefault();
        if (password && password !== confirmPassword) {
          alert("Passwords don't match. Please try again.");
        } else {
          const userProfile = { name, imageLocation, email, familyGUID };
          register(userProfile, password)
            .then(() => {
              setIsLoggedIn(true)
              navigate('/')
            });
        }
     };
    
      return (
        <Form onSubmit={registerClick}>
          <fieldset>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" onChange={e => setName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="imageLocation">Profile Image URL</Label>
              <Input id="imageLocation" type="text" onChange={e => setImageLocation(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="familyGUID">Family GUID</Label>
              <Input id="familyGUID" type="familyGUID" onChange={e => setConfirmPassword(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
            </FormGroup>

            <FormGroup>
              <Button>Register</Button>
            </FormGroup>
          </fieldset>
        </Form>
      );
    
  
}
