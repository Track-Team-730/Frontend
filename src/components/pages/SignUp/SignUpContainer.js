import React, {useState, useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import RenderSignUp from './RenderSignUp';
import schema from './formSchema';
import axiosWithAuth from '../../../state/utils/axiosWithAuth';
import * as yup from 'yup';
import { useForm } from '../../../hooks/useForm';

const initialValues = {
    //text input
    name: '',
    primaryEmail: '',
    password: ''
};

// const initialFormErrors = {
//   name: '',
//   primaryEmail: '',
//   password: '',
// };

const initialUsers = [];
const initialDisabled = true;

const SignUpContainer = () => {
    //states
    const [users, setUsers] = useState(initialUsers);
    const [formValues, handleChanges, resetForm, setValues, formErrors] = useForm(initialValues);
    const [disabled, setDisabled] = useState(initialDisabled);
    // const [formErrors, setFormErrors] = useState(initialFormErrors)

    //Helpers
    let history = useHistory();

    const postNewUser = newUser => {
      axiosWithAuth()
        .post('/createnewuser', newUser)
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
      schema.isValid(formValues)
        .then(valid => {
          setDisabled(!valid);
        });
    }, [formValues]);

  const submitValues = evt => {
    evt.preventDefault();
    const newUser = {
      name: formValues.name.trim(),
      primaryEmail: formValues.primaryEmail.trim(),
      password: formValues.password.trim()
    };
    postNewUser(newUser);
    resetForm(initialValues);
  };

  console.log(formErrors.name);

  return (
    <Container maxWidth="sm">
        <RenderSignUp 
            values = {formValues}
            change = {handleChanges}
            submit = {submitValues}
            formErrors = {formErrors}
            disabled = {disabled}
        />
    </Container>
  );
};

export default SignUpContainer;
