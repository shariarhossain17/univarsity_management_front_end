// app/login/page.tsx or pages/login.tsx
"use client";

import { Button, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import FormInput from "@/components/Forms/FormInput";
import loginImg from "../../assets/Tablet login-rafiki.svg";

type FormValues = {
  id: string;
  password: string;
};

const LogIn: React.FC = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Row align="middle" justify="center">
          <Col sm={12} md={16}>
            <Image
              src={loginImg}
              alt="login image"
              width={500}
              height={400}
              priority
            />
          </Col>
          <Col sm={12} md={8}>
            <h1 className="text-2xl">First, login to your account</h1>
            <FormInput
              name="id"
              type="text"
              size="large"
              placeholder="Enter your ID"
              label="User Id"
            />
            <br />
            <FormInput
              name="password"
              type="password"
              size="large"
              placeholder="Enter your password"
              label="User Password:"
            />
            <br />
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Col>
        </Row>
      </form>
    </FormProvider>
  );
};

export default LogIn;
