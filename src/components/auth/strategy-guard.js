import * as React from 'react';
import Alert from '@mui/joy/Alert';
import Box from '@mui/joy/Box';

import { config } from '@/config';

export function StrategyGuard({ children, expected }) {
  if (config.auth.strategy !== expected) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert color="danger">
          To render this page, you need to configure the auth strategy to &quot;{expected}&quot;
        </Alert>
      </Box>
    );
  }

  return <React.Fragment>{children}</React.Fragment>;
}
