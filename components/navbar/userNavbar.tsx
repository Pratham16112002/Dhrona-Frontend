'use client'
import { UserLogoutMutationOptions } from "@/tanStack/mutations/user/user"
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import Link from "next/link"

const UserNavBar = () => {
    const {mutate} = useMutation(UserLogoutMutationOptions)
    const logoutHandler = () => {
        mutate()
    }
    return (
        <AppBar position="sticky" elevation={3} color="default">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                        Dhrona
                    </Typography>
                </Link>

                <Box sx={{ display: "flex", gap: 1 }}>
                    <Link href="/account/user/login" style={{ textDecoration: "none" }}>
                        <Button onClick={logoutHandler} variant="contained" size="small">Logout</Button>
                       </Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default UserNavBar