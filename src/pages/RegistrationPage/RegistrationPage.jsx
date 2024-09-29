import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./RegistrationPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectorLoading } from "../../redux/auth/selectors";
import LoaderProgress from "../../components/Loader/LoaderProgress";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

export default function RegisterPage() {
  const loading = useSelector(selectorLoading);
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={styles.formField}>
            <Field
              type="text"
              name="name"
              placeholder="Username"
              className={styles.input}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>
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
            {!loading ? "Register" : <LoaderProgress />}
          </button>
        </Form>
      </Formik>
    </div>
  );
}