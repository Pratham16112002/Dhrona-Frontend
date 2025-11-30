import axiosClient from '@/axios/axiosClient';
import { Container, Box, Typography } from '@mui/material';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import UserNavBar from './components/UserNavBar';

export default async function UserHomeLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const cookie = cookieStore.get('session');
  if (!cookie) redirect('/account/user/login');

  const res = await axiosClient.get('session/details', {
    headers: {
      Cookie: `session=${cookie.value}`,
    },
    withCredentials: true,
  });
  const accountType = res.data.data.account_type;

  if (accountType !== 'user') {
    redirect(`/home/${accountType.toLowerCase()}`);
  }

  return (
    <>
      <UserNavBar />
      <Box
        component={'main'}
        sx={{
          my: 4,
          minHeight: '60vh',
          width: '100%',
          maxWidth: '100vw',
          mx: 'auto',
        }}
      >
        {children}
      </Box>
      <Box component="footer" sx={{ py: 3, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Dhrona — Built with care.
          </Typography>
      </Box>
    </>
  );
}
