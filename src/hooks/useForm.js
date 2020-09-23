import React, { useState } from 'react';
import * as yup from 'yup';
import schema from '../../src/components/pages/SignUp/formSchema';

const initialFormErrors = {
  name: '',
  primaryEmail: '',
  password: '',
};

export const useForm = initialValue => {
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors, 
          [name]: ""
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, 
          [name]: err.errors[0]
        });
      });
  };
  const [values, setValues] = useState(initialValue);
  const handleChanges = event => {
    const { name, value } = event.target;
    validate(name, value);
    setValues({
      ...values,
      [name]: value,
    });
  };
  //console.log(formErrors);
  const resetForm = () => {
    setValues(initialValue);
  };
  return [values, handleChanges, resetForm, setValues, formErrors];
};
