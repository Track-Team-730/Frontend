import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

export default function RenderSignUp(props) {
  const classes = useStyles();

  const { values, change, submit, disabled, formErrors } = props;
  
  return (
    <div>
      <Container maxWidth="md" className={classes.root} xs={12}>
        <h2 className="center">Sign Up!</h2>
        <form onSubmit={submit}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <TextField
              className={classes.inputs}
              id="outlined-basic"
              label="Name"
              type="name"
              variant="filled"
              name="name"
              value={values.name}
              onChange={change}
            />
            <p>{formErrors.name}</p>

            <TextField
              className={classes.inputs}
              id="outlined-basic"
              label="Email"
              type="email"
              variant="filled"
              name="primaryEmail"
              value={values.primaryEmail}
              onChange={change}
            />
            <p>{formErrors.primaryEmail}</p>

            <TextField
              className={classes.inputs}
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
              name="password"
              value={values.password}
              onChange={change}
            />
            <p>{formErrors.password}</p>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={disabled}
            >
              Register
            </Button>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
