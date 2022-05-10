import React from 'react';
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      localStorage.setItem('isAuth', true);
      navigate('/');
    });
  };

  return (
    <>
      <div>Login</div>
      <button onClick={signInWithGoogle} className="login-with-google-button">
        Google Sign in
      </button>
    </>
  );
}

export default Login;
