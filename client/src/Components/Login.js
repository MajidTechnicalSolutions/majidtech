import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { ButtonSecondary } from './Buttons';

function Login(props) {
  // styles
  const Wrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
  `;

  const Input = styled.input`
    width: 25rem;
    height: 1.5rem;
    display: block;
  `;

  const SocialWrapper = styled(Wrapper)`
    flex-direction: column;
    left: 0;
  `;

  const Loginwrapper = styled(Wrapper)`
    flex-direction: column;
    right: 0;
  `;

  const Label = styled.label`
    display: flex;
    height: 3.5rem;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 4rem;
  `;
  // Functions
  const [state, setState] = useState('');
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
      <SocialWrapper>Social logins</SocialWrapper>
      <Loginwrapper>
        <h1>Register</h1>
        {/* Registration form for users */}
        <form onSubmit={handleSubmit}>
          <Label>
            <div>Enter Name:</div>
            <Input
              type='text'
              onChange={handleOnChange}
              name='name'
              onChange={handleOnChange}
            />
          </Label>
          <Label>
            <div>Enter Email:</div>
            <Input
              type='email'
              name='email'
              value={state.email || ''}
              onChange={handleOnChange}
            />
          </Label>
          <Label>
            <div>Enter Password:</div>
            <Input
              type='text'
              name='password'
              value={state.password || ''}
              onChange={handleOnChange}
            />
          </Label>
          <Label>
            <div>Verify Password:</div>
            <Input
              type='text'
              name='password2'
              value={state.password2 || ''}
              onChange={handleOnChange}
            />
          </Label>
          <ButtonSecondary type='submit' text='Register'>
            Register
          </ButtonSecondary>
        </form>
      </Loginwrapper>
    </Fragment>
  );
}

export default Login;
