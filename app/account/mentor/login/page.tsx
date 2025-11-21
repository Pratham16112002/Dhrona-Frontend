"use client";
import React from "react";
import { Box, TextField, Typography, Link, Paper, Stack, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { MentorLoginForm } from "@/forms/account/mentor";


export default function MentorLoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MentorLoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginHandler: SubmitHandler<MentorLoginForm> = (data) => {
    console.log("MENTOR LOGIN DATA:", data);
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
          <Box component="form" noValidate onSubmit={handleSubmit(loginHandler)}>
            <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
              Mentor Login
            </Typography>

            {/* Email */}
            <TextField
              fullWidth
              label="Email"
              type="email"
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

            {/* Login Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{
                py: 1.3,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Login
            </Button>

            {/* Navigation */}
            <Stack spacing={1} alignItems="center" sx={{ mt: 2 }}>
              <Typography variant="body2">
                Are you a user?{" "}
                <Link href="/account/user/login" underline="none" sx={{ fontWeight: 600 , color : 'black' }}>
                  Login
                </Link>
              </Typography>
              <Typography variant="body2">
                Registor as mentor{" "}
                <Link href="/account/mentor/signup" underline="none" sx={{ fontWeight: 600 , color : 'black' }}>
                  Signup
                </Link>
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}
