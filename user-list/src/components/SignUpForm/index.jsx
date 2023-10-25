import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./signUpForm.module.scss";

const SIGNUP_FORM_REG_EXP = {
  signUp: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!#%._].*).{8,16}$/,
  passwordConfirm:
    /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!#%._].*).{8,16}$/,
};

function SignUp() {
  const [signUp, setSignUp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [passwordIdentity, setPasswordIdentity] = useState(null);
  const [viewPasswordStatus, setViewPasswordStatus] = useState(false);

  const defaultInputStyles = classNames(styles.formInput, styles.formInput); // set empty white bg on inputs
  useEffect(() => {
    if (password === confirmPassword) {
      console.log(password === confirmPassword);
      setPasswordIdentity(false);
    } else {
      setPasswordIdentity(true);
    }
  }, [password, confirmPassword, passwordIdentity]);

  function handlesignUpChange({ target: { value } }) {
    setSignUp(value);
  }
  function handlePasswordChange({ target: { value } }) {
    setPassword(value);
  }
  function handlePassword({ target: { checked } }) {
    setViewPasswordStatus(checked);
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

  const passwordConfirmClassName = classNames(styles.formInput, {
    [styles.valid]:
      SIGNUP_FORM_REG_EXP.signUp.test(confirmPassword) &&
      confirmPassword === password,
    [styles.invalid]:
      !SIGNUP_FORM_REG_EXP.signUp.test(confirmPassword) ||
      confirmPassword !== password,
  });

  return (
    <div className={styles.signUpFormWrapper}>
      <h1 className={styles.formTitle}>SignUp Form</h1>
      <form onSubmit={handleSubmit} className={styles.signUpForm}>
        <label className={styles.formLabel}>
          <span className={styles.labelCaption}>Sign Up:</span>
          <input
            className={
              signUp.length === 0 ? defaultInputStyles : signUpClassName
            }
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
            className={
              password.length === 0 ? defaultInputStyles : passwordClassName
            }
            type={viewPasswordStatus ? "text" : "password"}
            placeholder="Your Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.labelCaption}>Confirm Password:</span>
          <input
            className={
              confirmPassword.length === 0
                ? defaultInputStyles
                : passwordConfirmClassName
            }
            type={viewPasswordStatus ? "text" : "password"}
            placeholder="Your Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <div className={styles.passwordView}>
            <span>Show Password</span>
            <input
              onChange={handlePassword}
              name="showPassword"
              type="checkbox"
            />
          </div>
          <span
            style={{ display: passwordIdentity === false ? "none" : "block" }}
            className={styles.comparedPasswords}
          >
            *Password Confirmation Is Not Equal Or Empty
          </span>
        </label>
        <label className={styles.formLabelAgreement}>
          <span className={styles.labelCaption}>
            *Agree to Terms and Conditions:
          </span>
          <input
            onChange={handleAgreement}
            value={false}
            name="agreement"
            type="checkbox"
            required
          />
        </label>
        <button className={styles.signUpBtn} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
