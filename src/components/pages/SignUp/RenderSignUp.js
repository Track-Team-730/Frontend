import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

export default function RenderSignUp(props) {

    const { values, change, submit } = props;

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
            <label>Email:&nbsp;
                <input 
                    value = {values.primaryEmail}
                    onChange = {change}
                    name = 'primaryEmail'
                    type = 'text'
                />
            </label>
            <label>Password:&nbsp;
                <input 
                    value = {values.password}
                    onChange = {change}
                    name = 'password'
                    type = 'text'
                />
            </label>
            <button>Register</button>
        </form>
    </div>
  );
}