import React from "react";
import Select, { components } from "react-select";
import { ReactComponent as DownArrow } from "../../assets/svg/down.svg";

const times = [
  { value: "09:00 am", label: "09:00 am" },
  { value: "09:30 am", label: "09:30 am" },
  { value: "10:00 am", label: "10:00 am" },
  { value: "10:30 am", label: "10:30 am" },
  { value: "11:00 am", label: "11:00 am" },
  { value: "11:30 am", label: "11:30 am" },
  { value: "12:00 am", label: "12:00 am" },
  { value: "12:30 am", label: "12:30 am" },
  { value: "01:00 pm", label: "01:00 pm" },
  { value: "01:30 pm", label: "01:30 pm" },
  { value: "02:00 pm", label: "02:00 pm" },
  { value: "02:30 pm", label: "02:30 pm" },
  { value: "03:00 pm", label: "03:00 pm" },
  { value: "03:30 pm", label: "03:30 pm" },
  { value: "04:00 pm", label: "04:00 pm" },
  { value: "04:30 pm", label: "04:30 pm" },
  { value: "05:00 pm", label: "05:00 pm" },
  { value: "05:30 pm", label: "05:30 pm" },
  { value: "06:00 pm", label: "06:00 pm" },
  { value: "06:30 pm", label: "06:30 pm" },
  { value: "07:00 pm", label: "07:00 pm" },
  { value: "07:30 pm", label: "07:30 pm" },
  { value: "08:00 pm", label: "08:00 pm" },
  { value: "08:30 pm", label: "08:30 pm" },
  { value: "09:00 pm", label: "09:00 pm" },
  { value: "09:30 pm", label: "09:30 pm" },
  { value: "10:00 pm", label: "10:00 pm" },
];

type PropsType = {
  setFieldValue: (
    field: string,
    value: string | undefined,
    shouldValidate?: boolean | undefined
  ) => void;
  setFieldTouched: (name: string) => void;
};

const CaretDownIcon = () => {
  return <DownArrow />;
};

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};

export const FormSelect: React.FC<PropsType> = ({
  setFieldValue,
  setFieldTouched,
}) => {
  return (
    <Select
      options={times}
      components={{ DropdownIndicator }}
      styles={{
        singleValue: (base) => ({ ...base, color: "#051622" }),
        option: (base) => ({
          ...base,
          color: "#051622", // option text color
        }),
        control: (base) => ({
          ...base,
          background: "#fdcf71", // select field color
          border: 0,
          borderRadius: 0,
          height: "50px",
          padding: "0 5px",
          cursor: "default",
          "&:hover": { backgroundColor: "#ffffff" },
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: "#051622", // dropdown indicator color
          cursor: "pointer",
        }),
        menu: (base) => ({
          ...base,
          borderRadius: 0,
          zIndex: 199,
        }),
      }}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: "none", // select field in focus and chosen option color
          primary25: "#fdcf71", // option hover color
          primary50: "none", // active option color
          neutral20: "#051622", // line beside dropdown indicator color
          neutral80: "#072236", // dropdown indicator hover in focus and cursor color
          neutral40: "#072236", // dropdown indicator hover color
        },
      })}
      id="time"
      name="time"
      placeholder=""
      isSearchable={false}
      onChange={(selectedOption) =>
        setFieldValue("time", selectedOption?.value)
      }
      onBlur={() => setFieldTouched("time")}
    />
  );
};
