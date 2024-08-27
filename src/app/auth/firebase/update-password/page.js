import * as React from 'react';
import Alert from '@mui/joy/Alert';
import Box from '@mui/joy/Box';

import { config } from '@/config';
import { UpdatePasswordForm } from '@/components/auth/firebase/update-password-form';
import { GuestGuard } from '@/components/auth/guest-guard';
import { SplitLayout } from '@/components/auth/split-layout';

export const metadata = { title: `Update password | Firebase | Auth | ${config.site.name}` };

export default function Page({ searchParams }) {
  const { oobCode } = searchParams;

  if (!oobCode) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert color="danger">Code is required</Alert>
      </Box>
    );
  }

  return (
    <GuestGuard>
      <SplitLayout>
        <UpdatePasswordForm oobCode={oobCode} />
      </SplitLayout>
    </GuestGuard>
  );
}
