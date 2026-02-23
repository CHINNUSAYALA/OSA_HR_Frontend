import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import EnhancedButton from "../components/EnhancedButton";
import styled from "styled-components";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 50%;
  margin: auto;
`;

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const passwordValue = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* Username */}
      <Input
        error={!!errors?.username}
        label="User Name"
        type="text"
        helperText={errors?.username?.message}
        {...register("username", {
          required: "Name is required",
          minLength: {
            value: 6,
            message: "Minimum 6 characters required",
          },
        })}
      />

      {/* Email */}
      <Input
        error={!!errors?.email}
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

      {/* Phone Number */}
      <Input
        error={!!errors?.phone}
        label="Phone Number"
        type="tel"
        helperText={errors?.phone?.message}
        {...register("phone", {
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Enter valid 10 digit number",
          },
        })}
      />

      {/* Date of Birth */}
      <Input
        error={!!errors?.dob}
        label="Date of Birth"
        type="date"
        helperText={errors?.dob?.message}
        InputLabelProps={{ shrink: true }}
        {...register("dob", {
          required: "Date of birth is required",
          validate: (value) => {
            const today = new Date();
            const selectedDate = new Date(value);
            return selectedDate <= today || "Future dates are not allowed";
          },
        })}
      />

      {/* Password */}
      <Input
        error={!!errors?.password}
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

      {/* Confirm Password */}
      <Input
        error={!!errors?.confirmPassword}
        label="Confirm Password"
        type="password"
        helperText={errors?.confirmPassword?.message}
        {...register("confirmPassword", {
          required: "Please confirm your password",
          validate: (value) =>
            value === passwordValue || "Passwords do not match",
        })}
      />

      {/* Terms & Conditions */}
      <FormControl error={!!errors?.terms}>
        <FormControlLabel
          control={
            <Checkbox
              {...register("terms", {
                required: "You must accept terms & conditions",
              })}
            />
          }
          label="I agree to Terms & Conditions"
        />
        <FormHelperText>{errors?.terms?.message}</FormHelperText>
      </FormControl>

      <EnhancedButton type="submit" variant="contained" label="Sign Up" />
    </Form>
  );
};

export default Signup;
