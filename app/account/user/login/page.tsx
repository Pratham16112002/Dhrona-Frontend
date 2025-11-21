'use client';
import React from 'react';
import { Box, TextField, Typography, Link, Paper, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginForm } from '@/forms/account/user';

const UserLoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const loginFormHandler: SubmitHandler<LoginForm> = (data) => {};

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
        bgcolor: '#f5f5f5', // page background
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: '100%',
          maxWidth: 420,
          p: 4,
          borderRadius: 3,
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          bgcolor: 'white', // form container color
        }}
      >
        <Stack spacing={3}>
          <Box component={'form'} noValidate onSubmit={handleSubmit(loginFormHandler)}>
            <Typography variant="h4" fontWeight="bold" textAlign="center" marginBottom={'2rem'}>
              Login
            </Typography>

            {/* Email */}
            <TextField
                type='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: 'Invalid email format',
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
              label="Email"
              sx={{ mb: 2 }}
            />

            {/* Password */}
            <TextField
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
              label="Password"
              sx={{ mb: 2 }}
            />

            {/* Login Button */}
            <Button
              variant="contained"
              type="submit"
              size="large"
              fullWidth
              sx={{
                py: 1.3,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
              }}
            >
              Login
            </Button>

            {/* Navigation Options */}
            <Stack spacing={1} alignItems="center" sx={{ mt: 2 }}>
              <Typography variant="body2">
                Don't have an account?{' '}
                <Link href="/account/user/signup" underline="none" sx={{ fontWeight: 600 , color : 'black'}}>
                  Sign Up
                </Link>
              </Typography>

              <Typography variant="body2">
                Are you a mentor?{' '}
                <Link href="/account/mentor/login" underline="none" sx={{ fontWeight: 600 , color : 'black' }}>
                  Mentor Login
                </Link>
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default UserLoginPage;
