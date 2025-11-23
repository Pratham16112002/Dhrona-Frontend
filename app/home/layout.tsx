"use client";

import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import NavBar from "@/components/navbar/navbar";


export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar/>
            <Container component="main" sx={{ my: 4, minHeight: "60vh" }}>
                {children}
            </Container>

            <Box component="footer" sx={{ py: 3, borderTop: 1, borderColor: "divider" }}>
                <Container maxWidth="lg" sx={{ textAlign: "center" }}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Dhrona — Built with care.
                    </Typography>
                </Container>
            </Box>
        </>
    );
}
