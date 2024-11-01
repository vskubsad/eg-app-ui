import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss'; 

const NotFound = () => (
  <div className='not-found'>
    <h1>404 - Page Not Found!</h1>
    <h3><Link to="/" className='link'>Go to Sign In Page....</Link></h3>
  </div>
);

export default NotFound;
