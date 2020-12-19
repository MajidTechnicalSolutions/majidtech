import React, { Fragment } from 'react';

const Login = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Fragment>
      <h1>Register</h1>
      {/* Registration form for users */}
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          Enter Name
          <input type='text' name='name' id='name' />
        </label>
        <label htmlFor='email'>
          Enter Email
          <input type='email' name='email' id='email' />
        </label>
        <label htmlFor='password'>
          Enter Password
          <input type='text' name='password' id='password' />
        </label>
        <label htmlFor='password2'>
          Verify Password
          <input type='text' name='password2' id='password2' />
        </label>
        <button type='submit'>Register</button>
      </form>
    </Fragment>
  );
};

export default Login;
