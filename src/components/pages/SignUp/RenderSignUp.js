import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

export default function RenderSignUp(props) {

    const { values, change, submit, disabled, formErrors } = props;
    //console.log(formErrors);
  return (
    <div>
        <form onSubmit = {submit}>
            <label>Name:&nbsp;
                <input 
                    value = {values.name}
                    onChange = {change}
                    name = 'name'
                    type = 'text'
                />
            </label>
            <p>{formErrors.name}</p> 
            <label>Email:&nbsp;
                <input 
                    value = {values.primaryEmail}
                    onChange = {change}
                    name = 'primaryEmail'
                    type = 'text'
                />
            </label>
            <p>{formErrors.primaryEmail}</p>
            <label>Password:&nbsp;
                <input 
                    value = {values.password}
                    onChange = {change}
                    name = 'password'
                    type = 'text'
                />
            </label>
            <p>{formErrors.password}</p>
            <button disabled = {disabled} >Register</button>
        </form>
    </div>
  );
}