"use client";

import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  placeholder?: string;
  label?: string;
}

const FormInput = ({
  name,
  type = "text",
  size = "large",
  placeholder,
  label,
}: IInput) => {
  const { control } = useFormContext();

  return (
    <div style={{ marginBottom: 16 }}>
      {label && (
        <label style={{ display: "block", marginBottom: 4 }}>{label}</label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              {...field}
              type={type}
              placeholder={placeholder}
              size={size}
            />
          ) : (
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              size={size}
            />
          )
        }
      />
    </div>
  );
};

export default FormInput;
