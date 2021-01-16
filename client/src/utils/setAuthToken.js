import axios from 'axios';
const setAuthToken = (token) => {
  // Apply auth token to every request if logged in
  // setting the header on every request
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // if no token then delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};
export default setAuthToken;
