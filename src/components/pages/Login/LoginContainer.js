import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as yup from 'yup';
import './style.css';
import axiosWithAuth from '../../../state/utils/axiosWithAuth';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 5,
    backgroundColor: 'rgba(234, 234, 81, 0.6)',
    padding: '20px',
  },

  inputs: {
    padding: '10px',
  },
}));

const initialValues = {
  primaryEmail: '',
  password: '',
};

const initialFormErrors = {
  primaryEmail: '',
  password: '',
};

const LoginContainer = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState(initialValues);
  const [errors, setFormErrors] = useState(initialFormErrors);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  //validation

  const schema = yup.object().shape({
    primaryEmail: yup
      .string()
      .email()
      .required('Email is required'),
    password: yup
      .string()
      .required('Password if Required')
      .min(6),
  });

  useEffect(() => {
    schema.isValid(formData).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formData]);

  const inputChange = e => {
    yup
      .reach(schema, e.target.name)
      //we can then run validate using the value
      .validate(e.target.value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setFormErrors({
          ...errors,
          [e.target.name]: '',
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });

    // Wether or not our validation was successful, we will still set the state to the new value as the user is typing
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    const primaryEmail = formData.primaryEmail.trim(),
      password = formData.password.trim();
    axiosWithAuth()
      .post(
        '/login',
        `grant_type=password&username=${primaryEmail}&password=${password}`,
        {
          headers: {
            Authorization: `Basic ${btoa('lambda:lambda')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then(res => {
        console.log('onSubmit res:', res);
        window.localStorage.setItem('token', res.data.access_token);
        window.location = '/userpage';
      })
      .catch(err => console.log(err.response))
      .finally(setFormData(initialValues));
  };

  // handleChange function
  const handleChange = e => {
    e.persist();
    inputChange(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="md" className={classes.root} xs={12}>
      <h2 className="center">Log In</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          submit();
        }}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <TextField
            className={classes.inputs}
            id="outlined-basic"
            label="Email"
            type="email"
            variant="filled"
            name="primaryEmail"
            onChange={handleChange}
          />
          <div className="error">{errors.primaryEmail}</div>
          <TextField
            className={classes.inputs}
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            name="password"
            onChange={handleChange}
          />
          <div className="error">{errors.password}</div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={buttonDisabled}
          >
            Log In
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginContainer;
