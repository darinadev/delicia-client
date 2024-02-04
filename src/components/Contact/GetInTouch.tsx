import React from "react";
import styles from "./Contact.module.scss";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";

type ValuesType = {
  name: string;
  email: string;
  message: string;
};

const getInTouchFormValidate = (values: ValuesType) => {
  type ErrorsType = {
    name?: string;
    email?: string;
    message?: string;
  };
  const errors: ErrorsType = {};

  if (!values.name) {
    errors.name = "The name field is required";
  } else if (values.name.length > 20) {
    errors.name = "Max length is 20 symbols";
  }

  if (!values.email) {
    errors.email = "The email field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "The message field is required";
  } else if (values.message.length > 1500) {
    errors.message = "Max length is 1500 symbols";
  }

  return errors;
};

const submit = (
  values: ValuesType,
  { setSubmitting, resetForm }: FormikHelpers<ValuesType>
) => {
  console.log(values);
  setSubmitting(false);
  resetForm();
};

export const GetInTouch: React.FC = () => {
  return (
    <div className={styles.getInTouch}>
      <h3>Get in touch</h3>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={getInTouchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.formItem}>
              <label htmlFor="name">Your name</label>
              <div className={styles.formField}>
                <Field type="text" id="name" name="name" />
                <ErrorMessage
                  className={styles.formValidation}
                  name="name"
                  component="div"
                />
              </div>
            </div>
            <div className={styles.formItem}>
              <label htmlFor="email">Your email</label>
              <div className={styles.formField}>
                <Field type="email" id="email" name="email" />
                <ErrorMessage
                  className={styles.formValidation}
                  name="email"
                  component="div"
                />
              </div>
            </div>
            <div className={styles.formItem}>
              <label htmlFor="message">Your message</label>
              <div className={styles.formField}>
                <Field as="textarea" rows={3} id="message" name="message" />
                <ErrorMessage
                  className={styles.formValidation}
                  name="message"
                  component="div"
                />
              </div>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
