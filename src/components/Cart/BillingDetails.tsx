import React from "react";
import styles from "./Cart.module.scss";
import { useSelector } from "react-redux";
import { getCartProducts } from "../../selectors/selectors";
import { Navigate } from "react-router";
import CartForm from "./CartForm";

const BillingDetails: React.FC = () => {
  const products = useSelector(getCartProducts);

  if (!products.length) {
    return <Navigate to="/cart" />;
  }

  return (
    <div className={styles.billingDetails}>
      <h1>Billing details</h1>
      <CartForm />
    </div>
  );
};

export default BillingDetails;
