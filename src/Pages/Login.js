import React, { useEffect, useState} from 'react';
import Header from '../Components/subComponents/Header';
import { initializeApp } from 'firebase/app';
import {useNavigate} from 'react-router-dom'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { loginFill } from '../actions/loginAction'
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBzszGEprnyymQpHaFTrPHkMppUfy8B5S4',
  authDomain: 'resume-builder-aacda.firebaseapp.com',
  projectId: 'resume-builder-aacda',
  storageBucket: 'resume-builder-aacda.appspot.com',
  messagingSenderId: '226155711205',
  appId: '1:226155711205:web:98741edb3f25d6ab6ca20c',
  measurementId: 'G-47E5KCPX7Y',
};
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);

function Login() {
  const dispatch = useDispatch();
  const { loginUpdate } = useSelector((state) => state)
  const [log, setLog] = useState({
    uid: loginUpdate.uid,
    email: loginUpdate.email,
    password: loginUpdate.password,
    userName:loginUpdate.userName
  })
  let obj = {}
  function handleLoginCreate(e) {
    let { name, value } = e.target
    setLog({
      ...log,
      [name]: value
    })
  }
  const emailRef = React.createRef(null);
  const passRef = React.createRef(null);
  const email = React.createRef(null);
  const password = React.createRef(null);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  function handleGoogle() {
    console.log('clicked')
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        alert("successfull")
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

      });
  }

  function handleSignUp() {
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        alert('successful create');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Unsuccessful create');
      });
    // obj.userName = log.userName;
    // obj.password = log.password;
    // dispatch(loginFill(obj))
    // console.log(obj)
  }
  const navigate = useNavigate() 
  function handleSignin() {
    const auth = getAuth();
    console.log(email.current.value, password.current.value)
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        console.log('done')
        const user = userCredential.user;
       alert("successful Login")
        const { uid ,email} = user;
        setLog({
          ...log,
          uid: uid
        })
        navigate('/getStarted')

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }
  useEffect(() => {
    dispatch(loginFill(log));
  },[log])
  return (
    <>
      <div>
        <div className='model__container'>
          <div>
            {/* <div className='model__group'>
              <input
                type="text"
                name='username'
                className='model__input'
                placeholder='Username...'
              >
              </input>
            </div> */}
            <div className='model__group'>
              <h2>LOGIN</h2>
            </div>
            <div className='model__group'>
              <input
                type="text"
                name='userName'
                className='model__input'
                placeholder='Username...'
                value={log.userName}
                onChange={handleLoginCreate}
              >
              </input>
            </div>
            <div className='model__group'>
              <input
                type="email"
                name='email' className='model__input'
                placeholder='Email...'
                onChange={handleLoginCreate}
                value={log.email}
                ref={emailRef}
              >
              </input>
            </div>
            <div className='model__group'>
              <input
                type="password"
                name='password'
                className='model__input'
                placeholder='create password...'
                value={log.password}
                onChange={handleLoginCreate}
                ref={passRef}
              >
              </input>
            </div>
            <div className='model__group'>
              <input type="submit" value='REGISTER' className='btn' onClick={handleSignUp}></input>
            </div>
            <div className='or'>or</div>
            <hr className='hr__login' />
            <br />
            {/* ________________________________________________________________________________________________________________ */}
            <div className='model__group'>
              <input
                type="email"
                name='email' className='model__input'
                placeholder='Email...'
                ref={email}
              >
              </input>
            </div>
            <div className='model__group'>
              <input
                type="password"
                name='password'
                className='model__input'
                placeholder='create password...'
                ref={password}
              >
              </input>
            </div>
            <div className='model__group'>
              <input type="submit" value='LOGIN' className='btn__login' onClick={handleSignin} ></input>
            </div>
            <button type='button' onClick={handleGoogle} className='btn__google'> SignIn With Google</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login