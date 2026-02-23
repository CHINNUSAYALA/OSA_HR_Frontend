import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import EnhancedButton from "../components/EnhancedButton";
import { Form } from "./styled.components";


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
