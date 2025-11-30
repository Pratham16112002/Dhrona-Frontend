'use client'
import React from "react";
import {  Paper, Typography, Box, Pagination, CircularProgress } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import MentorFilterBar from "@/components/panel/filters/mentorFilter";
import { FormProvider, useForm } from "react-hook-form";
import { MentorFilterForm } from "@/forms/filter/mentorFilter";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GetUserMentorSearchQueryOptions, UserMentorSearchResult } from "@/tanStack/query/user/serach";
import MentorSearchCard from "@/components/user/mentorSearch/MentorSearchCard";


export default function SearchPage() {
    const methods = useForm<MentorFilterForm>({
        defaultValues : {
            Specialization : "",
            ExperienceMin : 20,
            JobTitle : "",
            Course : "",
            College : ""
        }
    })
    
    const [page,setPage] = React.useState(1);
    const queryOptions = React.useMemo(() => GetUserMentorSearchQueryOptions({
        JobTitle : methods.getValues("JobTitle") || "",
        Specialization : methods.getValues("Specialization") ? [methods.getValues("Specialization") as string] : [],
        Field : methods.getValues("Course") || "",
        ExperienceMin : methods.getValues("ExperienceMin") || 0,
        Page : page,
        College : methods.getValues("College") ? [methods.getValues("College") as string] : [],
    }),[
         page,
    methods.watch("JobTitle"),
    methods.watch("Specialization"),
    methods.watch("Course"),
    methods.watch("ExperienceMin"),
    methods.watch("College"),
    ])
    const {data,isPending,isError,refetch} = useQuery({...queryOptions})

    return (
        <Box sx={{  p: 6, borderRadius: 3, }}>
            <Grid container spacing={8}>
                <FormProvider {...methods}>
                    {/* FILTER PANEL */}
                    <Grid item xs={12} md={3} lg={3}>
                        <MentorFilterBar refetch={refetch}/>
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
                            alignItems : 'center',
                            gap: 2,
                        }}
                    >
                        <Paper  sx={{ width : '100%', p: 2, borderRadius: 3, flex : 1, flexDirection : 'column' , gap : '2rem', height: '100%' }} elevation={2}>
                            <Typography variant="h6" gutterBottom>
                                Results
                            </Typography>
                            <Box sx={{ mt: 2, color: "text.secondary" , maxHeight : "70vh" , overflowY : "auto" , px : 2 , marginTop : '1em' }}>
                                <Results isPending={isPending} isError={isError} data={data} />
                            </Box>
                        </Paper>

                        <Pagination shape="rounded" onChange={(_,page) => {
                            setPage(page)
                        }} page={page} count={2} />
                    </Grid>
                </FormProvider>
            </Grid>
        </Box>
    );
}

const Results = ({ isPending, isError, data }: {
  isPending: boolean,
  isError: boolean,
  data: UserMentorSearchResult[] | undefined
}) => {

  if (isPending) return <CircularProgress/>;
  if (isError) return <Typography>Error loading</Typography>;
  if (!data || data.length === 0) return <p>No mentors found.</p>;

  return (
    <>
      {data.map(mentor => (
        <MentorSearchCard mentor={mentor}/>
      ))}
    </>
  );
};