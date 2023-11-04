import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { USER_VALIDATION_SCHEMA } from '../../utils/validationSchemas';

// const USER_VALIDATION_SCHEMA = yup.object({
//   userName: yup
//     .string()
//     .min(2)
//     .max(64)
//     .matches(/^[A-Z][a-z]*$/)
//     .required(),
// });

function UserForm() {
  const initialValuses = { userName: "" };
  const handleSubmit = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValuses}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      <Form>
        <Field name="userName" type="text" />
        <ErrorMessage name="userName" />
        <button type="submit">Send</button>
        <button type="reset">Reset</button>
      </Form>
    </Formik>
  );
}

export default UserForm;
