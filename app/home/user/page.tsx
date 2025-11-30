"use client";
import React from "react";
import { Container, Box, Typography, Button, Card, CardContent } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <Container   sx={{ py: 8   }}>
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography
                        component="h1"
                        variant="h3"
                        sx={{ fontWeight: 700, mb: 2 }}
                    >
                        Find Your Perfect Mentor
                    </Typography>

                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ mb: 4, fontWeight: 400 }}
                    >
                        Connect with experienced mentors who can guide your growth and help you achieve your goals.
                    </Typography>

                    <Link href="/home/user/search" style={{ textDecoration: "none" }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{ px: 4, py: 1.5 }}
                        >
                            Find Your Mentor
                        </Button>
                    </Link>
                </Box>
            </Container>

            {/* Features Section */}
            <Container  sx={{ py: 6 }}>
                <Typography
                    variant="h5"
                    sx={{ textAlign: "center", fontWeight: 700, mb: 4 }}
                >
                    Why Choose Dhrona?
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                    <Box sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 12px)", md: "1 1 calc(33.333% - 16px)" } }}>
                        <Card sx={{ height: "100%" }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                    Expert Mentors
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Access a curated network of experienced professionals from various industries.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 12px)", md: "1 1 calc(33.333% - 16px)" } }}>
                        <Card sx={{ height: "100%" }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                    Personalized Matching
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Find mentors aligned with your goals, interests, and learning style.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 12px)", md: "1 1 calc(33.333% - 16px)" } }}>
                        <Card sx={{ height: "100%" }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                    Flexible Learning
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Learn at your own pace with structured guidance and real-world insights.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Container>

            {/* Secondary CTA Section */}
            <Container  sx={{ py: 6, textAlign: "center" }}>
                <Box sx={{ py: 4 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        Ready to start your mentoring journey?
                    </Typography>
                    <Link href="/mentors/filter" style={{ textDecoration: "none" }}>
                        <Button variant="outlined" size="large">
                            Browse Mentors
                        </Button>
                    </Link>
                </Box>
            </Container>
        </>
    );
}