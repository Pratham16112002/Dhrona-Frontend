'use client';
import React from "react"
import { Box, TextField, IconButton, Paper } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import { SxProps } from '@mui/system';
import { Theme } from "@emotion/react";

/**
 * Reusable & Extensible Search Bar Component
 * -----------------------------------------
 * Props:
 *  - placeholder: string
 *  - value: string
 *  - onChange: (e) => void
 *  - onSearch: () => void
 *  - sx: MUI sx override
 *
 * Extensible by adding more slots later (filters, chips, buttons...)
 */

export default function SearchBar({ placeholder, value, onChange, onSearch, sx = {} } : {
    placeholder?: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onSearch: () => void,
    sx?: SxProps<Theme>
}) {
  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 3,
        p: 1,
        px: 2,
        ...sx,
      }}
    >
      <TextField
        variant="standard"
        placeholder={placeholder || "Search..."}
        value={value}
        onChange={onChange}
        fullWidth
        InputProps={{ disableUnderline: true }}
        sx={{ fontSize: 16 }}
      />

      <IconButton color="primary" onClick={onSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}