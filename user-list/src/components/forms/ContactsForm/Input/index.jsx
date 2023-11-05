import classNames from "classnames";
import { Field } from "formik";
import React from "react";


function Input({ name, label, classes, ...restProps }) {
  return (
    <Field name={name}>
      {({ field, form: { touched, errors }, meta }) => {
        const userInputClassNames = classNames(classes.input, {
          [classes.valid]: meta.touched && !meta.error,
          [classes.invalid]: meta.touched && meta.error,
        });
        return (
          <label>
            <span>{label} </span>
            <input className={userInputClassNames} {...restProps} {...field} />
            {meta.touched && meta.error && (
              <span className={classes.error}>{meta.error}</span>
            )}
          </label>
        );
      }}
    </Field>
  );
}

export default Input;
