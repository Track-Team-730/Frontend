import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import RenderSignUp from './RenderSignUp';
import Time from './timeInZone';
import schema from './formSchema';
import axios from 'axios';
import { useForm } from '../../../hooks/useForm';

const initialValues = {
  //text input
  name: '',
  primaryEmail: '',
  password: '',
};

const initialDisabled = true;

const SignUpContainer = () => {
  //states
  const [formValues, handleChanges, resetForm, setValues, formErrors] = useForm(
    initialValues
  );
  const [disabled, setDisabled] = useState(initialDisabled);


  //Helpers
  let history = useHistory();

  const postNewUser = newUser => {
    debugger;
    axios
      .post(
        'https://african-marketplace-730.herokuapp.com/createnewuser',
        newUser
      )
      .then(res => {
        localStorage.setItem('token', res.token);
        history.push('/userpage');
        resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  };

  //side-effects

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const submitValues = evt => {
    evt.preventDefault();
    const newUser = {
      name: formValues.name.trim(),
      primaryEmail: formValues.primaryEmail.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
    resetForm(initialValues);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <RenderSignUp
          values={formValues}
          change={handleChanges}
          submit={submitValues}
          formErrors={formErrors}
          disabled={disabled}
        />
        <Time />
      </Container>
    </div>
  );
};

export default SignUpContainer;
