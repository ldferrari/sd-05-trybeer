import React from 'react';
// import { Redirect } from 'react-router-dom';
import {
  InputEmail,
  InputPassword,
  InputName,
  SellerBox,
  Progress,
  BtnSignUp,
} from '../components';

const Register = () => (
  <div>
    <InputName />
    <InputEmail />
    <InputPassword />
    <SellerBox />
    <BtnSignUp />
    <Progress />
  </div>
);

export default Register;
