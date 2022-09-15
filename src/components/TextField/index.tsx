import React from "react";
import { ErrorMessage, FieldHookConfig, useField } from "formik";
import { RiErrorWarningFill } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
interface IProps {
  label?: string;
  placeholder: string;
  type?: string;
  defaultValue?: string | number;
  disabled?: boolean;
  readOnly?: boolean;
  value?: any;
  onChange?: any;
  onBlur?: any;
  onKeyDown?: any;
  propsclassName?: string;
  icons?: any;
  max?: any;
}

const TextField = ({
  label,
  placeholder,
  value,
  max,
  onChange,
  onBlur,
  type,
  icons,
  disabled,
  readOnly,
  onKeyDown,
  defaultValue,
  propsclassName,
  ...otherProps
}: IProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(otherProps);

  var curr = new Date();
  curr.setDate(curr.getDate());
  var todayDate = curr.toISOString().substr(0, 10);
  return (
    <div className="relative mb-4">
      <label className="leading-7 text-sm text-gray-600" htmlFor={field.name}>
        {label}{" "}
      </label>
      <div className="input__wrapper">
        <input
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          {...field}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          autoComplete="off"
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          onKeyDown={onKeyDown}
          max={type === "date" ? todayDate : ""}
        />
        {meta.error && (
          <>
            {icons && (
              <button className="icon__button">
                <AiOutlineCalendar color="#28a745" />
              </button>
            )}
          </>
        )}
      </div>
      {meta.touched && meta.error ? (
        <div className="input__error__icon mt-1">
          <RiErrorWarningFill />
        </div>
      ) : (
        ""
      )}
      <ErrorMessage
        component="div"
        name={field.name}
        className="input__error__container mb-3"
      />
    </div>
  );
};

export default React.memo(TextField);
