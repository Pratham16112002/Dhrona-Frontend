"use client";
import React from "react";
import { Container, Box, Typography } from "@mui/material";


export default function HomePage() {
    return (
        <Container maxWidth="sm" sx={{ py: 6 }}>
            <Box sx={{ textAlign: "center" }}>
                <Typography
                    component="h1"
                    sx={{ fontSize: "0.95rem", fontWeight: 700, letterSpacing: 0.2, mb: 0.5 }}
                >
                    Small Title
                </Typography>

                <Typography variant="caption" display="block" color="text.secondary" sx={{ mb: 1 }}>
                    A compact subtitle using MUI's caption variant
                </Typography>

                <Typography sx={{ fontSize: "0.85rem", color: "text.primary" }}>
                    This is a basic component demonstrating small typography with Material UI. Adjust variants
                    or the sx prop to tweak sizes and spacing.
                </Typography>
            </Box>
        </Container>
    );
}