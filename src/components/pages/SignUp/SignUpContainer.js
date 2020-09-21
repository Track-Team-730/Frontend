import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import RenderSignUp from './RenderSignUp';

const initialValues = {
    //text input
    name: '',
    email: '',
    password: ''
};

const initialUsers = [];

const SignUpContainer = () => {
    //states
    const [users, setUsers] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialValues);

    //Helpers
    const submitNewUser = newUser => {
        setUsers([...users, newUser]);
        setFormValues(initialValues);
    };

    //Event handlers
  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const submitValues = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    };
    submitNewUser(newUser);
  };

  return (
    <Container maxWidth="sm">
        <RenderSignUp 
            values = {formValues}
            change = {inputChange}
            submit = {submitValues}
        />
    </Container>
  );
};

export default SignUpContainer;
