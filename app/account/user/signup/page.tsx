"use client";
import React from "react";
import { Box, TextField, Typography, Link, Paper, Stack, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserSignupForm } from "@/forms/account/user";
import { useMutation } from "@tanstack/react-query";
import { UserSignUpMutationOptions } from "@/tanStack/mutations/user/user";
import { useSnackBar } from "@/globalProviders/snackBar";



export default function UserSignupPage() {
  const {showSuccess} = useSnackBar()
  const {mutate} = useMutation(UserSignUpMutationOptions)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignupForm>({
    defaultValues: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const signupHandler: SubmitHandler<UserSignupForm> = (data) => {
    mutate(data,{
      onSuccess: () => {
        showSuccess("We have sen't you a confirmation email. Please check your inbox to verify your account.")
      }
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 4,
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          bgcolor: "white",
        }}
      >
        <Stack spacing={3}>
          <Box component="form" noValidate onSubmit={handleSubmit(signupHandler)}>
            <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
              User Sign Up
            </Typography>

            {/* Username */}
            <TextField
              fullWidth
              label="Username"
              {...register("username", { required: "Username is required" })}
              error={!!errors.username}
              helperText={errors.username?.message}
              sx={{ mb: 2 }}
            />

            {/* First Name */}
            <TextField
              fullWidth
              label="First Name"
              {...register("first_name", { required: "First name is required" })}
              error={!!errors.first_name}
              helperText={errors.first_name?.message}
              sx={{ mb: 2 }}
            />

            {/* Last Name */}
            <TextField
              fullWidth
              label="Last Name"
              {...register("last_name", { required: "Last name is required" })}
              error={!!errors.last_name}
              helperText={errors.last_name?.message}
              sx={{ mb: 2 }}
            />

            {/* Email */}
            <TextField
              fullWidth
              type="email"
              label="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: "Invalid email format",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ mb: 2 }}
            />

            {/* Password */}
            <TextField
              fullWidth
              type="password"
              label="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{ mb: 2 }}
            />

            {/* Submit */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{ py: 1.3, borderRadius: 2, textTransform: "none", fontSize: "1rem" }}
            >
              Create Account
            </Button>

            {/* Navigation */}
            <Stack spacing={1} alignItems="center" sx={{ mt: 2 }}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link href="/account/user/login" underline="none" sx={{ fontWeight: 600, color : 'black' }}>
                  Login
                </Link>
              </Typography>
              <Typography variant="body2">
                Are you a mentor?{" "}
                <Link href="/account/mentor/login" underline="none"  sx={{ fontWeight: 600 , color : 'black',  }}>
                  Click here
                </Link>
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}
