import React, { Fragment } from "react";
import { TableHeaders } from "./TableHeaders";
import { Products } from "./Products";
import { TableFooter } from "./TableFooter";

type PropsType = {
  headers: Array<{ id: number; name: string }>;
  isChangable: boolean;
  isShipping?: boolean;
};

export const OrderInfo: React.FC<PropsType> = React.memo(
  ({ headers, isChangable, isShipping }) => {
    return (
      <Fragment>
        <TableHeaders headers={headers} isChangable={isChangable} />
        <Products isChangable={isChangable} />
        <TableFooter isChangable={isChangable} isShipping={isShipping} />
      </Fragment>
    );
  }
);
