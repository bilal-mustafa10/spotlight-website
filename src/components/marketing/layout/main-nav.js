'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';

import { paths } from '@/paths';
import { Logo } from '@/components/core/logo';
import { MobileNav } from './mobile-nav';

export function MainNav() {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <React.Fragment>
      <Box
        component="header"
        sx={{ left: 0, p: '20px', position: 'fixed', top: 0, width: '100%', zIndex: 'var(--MainNav-zIndex)' }}
      >
        <Box
          sx={{
            bgcolor: 'var(--joy-palette-neutral-950)',
            borderRadius: 'var(--joy-radius-xl)',
            boxShadow: 'var(--joy-shadow-sm)',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: '240px 1fr 240px' },
            maxWidth: 'lg',
            minHeight: '56px',
            mx: 'auto',
            outline: '4px solid rgba(255, 255, 255, 0.12)',
            px: '16px',
            py: '8px',
          }}
        >
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <Box component={RouterLink} href={paths.home} sx={{ display: 'inline-block', fontSize: 0 }}>
              <Logo color="light" height={60} width={120} />
            </Box>
          </Stack>
        </Box>
      </Box>
      <MobileNav
        onClose={() => {
          setOpenNav(false);
        }}
        open={openNav}
      />
    </React.Fragment>
  );
}
