import React from "react";
import styles from "./Home.module.scss";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";

type ValuesType = {
  name: string;
  message: string;
};

const feedbackFormValidate = (values: ValuesType) => {
  type ErrorsType = {
    name?: string;
    message?: string;
  };
  const errors: ErrorsType = {};

  if (!values.name) {
    errors.name = "The name field is required";
  } else if (values.name.length > 30) {
    errors.name = "Max length is 30 symbols";
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

export const Feedback: React.FC = () => {
  return (
    <div className={styles.feedback}>
      <div className={styles.feedbackWrapper}>
        <h3>Text us a feedback</h3>
        <Formik
          initialValues={{ name: "", message: "" }}
          validate={feedbackFormValidate}
          onSubmit={submit}
        >
          {({ isSubmitting }) => (
            <Form>
              <label htmlFor="name">Your name</label>
              <div className={styles.formField}>
                <Field type="text" id="name" name="name" />
                <ErrorMessage
                  className={styles.formValidation}
                  name="name"
                  component="div"
                />
              </div>
              <label htmlFor="message">Your message</label>
              <div className={styles.formField}>
                <Field as="textarea" rows={3} id="message" name="message" />
                <ErrorMessage
                  className={styles.formValidation}
                  name="message"
                  component="div"
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
