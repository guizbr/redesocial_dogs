import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import styles from './Login.module.css';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';

export const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm></LoginForm>}></Route>
          <Route path="criar" element={<LoginCreate></LoginCreate>}></Route>
          <Route
            path="perdeu"
            element={<LoginPasswordLost></LoginPasswordLost>}
          ></Route>
          <Route
            path="resetar"
            element={<LoginPasswordReset></LoginPasswordReset>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </section>
  );
};

export default Login;
