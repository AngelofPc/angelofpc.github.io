import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import TheAngelofPc from './pages/TheAngelofpc';
import { auth } from './config/firebase';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('auth');
      window.location.pathname = '/login';
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TheAngelofPc />} />
        <Route path="/create" element={<CreatePost isAuth={isAuth} />} />
        <Route
          path="/login"
          element={<Login signUserOut={signUserOut} setIsAuth={setIsAuth} />}
        />
      </Routes>
    </Router>
  );
}
