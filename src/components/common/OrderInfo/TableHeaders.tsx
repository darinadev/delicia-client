import React from "react";
import styles from "./OrderInfo.module.scss";
import cn from "classnames";

type PropsType = {
  headers: Array<{ id: number; name: string }>;
  isChangable: boolean;
};

export const TableHeaders: React.FC<PropsType> = React.memo(
  ({ headers, isChangable }) => {
    return (
      <div
        className={cn(styles.tableHeader, { [styles.changable]: isChangable })}
      >
        {headers.map((header: { id: number; name: string }) => (
          <h4 key={header.id}>{header.name}</h4>
        ))}
      </div>
    );
  }
);
