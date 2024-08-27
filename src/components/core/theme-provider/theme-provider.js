'use client';

import * as React from 'react';
import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';

import { useSettings } from '@/hooks/use-settings';
import { createTheme } from '@/styles/theme/create-theme';

import EmotionCache from './emotion-cache';
import { Rtl } from './rtl';

export function ThemeProvider({ children }) {
  const { settings } = useSettings();

  const theme = createTheme({ primaryColor: settings.primaryColor, direction: settings.direction });

  return (
    <EmotionCache options={{ key: 'joy' }}>
      <CssVarsProvider defaultColorScheme={settings.colorScheme} defaultMode={settings.colorScheme} theme={theme}>
        <CssBaseline />
        <Rtl direction={settings.direction}>{children}</Rtl>
      </CssVarsProvider>
    </EmotionCache>
  );
}
