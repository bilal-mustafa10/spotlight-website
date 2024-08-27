import * as React from 'react';
import RouterLink from 'next/link';
import Alert from '@mui/joy/Alert';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

import { config } from '@/config';
import { paths } from '@/paths';
import { GuestGuard } from '@/components/auth/guest-guard';
import { SplitLayout } from '@/components/auth/split-layout';
import { ResetPasswordButton } from '@/components/auth/supabase/reset-password-button';
import { DynamicLogo } from '@/components/core/logo';

export const metadata = { title: `Recovery link sent | Supabase | Auth | ${config.site.name}` };

export default function Page({ searchParams }) {
  const { email } = searchParams;

  if (!email) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert color="danger">Email is required</Alert>
      </Box>
    );
  }

  return (
    <GuestGuard>
      <SplitLayout>
        <Stack spacing={5}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box component={RouterLink} href={paths.home} sx={{ display: 'inline-block', fontSize: 0 }}>
              <DynamicLogo colorDark="light" colorLight="dark" height={32} width={154} />
            </Box>
          </Box>
          <Stack spacing={3}>
            <Typography level="h3" textAlign="center">
              Recovery Link Sent
            </Typography>
            <Stack spacing={1} sx={{ alignItems: 'center' }}>
              <Typography textAlign="center">
                If an account exists with email <Typography fontWeight="lg">&quot;{email}&quot;</Typography>, you will
                receive a recovery email.
              </Typography>
              <div>
                <Link component={RouterLink} href={paths.auth.supabase.resetPassword} textAlign="center">
                  Use another email
                </Link>
              </div>
            </Stack>
            <ResetPasswordButton email={email}>Resend</ResetPasswordButton>
          </Stack>
        </Stack>
      </SplitLayout>
    </GuestGuard>
  );
}
