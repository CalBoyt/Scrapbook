import { useNavigate } from "react-router-dom"
import { AddUser } from "../../Managers/UserProfileManager";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import React, { useState } from "react";

export const AddNewUser = () => {
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState( {
        name: "",
        email: "",
        imageLocation: "",
        isAdmin: false,
        familyGUID: 0,
    });

    const clickSaveButton = (e) => {
        e.preventDefault();

        const newUserToSendToAPI = {
            Name: newUser.name,
            Email: newUser.email,
            ImageLocation: newUser.imageLocation,
            IsAdmin: false,
            FamilyGUID: "90f49c08-6001-41dd-9181-8f6d61f56b29",
        };
        AddUser(newUserToSendToAPI)
        .then(navigate("/userProfiles"))
    };

    return (
        <>
        <div className="bg-success bg-opacity-25 pb-5">
            <Container className="p-5">
                <h1 className='pt-5 text-danger'>Add a New User</h1>

                <Form className="p-5 pb-5">
                    <fieldset>
                        <FormGroup className='mb-4'>
                            <Label htmlFor="name">Name of New User:</Label>
                            <Input
                                id="name" 
                                type="text" 
                                value={newUser.name} 
                                onChange={(e) => {
                                const copy = { ...newUser };
                                copy.name = e.target.value;
                                setNewUser(copy);
                                }}
                            />
                        </FormGroup>
                        <FormGroup className='mb-4'>
                            <Label htmlFor="email">Email Address of New User:</Label>
                            <Input
                                id="email" 
                                type="text" 
                                value={newUser.email} 
                                onChange={(e) => {
                                const copy = { ...newUser };
                                copy.email = e.target.value;
                                setNewUser(copy);
                                }}
                            />
                        </FormGroup>
                        <FormGroup className='mb-4'>
                            <Label htmlFor="imageLocation">Image Location of New User:</Label>
                            <Input
                                id="imageLocation" 
                                type="text" 
                                value={newUser.imageLocation} 
                                onChange={(e) => {
                                const copy = { ...newUser };
                                copy.imageLocation = e.target.value;
                                setNewUser(copy);
                                }}
                            />
                        </FormGroup>
                        <Button 
                        onClick={(clickEvent) => clickSaveButton(clickEvent)}>
                        Save New User
                        </Button>


                    </fieldset>
                </Form>
            </Container>
        </div>
        </>
    )


}