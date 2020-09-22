import React, {useState, useEffect} from 'react';
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
// const initialDisabled = true;

const SignUpContainer = () => {
    //states
    const [users, setUsers] = useState(initialUsers);
    const [formValues, handleChanges, resetForm] = useForm(initialValues);
    // const [disabled, setDisabled] = useState(initialDisabled);
    // const [formErrors, setFormErrors] = useState(initialFormErrors);

    //Validation

    // const validate = (name, value) => {
    //   yup
    //     .reach(schema, name)
    //     .validate(value)
    //     .then(valid => {
    //       setFormErrors({
    //         ...formErrors, 
    //         [name]: ""
    //       });
    //     })
    //     .catch(err => {
    //       setFormErrors({
    //         ...formErrors, 
    //         [name]: err.errors[0]
    //       });
    //     });
    // };

    //Helpers

    const postNewUser = newUser => {
      axiosWithAuth()
        .post('/createnewuser', newUser)
        .then(res => {
          setUsers([...users, res.data]);
          
        })
        .catch(err => {
          console.log(err);
        });
    };

    //side-effects

    // useEffect(() => {
    //   schema.isValid(formValues)
    //     .then(valid => {
    //       setDisabled(!valid);
    //     });
    // }, [formValues]);

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

  return (
    <Container maxWidth="sm">
        <RenderSignUp 
            values = {formValues}
            change = {handleChanges}
            submit = {submitValues}
        />
    </Container>
  );
};

export default SignUpContainer;
