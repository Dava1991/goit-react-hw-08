import { useId } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import style from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .transform((value) => value.replace(/\s+/g, ""))
    .min(3, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),

  number: Yup.string()
    .transform((value) => value.replace(/\s+/g, ""))
    .min(3, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor={nameId} className={styles.formLabel}>
            Name
          </label>
          <Field id={nameId} name="name" className={styles.formControl} />
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={numberId} className={styles.formLabel}>
            Number
          </label>
          <Field id={numberId} name="number" className={styles.formControl} />
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;