import React, { useState, useEffect } from 'react';
import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import RenderSignUp from './RenderSignUp';
import { useForm } from '../../../hooks/useForm';

const initialValues = {

  //text input
  name: '',
  email: '',
  password: '',

    //text input
    name: '',
    email: '',
    password: ''
};

const initialUsers = [];

const SignUpContainer = () => {

  //states
  const [users, setUsers] = useState(initialUsers);
  const [formValues, handleChanges, resetForm] = useForm(initialValues);

  //Helpers
  const submitNewUser = newUser => {
    setUsers([...users, newUser]);
  };

  //Event handlers

    //states
    const [users, setUsers] = useState(initialUsers);
    const [formValues, handleChanges, resetForm] = useForm(initialValues);

    //Helpers
    const submitNewUser = newUser => {
        setUsers([...users, newUser]);
    };

    //Event handlers

  // const inputChange = (name, value) => {
  //   setFormValues({
  //     ...formValues,
  //     [name]: value
  //   });
  // };

  const submitValues = evt => {
    evt.preventDefault();
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      password: formValues.password.trim()
    };
    submitNewUser(newUser);
    resetForm(initialValues);
  };

  return (
    <Container maxWidth="sm">
      <RenderSignUp
        values={formValues}
        change={handleChanges}
        submit={submitValues}
      />
        <RenderSignUp 
            values = {formValues}
            change = {handleChanges}
            submit = {submitValues}
        />
    </Container>
  );
};

export default SignUpContainer;
