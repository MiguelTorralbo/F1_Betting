import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Textbox from '../textbox/textbox'
import { signin, signup } from '../../actions/auth';

const initialState = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const Auth = () => {
  const [loginData, setLoginData] = useState(initialState)

  const [firstnameError, setNameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirPasswordError, setConfirmPasswordError] = useState(false);

  const [isSignUp, setIsSignUp] = useState(false);


  const changeState = (state) => {
    setIsSignUp(state);
    document.getElementById("login-form").reset();
    setLoginData(initialState);
    setNameError(false);
    setLastnameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);
  }

  const handleChange = (e, setFieldError) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setFieldError(false);
  }

  const validFormSignUp = () => {
    if (!loginData.firstname && isSignUp) {
      setNameError(true);
      return false;
    }
    if (!loginData.lastname && isSignUp) {
      setLastnameError(true);
      return false;
    }
    if (!loginData.username) {
      setUserNameError(true);
      return false;
    }
    if (!loginData.email) {
      setEmailError(true);
      return false;
    }
    if (!loginData.password) {
      setPasswordError(true);
      return false;
    }
    if ((!loginData.confirmPassword || loginData.confirmPassword != loginData.password) && isSignUp ) {
      setConfirmPasswordError(true);
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);

    if (isSignUp) {
      //Registro
      if (validFormSignUp()) {
        signup(loginData);
      }
    } else {
      // Login
      if (validFormSignUp()) {
        signin(loginData);
      }
    }
  }

  return (
    <div className='py-10'>
      <div className='max-w-xs mx-auto p-5 bg-white shadow-lg border-red-500   border-t-4  '>
        <form id="login-form" onSubmit={handleSubmit}>
          <div className='grid gap-4'>
            {
              isSignUp ? (
                <>
                  <Textbox name='firstname' type='text' placeholder='Nombre' error={firstnameError} errorMsg={'Introduzca un nombre'} onChange={ (e) => handleChange(e,setNameError)} />
                  <Textbox name='lastname' type='text' placeholder='Apellido' error={lastnameError} errorMsg={'Introduzca un apellido'} onChange={ (e) => handleChange(e,setLastnameError)} />
                  <Textbox name='username' type='text' placeholder='Nombre de usuario' error={userNameError} errorMsg={'Introduzca un usuario'} onChange={ (e) => handleChange(e,setUserNameError)} />
                </>
              ) : null
            }
            <Textbox name='email' type='email' placeholder='Email' error={emailError} errorMsg={'Introduzca el email'} onChange={ (e) => handleChange(e,setEmailError)} />
            <Textbox name='password' type='password' placeholder='Contraseña' error={passwordError} errorMsg={'Introduzca la contraseña'}  onChange={ (e) => handleChange(e,setPasswordError)} />{
              isSignUp ? (
                  <Textbox name='confirmPassword' type='password' placeholder='Confirmar contraseña' error={confirPasswordError} errorMsg={'Introduzca la contraseña'} onChange={ (e) => handleChange(e,setConfirmPasswordError)} />
              ) : null
            }
            <button type="submit" className="whitespace-nowrap cursor-pointer inline-flex items-center justify-center px-4 py-1 border border-red-600 shadow-sm text-lg font-medium text-red-600 bg-white hover:bg-gray-100">
              {isSignUp ? 'Registrarse' : 'Iniciar sesión'}
            </button>
            {
              isSignUp ? (
                <>
                  <button className='text-red-600 mx-auto hover:border-red-500 hover:border-b flex '
                    onClick={() => changeState(false)}
                  >¿Ya tienes cuenta? <p className='font-semibold'>&nbsp;Inicia sesión</p></button>
                </>
              ) : (
                <button className="whitespace-nowrap cursor-pointer inline-flex items-center justify-center px-4 py-1 border shadow-sm text-lg font-medium text-white bg-red-600 hover:bg-red-700"
                  onClick={() => changeState(true)}>
                  Registrarse
                </button>
              )
            }


          </div>
        </form>
      </div>
    </div>
  )
}

export default Auth