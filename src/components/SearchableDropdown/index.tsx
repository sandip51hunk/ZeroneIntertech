import { FieldProps } from "formik";
import React from "react";
import Select from "react-select";
import { OptionsType, ValueType } from "react-select/lib/types";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps extends FieldProps {
  options: OptionsType<Option>;
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
  isDisabled?: boolean;
}

export const SeachableDropDown = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false,
  isDisabled,
}: CustomSelectProps) => {
  const onChange = (option: ValueType<Option | Option[]>) => {
    form.setFieldValue(
      field.name,
      isMulti
        ? (option as Option[]).map((item: Option) => item.value)
        : (option as Option).value
    );
  };
  const getValue = React.useMemo(() => {
    if (options) {
      return isMulti
        ? options.filter(
            (option: any) => field.value.indexOf(option.value) >= 0
          )
        : options.find((option: any) => option.value === field.value);
    } else {
      return isMulti ? [] : ("" as any);
    }
  }, [options]);

  return (
    <Select
      className={className}
      name={field.name}
      value={getValue}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
      classNamePrefix="react-select"
      theme={(theme: any) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "#1aa659",
          primary: "#1aa659",
        },
      })}
      isDisabled={isDisabled}
    />
  );
};

export default React.memo(SeachableDropDown);
