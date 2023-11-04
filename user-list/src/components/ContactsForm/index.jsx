import { Formik, Form, Field, ErrorMessage } from "formik";
import { USER_CONTACTS_VALIDATION_SCHEMA } from "../../utils/validationSchemas";
import styles from "./ContactsForm.module.scss";
import classNames from "classnames";

function ContactsForm() {
  const initialValues = {
    userName: "",
    phoneNumber: "",
    email: "",
    birthday: "",
  };

  const handleSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_CONTACTS_VALIDATION_SCHEMA}
    >
      {(formikProps) => {
        const userNameClassNames = classNames(styles.input, {
          [styles.valid]: formikProps.touched.userName && !formikProps.errors.userName,
          [styles.invalid]: formikProps.touched.userName && formikProps.errors.userName  
        });
        const userPhoneNumberClassNames = classNames(styles.input, {
            [styles.valid]: formikProps.touched.phoneNumber && !formikProps.errors.phoneNumber,
            [styles.invalid]: formikProps.touched.phoneNumber && formikProps.errors.phoneNumber  
          });
          const userEmailClassNames = classNames(styles.input, {
            [styles.valid]: formikProps.touched.email && !formikProps.errors.email,
            [styles.invalid]: formikProps.touched.email && formikProps.errors.email  
          });
          const userBirthdayClassNames = classNames(styles.input, {
            [styles.valid]: formikProps.touched.birthday && !formikProps.errors.birthday,
            [styles.invalid]: formikProps.touched.birthday && formikProps.errors.birthday  
          });
        return (
          <Form className={styles.form}>
            <label>
              <span>Name: </span>
              <Field
                className={userNameClassNames}
                type="text"
                placeholder="name"
                autoFocus
                name="userName"
              />
              <ErrorMessage
                className={styles.error}
                name="userName"
                component="span"
              />
            </label>
            <label>
              <span>Phone: </span>
              <Field
                className={userPhoneNumberClassNames}
                type="text"
                placeholder="+3802345123"
                name="phoneNumber"
              />
              <ErrorMessage
                className={styles.error}
                name="phoneNumber"
                component="span"
              />
            </label>
            <label>
              <span>Email: </span>
              <Field
                className={userEmailClassNames}
                type="email"
                name="email"
                placeholder="test@gmail.com"
              />
              <ErrorMessage
                className={styles.error}
                name="email"
                component="span"
              />
            </label>
            <label>
              <span>Birthday: </span>
              <Field className={userBirthdayClassNames} type="date" name="birthday" />
              <ErrorMessage
                className={styles.error}
                name="birthday"
                component="span"
              />
            </label>
            <button type="submit">Add</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactsForm;
