import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import RenderSignUp from './RenderSignUp';
import Time from './timeInZone';
import schema from './formSchema';
//import axiosWithAuth from '../../../state/utils/axiosWithAuth';
import axios from 'axios';
//import * as yup from 'yup';
import { useForm } from '../../../hooks/useForm';

const initialValues = {
  //text input
  name: '',
  primaryEmail: '',
  password: '',
};

// const initialFormErrors = {
//   name: '',
//   primaryEmail: '',
//   password: '',
// };

const initialUsers = [];
const initialDisabled = true;

//Time
//const API_KEY = 'JZN77L5UEHBN';

const SignUpContainer = () => {
  //states
  const [users, setUsers] = useState(initialUsers);
  const [formValues, handleChanges, resetForm, setValues, formErrors] = useForm(
    initialValues
  );
  const [disabled, setDisabled] = useState(initialDisabled);
  // const [formErrors, setFormErrors] = useState(initialFormErrors)
  //Time states
  //const [unixTimeStamp, setUnixTimeStamp] = useState();


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
        //console.log('Results from axios sign-up: ',res);
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

  //console.log(formErrors.name);

  //Time
  // useEffect(() => {
  //   axios
  //       .get(`http://api.timezonedb.com/v2.1/list-time-zone?key=${API_KEY}&format=json`)
  //       .then(res => {
  //           //console.log(res);
  //           //setTimeData(res.data); 
  //           //console.log(timeData);
  //           // console.log(res.data);
  //           // console.log(res.data.zones);
  //           // console.log(res.data.zones[203]);
  //           // console.log(res.data.zones[203].timestamp);
  //           setUnixTimeStamp(res.data.zones[203].timestamp);
  //           // console.log(unixTimeStamp);
  //       })
  //       .catch(err => {
  //           console.log("ERROR:", err);
  //       });
  // }, [unixTimeStamp]);

//SK 1600931035 [422]
//ZA 1600905835
//KE [203]

  // //unixTime = Math.floor(Date.now() / 1000);
  // const convertTime = unixTimeStamp => {
  //     let milliseconds = (unixTimeStamp * 1000) + (3600000 * 5); //3600000
  //     let dateObject = new Date(milliseconds);
  //     let timeCountry = dateObject.toLocaleString();
  //     return (timeCountry);
  // };

  // let timeCountry = convertTime(unixTimeStamp);

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
      {/* <div>
        <h4>Date and Time in Kenya</h4>
        <p>{timeCountry}</p>
      </div> */}
    </div>
  );
};

export default SignUpContainer;
