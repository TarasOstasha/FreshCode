import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./signUpForm.module.scss";

const SIGNUP_FORM_REG_EXP = {
  signUp: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!#%._].*).{8,16}$/,
  passwordConfirm : /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!#%._].*).{8,16}$/
};

function SignUp() {
  const [signUp, setSignUp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreement, setAgreement] = useState(false);

  
    let test = ''

  useEffect(() => {
    if(password === confirmPassword) {
        const add = classNames(styles.formInput, styles.test2)
        
    } else {
   
    }
    
  },[password,confirmPassword])

  function handlesignUpChange({ target: { value } }) {
    setSignUp(value);
  }
  function handlePasswordChange({ target: { value } }) {
    setPassword(value);
  }
  function handleConfirmPasswordChange({ target: { value } }) {
    setConfirmPassword(value);
  }
  function handleAgreement({ target: { checked } }) {
    setAgreement(checked);
    console.log(agreement);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSignUp("");
    setPassword("");
    setAgreement(false);
  }
  

  const signUpClassName = classNames(styles.formInput, {
    [styles.valid]: SIGNUP_FORM_REG_EXP.signUp.test(signUp),
    [styles.invalid]: !SIGNUP_FORM_REG_EXP.signUp.test(signUp),
  });
  const passwordClassName = classNames(styles.formInput, {
    [styles.valid]: SIGNUP_FORM_REG_EXP.signUp.test(password),
    [styles.invalid]: !SIGNUP_FORM_REG_EXP.signUp.test(password),
  });
  //const test = classNames(styles.formInput, styles.test);
  const passwordConfirmClassName = classNames(styles.formInput, {
    [styles.valid]: SIGNUP_FORM_REG_EXP.signUp.test(confirmPassword),
    [styles.invalid]: !SIGNUP_FORM_REG_EXP.signUp.test(confirmPassword),
  });

  return (
    <div className={styles.signUpFormWrapper}>
      <h1 className={styles.formTitle}>SignUp Form</h1>
      <form onSubmit={handleSubmit} className={styles.signUpForm}>
        <label className={styles.formLabel}>
          <span className={styles.labelCaption}>Sign Up:</span>
          <input
            className={signUpClassName}
            type="email"
            value={signUp}
            onChange={handlesignUpChange}
            placeholder="Please Enter Your Email"
            autoFocus
            name="signUp"
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.labelCaption}>Password:</span>
          <input
            className={passwordClassName}
            type="password"
            placeholder="Your Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.labelCaption}>Confirm Password:</span>
          <input
            className={test}
            type="password"
            placeholder="Your Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </label>
        <label className={styles.formLabel}>
            <span className={styles.labelCaption}>*Agree to Terms and Conditions:</span>
            <input onChange={handleAgreement} value={false} name="agreement" type="checkbox" required />
        </label>
        <button className={styles.signUpBtn} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
