"use client";
import React from "react";
import { Box, TextField, Typography, Link, Paper, Stack, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { MentorSignupForm } from "@/forms/account/mentor";



export default function MentorSignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MentorSignupForm>({
    defaultValues: {
      username: "",
      first_name: "",
      last_name: "",
      experience_year: 0,
      experience_month: 0,
      bio: "",
      email: "",
      password: "",
    },
  });

  const signupHandler: SubmitHandler<MentorSignupForm> = (data) => {
    console.log("MENTOR SIGNUP:", data);
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
          maxWidth: 480,
          p: 4,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          bgcolor: "white",
        }}
      >
        <Stack spacing={3}>
          <Box component="form" noValidate onSubmit={handleSubmit(signupHandler)}>
            <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
              Mentor Sign Up
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

            {/* Experience Year */}
            <TextField
              fullWidth
              type="number"
              label="Experience (Years)"
              {...register("experience_year", {
                required: "Years of experience is required",
                min: { value: 0, message: "Cannot be negative" },
              })}
              error={!!errors.experience_year}
              helperText={errors.experience_year?.message}
              sx={{ mb: 2 }}
            />

            {/* Experience Month */}
            <TextField
              fullWidth
              type="number"
              label="Experience (Months)"
              {...register("experience_month", {
                required: "Months of experience is required",
                min: { value: 0, message: "Cannot be negative" },
                max: { value: 11, message: "Maximum is 11 months" },
              })}
              error={!!errors.experience_month}
              helperText={errors.experience_month?.message}
              sx={{ mb: 2 }}
            />

            {/* Bio */}
            <TextField
              fullWidth
              multiline
              minRows={3}
              label="Bio"
              {...register("bio", { required: "Bio is required" })}
              error={!!errors.bio}
              helperText={errors.bio?.message}
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
              Create Mentor Account
            </Button>

            {/* Navigation */}
            <Stack spacing={1} alignItems="center" sx={{ mt: 2 }}>
              <Typography variant="body2">
                Already a mentor? {" "}
                <Link href="/account/mentor/login" underline="none" sx={{ fontWeight: 600, color : 'black' }}>
                  Mentor Login
                </Link>
              </Typography>
              <Typography variant="body2">
                Not a mentor? {" "}
                <Link href="/account/user/login" underline="none" sx={{ fontWeight: 600 , color : 'black' }}>
                  Login
                </Link>
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}