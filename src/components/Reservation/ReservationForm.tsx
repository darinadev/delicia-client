import React from "react";
import styles from "./Reservation.module.scss";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { Datepicker } from "./Datepicker/Datepicker";
import { FormSelect } from "./FormSelect";
import { useNavigate } from "react-router";

type ValuesType = {
  name: string;
  phone: string;
  date: null;
  time: string;
  peopleCount: string;
  message: string;
};

const reservationFormValidate = (values: ValuesType) => {
  type ErrorsType = {
    name?: string;
    phone?: string;
    date?: string;
    time?: string;
    peopleCount?: string;
    message?: string;
  };
  const errors: ErrorsType = {};

  if (!values.name) {
    errors.name = "The name field is required";
  } else if (values.name.length > 20) {
    errors.name = "Max length is 20 symbols";
  }

  if (!values.phone) {
    errors.phone = "The phone field is required";
  } else if (
    !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/.test(
      values.phone
    )
  ) {
    errors.phone = "Invalid phone number";
  }

  if (!values.date) {
    errors.date = "The date field is required";
  }

  if (!values.time) {
    errors.time = "The time field is required";
  }

  if (!values.peopleCount) {
    errors.peopleCount = "The people field is required";
  }

  return errors;
};

export const ReservationForm: React.FC = () => {
  const navigate = useNavigate();

  const submit = (
    values: ValuesType,
    { setSubmitting, resetForm }: FormikHelpers<ValuesType>
  ) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
    navigate("/reserved");
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        date: null,
        time: "",
        peopleCount: "",
        message: "",
      }}
      validate={reservationFormValidate}
      onSubmit={submit}
    >
      {({
        isSubmitting,
        values,
        setFieldValue,
        handleBlur,
        setFieldTouched,
      }) => (
        <Form className={styles.form}>
          <div className={styles.formFields}>
            <div className={styles.formItem}>
              <label htmlFor="name">Name</label>
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
              <label htmlFor="phone">Phone</label>
              <div className={styles.formField}>
                <Field type="phone" id="phone" name="phone" />
                <ErrorMessage
                  className={styles.formValidation}
                  name="phone"
                  component="div"
                />
              </div>
            </div>
            <div className={styles.formItem}>
              <label htmlFor="date">Date</label>
              <div className={styles.formField}>
                <Datepicker
                  date={values.date}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                />
                <ErrorMessage
                  className={styles.formValidation}
                  name="date"
                  component="div"
                />
              </div>
            </div>
            <div className={styles.formItem}>
              <label htmlFor="time">Time</label>
              <div className={styles.formSelect}>
                <FormSelect
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                />
                <ErrorMessage
                  className={styles.formValidation}
                  name="time"
                  component="div"
                />
              </div>
            </div>
          </div>
          <div className={styles.formItem}>
            <label htmlFor="peopleCount">People count</label>
            <div className={styles.formField}>
              <Field type="text" id="peopleCount" name="peopleCount" />
              <ErrorMessage
                className={styles.formValidation}
                name="peopleCount"
                component="div"
              />
            </div>
          </div>
          <div className={styles.formItem}>
            <label htmlFor="message">Message</label>
            <div className={styles.formField}>
              <Field as="textarea" rows={3} id="message" name="message" />
              <ErrorMessage
                className={styles.formValidation}
                name="message"
                component="div"
              />
            </div>
          </div>
          <button
            className={styles.formButton}
            type="submit"
            disabled={isSubmitting}
          >
            Reserve
          </button>
        </Form>
      )}
    </Formik>
  );
};
