"use client";
import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { UserMentorSearchResult } from "@/tanStack/query/user/serach";

const  MentorSearchCard = ({ mentor } : { mentor : UserMentorSearchResult})  => {
  const fullName = `${mentor.first_name} ${mentor.last_name}`;

  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
        transition: "0.2s",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-4px)",
        },
        marginBottom : '3rem'
      }}
    >
      <CardActionArea onClick={() => console.log("Clicked:", mentor.username)}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {/* IMAGE */}
          <CardMedia
            component="img"
            sx={{
              width: 120,
              height: 120,
              objectFit: "cover",
            }}
            image="https://avatar.iran.liara.run/public/boy" // 🔥 Dummy image
            alt={mentor.username}
          />

          {/* TEXT CONTENT */}
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight="bold">
              {mentor.username}
            </Typography>

            <Typography variant="subtitle1" color="text.secondary">
              {fullName}
            </Typography>

            <Typography variant="body2" sx={{ mt: 1 }} color="text.secondary">
              {mentor.bio || "No bio available"}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default MentorSearchCard