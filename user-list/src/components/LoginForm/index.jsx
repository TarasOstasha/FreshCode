import { useState } from "react";
import classNames from "classnames";
import styles from "./LoginForm.module.css";

const LOGIN_FORM_REG_EXP = {
  login: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!#%._].*).{8,16}$/,
};

function LoginForm() {
  //   const [test, setTest] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginChange({ target: { value } }) {
    setLogin(value);
  }
  function handlePasswordChange({ target: { value } }) {
    setPassword(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setLogin("");
    setPassword("");
  }

//   1 methods manually 
  //   const loginClassName = `${styles.formInput} ${
  //     LOGIN_FORM_REG_EXP.login.test(login) ? styles.valid : styles.invalid
  //   }`;
//   const passwordClassName = `${styles.formInput} ${
//     LOGIN_FORM_REG_EXP.password.test(password) ? styles.valid : styles.invalid
//   }`;

// 2 method with NPM classnames package 
  const loginClassName = classNames(styles.formInput, {
    [styles.valid]: LOGIN_FORM_REG_EXP.login.test(login),
    [styles.invalid]: !LOGIN_FORM_REG_EXP.login.test(login),
  });
  const passwordClassName = classNames(styles.formInput, {
    [styles.valid]: LOGIN_FORM_REG_EXP.login.test(password),
    [styles.invalid]: !LOGIN_FORM_REG_EXP.login.test(password),
  });
  return (
    <div className={styles.formContainer}>
      {/* <input
      value={test}
        type="text"
        onChange={(e) => {
          setTest(e.target.value);
        }}
      />
      <button onClick={() => {setTest('')}}>Reset</button> */}
      <h1 className={styles.formTitle}>Login Form</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <label className={styles.formLabel}>
          <span className={styles.labelCaption}>Login:</span>
          <input
            className={loginClassName}
            type="email"
            value={login}
            onChange={handleLoginChange}
            placeholder="your@email"
            autoFocus
            name="login"
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.labelCaption}>Password:</span>
          <input
            className={passwordClassName}
            type="password"
            placeholder="your password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button className={styles.loginBtn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
