'use client';

import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Container from '@mui/joy/Container';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { motion } from 'framer-motion';

import { config } from '@/config';
import Input from "@mui/joy/Input";

export function Hero() {
  const [email, setEmail] = React.useState('');

  const handleJoinWaitlist = () => {
    if (email) {
      console.log(`Email submitted: ${email}`);
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <Box component="section" sx={{ position: 'relative', transformStyle: 'preserve-3d' }}>
      <Box
        sx={{
          bgcolor: 'var(--joy-palette-neutral-950)',
          color: 'var(--joy-palette-common-white)',
          overflow: 'hidden',
          pb: { xs: '100px', sm: '140px', md: '180px' },
          position: 'relative',
          pt: { xs: '40px', md: '120px' },
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            initial={{ opacity: 0, scale: 0.9, y: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={3}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box sx={{ flexBasis: '50%' }}>
                <Typography
                  fontSize={{ xs: '32px', sm: '46px', md: '56px' }}
                  fontWeight="xl"
                  textAlign={{ xs: 'center', md: 'left' }}
                  textColor="inherit"
                >
                  {config.site.name}: Where you shine
                </Typography>
                <Typography
                  fontSize={{ xs: 'md', sm: 'lg', md: 'xl' }}
                  fontWeight="sm"
                  textAlign={{ xs: 'center', md: 'left' }}
                  textColor="neutral.400"
                  sx={{ mt: 2 }}
                >
                  Join the waiting list for Spotlight, the ultimate app experience that lets you feel the thrill of fame by simulating a live AI audience.
                  Whether you're practicing public speaking, learning a new language, or just having fun, Spotlight is your stage to shine.
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ justifyContent: { xs: 'center', md: 'flex-start' }, mt: 4 }}
                >
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    value={email}
                    sx={{ width: { xs: '100%', md: '70%' } }}
                  />

                  <Button onClick={handleJoinWaitlist}>
                    Join the waitlist
                  </Button>
                </Stack>
              </Box>
              <Box sx={{ flexBasis: '50%', display: 'flex', justifyContent: 'flex-end' }}>
                <motion.div
                  initial={{ transformPerspective: '250rem', rotateX: -40, scale: 0.9 }}
                  style={{ maxWidth: '100%', margin: '0 auto' }}
                  transformTemplate={({ transformPerspective, rotateX, scale }) => {
                    return `perspective(${transformPerspective}) rotateX(${rotateX}) scale(${scale})`;
                  }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.8 }}
                  whileInView={{ transformPerspective: '100rem', rotateX: 0, scale: 1 }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '300px',
                      height: '600px',
                    }}
                  >
                    <Image
                      alt="screen"
                      src="/assets/screenshot-1.png"
                      layout="fill"
                      objectFit="contain"
                      style={{
                        position: 'absolute',
                        top: '15%',
                        left: '10%',
                      }}
                    />
                  </Box>
                </motion.div>
              </Box>
            </Stack>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
