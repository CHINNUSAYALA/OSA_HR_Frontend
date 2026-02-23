import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import EnhancedButton from "../components/EnhancedButton";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 50%;
    margin: auto;
    justify-content:center;
`;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        error={!!errors?.email}
        id="outlined-email"
        label="Email"
        type="email"
        helperText={errors?.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format",
          },
        })}
      />
      <Input
        error={!!errors?.password}
        id="outlined-password"
        label="Password"
        type="password"
        helperText={errors?.password?.message}
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Minimum 8 characters required",
          },
        })}
      />
      <EnhancedButton type="submit" variant="contained" label="Login" />
    </Form>
  );
};

export default Login;
