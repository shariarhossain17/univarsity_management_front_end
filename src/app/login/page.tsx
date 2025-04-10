// app/login/page.tsx or pages/login.tsx
"use client";

import { Button, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import { SubmitHandler } from "react-hook-form";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import loginImg from "../../assets/Tablet login-rafiki.svg";

type FormValues = {
  id: string;
  password: string;
};

const LogIn: React.FC = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <Row
      style={{
        minHeight: "100vh",
      }}
      align="middle"
      justify="center"
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImg} alt="login image" width={500} priority />
      </Col>
      <Col sm={12} md={8}>
        <h1 className="text-2xl my-10">First, login to your account</h1>
        <div>
          <Form submitHandler={onSubmit}>
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
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LogIn;
