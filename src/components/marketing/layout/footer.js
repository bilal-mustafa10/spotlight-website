import * as React from 'react';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

import { DynamicLogo } from '@/components/core/logo';

export function Footer() {
  return (
    <footer>
      <Container>
        <Box sx={{ p: 3 }}>
          <Stack spacing={2} sx={{ maxWidth: 'sm' }}>
            <DynamicLogo colorDark="light" colorLight="dark" height={32} width={90} />
            <Typography level="body-sm">
              Practice public speaking, learning a new language, or just having fun
            </Typography>
          </Stack>
        </Box>
        <Divider />
        <Stack direction="row" spacing={3} sx={{ alignItems: 'center', p: 3 }}>
          <Box sx={{ flex: '1 1 auto' }}>
            <Typography level="body-xs">Copyright ©2024 spotlight</Typography>
          </Box>
        </Stack>
      </Container>
    </footer>
  );
}
