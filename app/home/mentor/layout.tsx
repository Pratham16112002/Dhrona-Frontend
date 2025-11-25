import axiosClient from "@/axios/axiosClient";
import MentorNavBar from "@/components/navbar/mentorNavbar";
import { Box, Container, Typography } from "@mui/material";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function MentorHomeLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies()
    const cookie = cookieStore.get("session");
    if (!cookie) redirect("/account/mentor/login");

    const res = await axiosClient.get("session/details", {
        headers: {
            Cookie: `session=${cookie.value}`
        },
        withCredentials: true
    });
    const accountType = res.data.data.account_type;

    if (accountType !== "mentor") {
        redirect(`/home/${accountType.toLowerCase()}`);
    }
    return (
        <>
            <MentorNavBar/>
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
    )

}