"use client";

import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  type: string;
  name: string;
  size: "large" | "small";
  id: string;
  value: string;
  placeholder?: string;
  validate?: object;
  label?: string;
}
const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validate,
  label,
}: IInput) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            type={type}
            placeholder={placeholder}
            size={size}
            {...field}
            value={value ? value : field.value}
          />
        )}
      />
    </>
  );
};

export default FormInput;
