import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

export default function RenderSignUp(props) {

    const { values, change, submit } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    };

    const onChange = evt => {
        const { name, value } = evt.target;
        change(name, value);
    };

  return (
    <div>
        <form onSubmit = {onSubmit}>
            <label>Name:&nbsp;
                <input 
                    value = {values.name}
                    onChange = {onChange}
                    name = 'name'
                    type = 'text'
                />
            </label>
            <label>Email:&nbsp;
                <input 
                    value = {values.email}
                    onChange = {onChange}
                    name = 'email'
                    type = 'text'
                />
            </label>
            <label>Password:&nbsp;
                <input 
                    value = {values.password}
                    onChange = {onChange}
                    name = 'password'
                    type = 'text'
                />
            </label>
            <button>Register</button>
            {/* <TextField 
                id="standard-name-input"
                label='Name'
                type='text'
                autoComplete='current=name'
            />
            <TextField 
                id="standard-email-input"
                label='Email'
                type='text'
                autoComplete='current=email'
            />
            <TextField 
                id="standard-password-input"
                label='Password'
                type='password'
                autoComplete='current=password'
            /> */}
        </form>
    </div>
  );
}