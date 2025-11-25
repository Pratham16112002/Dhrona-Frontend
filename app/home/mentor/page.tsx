"use client";

import React, { useState } from "react";
import { Container, Box, Typography, Button, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";

const sampleBookings = [
  { id: "1", title: "Career Q&A with Alex", date: new Date(Date.now() + 86400000).toISOString(), location: "Zoom" },
  { id: "2", title: "Portfolio Review: Group Session", date: new Date(Date.now() + 3 * 86400000).toISOString(), location: "Google Meet" },
  { id: "3", title: "Resume Clinic", date: new Date(Date.now() + 7 * 86400000).toISOString(), location: "In-person" },
];

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function MentorPage() {
  const [open, setOpen] = useState(false);

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "left", mb: 3 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
          Mentor Dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Manage your mentoring activity, check upcoming sessions and connect with mentees.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <Link href="/mentors/filter" style={{ textDecoration: "none" }}>
          <Button variant="contained">Find Mentees</Button>
        </Link>

        <Button variant="outlined" onClick={() => setOpen(v => !v)}>
          See Booking
        </Button>
      </Box>

      {open && (
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 1 }}>Upcoming Bookings</Typography>
            <List>
              {sampleBookings.map(b => (
                <ListItem key={b.id}>
                  <ListItemText primary={b.title} secondary={`${formatDate(b.date)} • ${b.location}`} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 1 }}>About bookings</Typography>
          <Typography variant="body2" color="text.secondary">
            Bookings list shows upcoming sessions. Keep your availability updated so mentees can book time.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
