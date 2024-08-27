import * as React from 'react';

import { config } from '@/config';
import { Hero } from '@/components/marketing/home/hero';

export const metadata = {
  title: `Where Fame Meets Innovation | ${config.site.name}`,
  description: config.site.description,
};

export default function Page() {
  return (
    <div>
      <Hero />
    </div>
  );
}
