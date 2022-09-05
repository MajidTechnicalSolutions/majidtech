import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { ButtonSecondary } from './Buttons';
// styles
const Wrapper = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 25rem;
  height: 3rem;
  display: block;
  border: none;
  background-color: ${(props) => props.theme.colors.palegrey};
  border-radius: 0.2rem;
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.2);
  outline: none;
  margin: 1rem 0 3rem 0;
  caret-color: orange;
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
  flex-direction: column;
  justify-content: space-between;
`;
function Login(props) {
  // Functions
  const [state, setState] = useState({});
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
              value={state.name || ''}
              name='name'
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
