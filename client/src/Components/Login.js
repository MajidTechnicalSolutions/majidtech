import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

function Login(props) {
  // styles
  const Loginwrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    right: 0;
  `;

  const Label = styled.label`
    display: block;
    margin-bottom: 1rem;
  `;
  // declorations
  const [state, setState] = useState('');
  // Functions
  const handleOnChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Fragment>
      <h1>Register</h1>
      <div id='sidewall'>Social logins</div>
      <Loginwrapper>
        {/* Registration form for users */}
        <form onSubmit={handleSubmit}>
          <Label>
            <div>Enter Name:</div>
            <input
              type='text'
              onChange={handleOnChange}
              name='name'
              onChange={handleOnChange}
            />
          </Label>
          <Label>
            <div>Enter Email:</div>
            <input
              type='email'
              name='email'
              value={state.email || ''}
              onChange={handleOnChange}
            />
          </Label>
          <Label>
            <div>Enter Password:</div>
            <input
              type='text'
              name='password'
              value={state.password || ''}
              onChange={handleOnChange}
            />
          </Label>
          <Label>
            <div>Verify Password:</div>
            <input
              type='text'
              name='password2'
              value={state.password2 || ''}
              onChange={handleOnChange}
            />
          </Label>
          <button type='submit'>Register</button>
        </form>
      </Loginwrapper>
    </Fragment>
  );
}

export default Login;
