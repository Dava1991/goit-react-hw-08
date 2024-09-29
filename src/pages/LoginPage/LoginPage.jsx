import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./LoginPage.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={styles.formField}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />
          </div>
          <div className={styles.formField}>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={styles.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}