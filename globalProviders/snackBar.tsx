'use client';

import { Alert, Snackbar } from "@mui/material";
import React from "react";


type SnackbarContextType = {
    showSuccess: (msg: string) => void;
    showError: (msg: string) => void;
};

const SnackBarContext = React.createContext<SnackbarContextType | undefined>(undefined)

export function useSnackBar() {
    const ctx = React.useContext(SnackBarContext);
    if (!ctx) {
        throw new Error("useSnackBar must be used within a SnackBarProvider")
    }
    return ctx
}

export default function SnackBarProvider({ children }: { children: React.ReactNode }) {
    const [snackbar, setSnackbar] = React.useState<{
        open: Boolean,
        message: string,
        type: "success" | "error"
    }>({
        open: false,
        message: "",
        type: "success"
    })

    const showSuccess = (msg: string) => {
        setSnackbar({
            open: true,
            message: msg,
            type: "success"
        })
    }
    const showError = (msg: string) => {
        setSnackbar({
            open: true,
            message: msg,
            type: "error"
        })
    }
    const handleClose = () => {
        setSnackbar((prev) => ({
            ...prev,
            open: false
        }))
    }
    return <SnackBarContext.Provider value={{ showSuccess, showError }}>
        {children}
        <Snackbar
            open={snackbar.open ? true : false}
            autoHideDuration={4000}
            onClose={handleClose}

        >
            <Alert
                onClose={handleClose}
                severity={snackbar.type}
                variant="filled"
                
            >
                {snackbar.message}
            </Alert>
        </Snackbar>
    </SnackBarContext.Provider>
}