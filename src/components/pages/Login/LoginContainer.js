import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 5,
    backgroundColor: 'powderblue',
  },
  inputs: {
    padding: '10px',
  },
}));

const LoginContainer = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <h2>Log In</h2>
      <form>
        <Grid xs={12} spacing={3}>
          <TextField
            className={classes.inputs}
            id="outlined-basic"
            label="Name"
            variant="filled"
          />
        </Grid>
        <Grid xs={12} spacing={3}>
          <TextField
            className={classes.inputs}
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
        </Grid>
      </form>
    </Container>
  );
};

export default LoginContainer;
