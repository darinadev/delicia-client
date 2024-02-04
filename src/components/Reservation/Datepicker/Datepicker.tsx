import React from "react";
import DatePicker from "react-datepicker";
import "../../../../node_modules/react-datepicker/src/stylesheets/datepicker.scss";
import "./datepicker.scss";

type PropsType = {
  date: Date | null;
  setFieldValue: (
    field: string,
    value: Date | null,
    shouldValidate?: boolean | undefined
  ) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
};

export const Datepicker: React.FC<PropsType> = ({
  date,
  setFieldValue,
  handleBlur,
}) => {
  return (
    <DatePicker
      id="date"
      name="date"
      selected={date}
      minDate={new Date()}
      onChange={(date: Date | null) => setFieldValue("date", date)}
      onBlur={handleBlur}
    />
  );
};
