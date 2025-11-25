'use client'
import React from "react";
import { TextField, MenuItem, Button, Paper, Typography, Box } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import SearchBar from "@/components/searchBar/searchBar";

export default function SearchPage() {
    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", p: 6, borderRadius: 3 }}>
            <Grid container spacing={3}>
                {/* FILTER PANEL */}
                <Grid item xs={12} md={3}>
                    <Paper sx={{ p: 4, borderRadius: 3 }} elevation={2}>
                        <Typography variant="h6" gutterBottom>
                            Search Mentors
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            {/* Username */}
                            <TextField label="Username" variant="outlined" fullWidth />

                            {/* Specialization */}
                            <TextField label="Specialization" variant="outlined" select fullWidth>
                                <MenuItem value="frontend">Frontend</MenuItem>
                                <MenuItem value="backend">Backend</MenuItem>
                                <MenuItem value="fullstack">Full Stack</MenuItem>
                                <MenuItem value="design">Design</MenuItem>
                            </TextField>

                            {/* Experience */}
                            <TextField label="Experience (Years)" type="number" variant="outlined" fullWidth />

                            {/* College */}
                            <TextField label="College" variant="outlined" fullWidth />

                            {/* Extensible area for future filters */}
                            <Box sx={{ pt: 2, mt: 1, borderTop: "1px solid #e0e0e0" }}>
                                <Typography variant="body2" color="text.secondary">
                                    * More filters coming soon
                                </Typography>
                            </Box>

                            <Button variant="contained" color="primary" fullWidth>
                                Search
                            </Button>
                        </Box>
                    </Paper>
                </Grid>

                {/* RESULTS PANEL */}
                <Grid
                    item
                    xs={12}
                    md={9}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        gap: 2,
                    }}
                >
                    <SearchBar
                        value={""}
                        onChange={() => { }}
                        onSearch={() => { }}
                    />

                    <Paper sx={{ p: 4, borderRadius: 3 }} elevation={2}>
                        <Typography variant="h6" gutterBottom>
                            Results
                        </Typography>

                        <Box sx={{ mt: 2, color: "text.secondary" }}>
                            No results yet...
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}