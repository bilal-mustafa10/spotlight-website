import * as React from 'react';

import '@/styles/global.css';

import { config } from '@/config';
import { applyDefaultSettings } from '@/lib/settings/apply-default-settings';
import { getSettings as getPersistedSettings } from '@/lib/settings/get-settings';
import { UserProvider } from '@/contexts/auth/user-context';
import { SettingsProvider } from '@/contexts/settings';
import { Analytics } from '@/components/core/analytics';
import { LocalizationProvider } from '@/components/core/localization-provider';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';
import { Toaster } from '@/components/core/toaster';

export const metadata = { title: config.site.name };


export default async function Layout({ children }) {
  const settings = applyDefaultSettings(await getPersistedSettings());

  return (
    <html data-joy-color-scheme={settings.colorScheme} lang="en">
      <body>
        <Analytics>
          <LocalizationProvider>
            <UserProvider>
              <SettingsProvider settings={settings}>
                <ThemeProvider>
                  {children}
                  <Toaster position="bottom-right" />
                </ThemeProvider>
              </SettingsProvider>
            </UserProvider>
          </LocalizationProvider>
        </Analytics>
      </body>
    </html>
  );
}
