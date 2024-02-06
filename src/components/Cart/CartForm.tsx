import React, { useState } from "react";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { OrderingInfoType } from "../../types/types";
import { createOrder } from "../../redux/thunks/cart-thunks";
import { OrderInfo } from "../common/OrderInfo/OrderInfo";
import { getSubtotalPrice } from "../../selectors/selectors";
import { Shipping } from "./Shipping";
import { AppDispatch } from "../../redux/store";

const cartFormValidate = (values: OrderingInfoType) => {
  type ErrorsType = {
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    address?: string;
    message?: string;
    shipping?: string;
  };
  const errors: ErrorsType = {};

  if (!values.firstName) {
    errors.firstName = "The first name field is required";
  } else if (values.firstName.length > 20) {
    errors.firstName = "Max length is 20 symbols";
  }

  if (!values.lastName) {
    errors.lastName = "The last name field is required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Max length is 20 symbols";
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

  if (!values.email) {
    errors.email = "The email field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.address) {
    errors.address = "The address field is required";
  }

  if (!values.shipping) {
    errors.shipping = "Please, choose a shipping type";
  }

  return errors;
};

const CartForm: React.FC = () => {
  const [isShipping, setIsShipping] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const subtotalPrice = useSelector(getSubtotalPrice);

  const submit = (
    values: OrderingInfoType,
    { setSubmitting, resetForm }: FormikHelpers<OrderingInfoType>
  ) => {
    dispatch(createOrder({
      order: values,
      subtotalPrice: subtotalPrice
    }));
    setSubmitting(false);
    resetForm();
    navigate("/ordered");
  };

  const headers = [
    { id: 0, name: "products" },
    { id: 1, name: "quantity" },
    { id: 2, name: "price" },
    { id: 3, name: "subtotal" },
  ];

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
        shipping: "",
      }}
      validate={cartFormValidate}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.formItems}>
            <div className={styles.formItem}>
              <label htmlFor="firstName">First name</label>
              <div className={styles.formField}>
                <Field type="text" id="firstName" name="firstName" />
                <ErrorMessage
                  className={styles.formValidation}
                  name="firstName"
                  component="div"
                />
              </div>
            </div>
            <div className={styles.formItem}>
              <label htmlFor="lastName">Last name</label>
              <div className={styles.formField}>
                <Field type="text" id="lastName" name="lastName" />
                <ErrorMessage
                  className={styles.formValidation}
                  name="lastName"
                  component="div"
                />
              </div>
            </div>
            <div className={styles.formItem}>
              <label htmlFor="phone">Phone number</label>
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
              <label htmlFor="email">Email address</label>
              <div className={styles.formField}>
                <Field type="email" id="email" name="email" />
                <ErrorMessage
                  className={styles.formValidation}
                  name="email"
                  component="div"
                />
              </div>
            </div>
          </div>
          <div className={styles.formItem}>
            <label htmlFor="address">Address</label>
            <div className={styles.formField}>
              <Field type="text" id="address" name="address" />
              <ErrorMessage
                className={styles.formValidation}
                name="address"
                component="div"
              />
            </div>
          </div>
          <div className={styles.formItem}>
            <label htmlFor="message">Order notes (optional)</label>
            <div className={styles.formField}>
              <Field as="textarea" rows={3} id="message" name="message" />
              <ErrorMessage
                className={styles.formValidation}
                name="message"
                component="div"
              />
            </div>
          </div>
          * We will deliver your order as soon as possible. If you have a
          specific date or time when you would like your order to be delivered,
          please indicate this in the order notes field.
          <h3>Shipping</h3>
          <Shipping setIsShipping={setIsShipping} />
          <h3>Your order</h3>
          <OrderInfo
            headers={headers}
            isChangable={false}
            isShipping={isShipping}
          />
          <button
            className={styles.cartButton}
            type="submit"
            disabled={isSubmitting}
          >
            Order
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CartForm;
