// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Login = (props) => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [emailError, setEmailError] = useState('')
//   const [passwordError, setPasswordError] = useState('')

//   const navigate = useNavigate()

//   const onButtonClick = () => {
//     // You'll update this function later...
//     if (email && password) {
//         setLoggedIn(true)
//         setEmail(email)
//         navigate('/')
//       } else {
//         if (!email) setEmailError('Email is required')
//         if (!password) setPasswordError('Password is required')
//       }
//   }

//   return (
//     <div className={'mainContainer'}>
//       <div className={'titleContainer'}>
//         <div>Login</div>
//       </div>
//       <br />
//       <div className={'inputContainer'}>
//         <input
//           value={email}
//           placeholder="Enter your email here"
//           onChange={(ev) => setEmail(ev.target.value)}
//           className={'inputBox'}
//         />
//         <label className="errorLabel">{emailError}</label>
//       </div>
//       <br />
//       <div className={'inputContainer'}>
//         <input
//           value={password}
//           placeholder="Enter your password here"
//           onChange={(ev) => setPassword(ev.target.value)}
//           className={'inputBox'}
//         />
//         <label className="errorLabel">{passwordError}</label>
//       </div>
//       <br />
//       <div className={'inputContainer'}>
//         <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
//       </div>
//     </div>
//   )
// }

// export default Login

import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';


const Login = (props) => {
  const { setLoggedIn, setEmail } = props;
  const [email, setEmailState] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  console.log('in the login page');
    console.log(isAuthenticated);


    // for checking the state after clicking on the login button
  useEffect(() => {
    console.log('in the useEffect');
    console.log(isAuthenticated)
  }, [isAuthenticated, navigate]);

  const onButtonClick = () => {
    // Simple login logic, you might want to add actual authentication here
    if (email && password) {
        dispatch({type:"LOGIN",user:email})
        setLoggedIn(true)
        setEmail(email)
        navigate('/mainpage')
    } else {
        if (!email) setEmailError('Email is required')
        if (!password) setPasswordError('Password is required')
    }
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmailState(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  )
}

export default Login
