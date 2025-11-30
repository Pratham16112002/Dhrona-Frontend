import { MentorFilterForm } from "@/forms/filter/mentorFilter";
import { Paper, Typography, Box, TextField, MenuItem, Button, Slider, Autocomplete } from "@mui/material";
import Grid from '@mui/material/GridLegacy';
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import mentorData from "../../../data/filter/mentorFilter.json"


type Props = {
    refetch : () => void
}

const MentorFilterBar: React.FC<Props> = ({
    refetch
}) => { 
    const methods = useFormContext<MentorFilterForm>()
    return (
        <Grid >
            <Paper sx={{ p: 4, borderRadius: 3 }} elevation={2}>
                <Typography variant="h6" gutterBottom>
                    Search Mentors
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {/* Username */}
                    <TextField label="Job Title" variant="outlined" fullWidth select >
                        {mentorData &&
                            mentorData.mentor_titles.map((title) => (
                                <MenuItem key={title} value={title}>{title}</MenuItem>
                            ))

                        }


                    </TextField>

                    {/* Specialization */}
                    <Controller
                    name="Specialization"
                    control={methods.control}
                    render={({ field }) => (
                        <Autocomplete
                            value={field.value}
                            options={mentorData.mentor_specializations || []}
                            renderInput={(params) => <TextField {...params} label="Specialization" />}
                            onChange={(_, value) => field.onChange(value)}
                        />
                    )}
                    />

                    {/* Experience */}
                    <Controller
                        name={"ExperienceMin"}
                        control={methods.control}
                        render={({ field, fieldState }) => (
                            <>
                                <Typography gutterBottom>
                                    Minium Experience: {field.value}
                                </Typography>
                                <Slider
                                    value={field.value}
                                    onChange={(_, value) => field.onChange(value)}
                                    shiftStep={1}
                                    min={1}
                                    max={20}
                                />
                            </>
                        )}
                    />

                    {/* Courses */}
                    <Controller
                    name="Course"
                    control={methods.control}
                    render={({ field }) => (
                        <Autocomplete
                            value={field.value}
                            options={mentorData.courses || []}
                            renderInput={(params) => <TextField {...params} label="Courses" />}
                            onChange={(_, value) => field.onChange(value)}
                        />
                    )}
                    />


                    {/* Extensible area for future filters */}
                    <Box sx={{ pt: 2, mt: 1, borderTop: "1px solid #e0e0e0" }}>
                        <Typography variant="body2" color="text.secondary">
                            * More filters coming soon
                        </Typography>
                    </Box>

                    <Button variant="contained" color="primary" fullWidth onClick={refetch} >
                        Search
                    </Button>
                </Box>
            </Paper>
        </Grid>
    );
};

export default MentorFilterBar;