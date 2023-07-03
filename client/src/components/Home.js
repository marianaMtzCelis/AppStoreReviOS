// Component for landing page

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 2,
            pr: 2,
            pl: 2,
          }}
        >
        <Toolbar style={{justifyContent: 'space-between'}}>
          <Typography variant="h4" color="primary" noWrap>
            App Store Rev<strong>iOS</strong>
          </Typography>
          <Button variant="contained" component={Link} to="/aboutMe">About Me</Button>
        </Toolbar>
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 15,
            pb: 8,
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="primary"
            >
              <strong>A better way to see reviews of mobile apps</strong>
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" component={Link} justifyContent="center" to="/reviews" >Let's start!</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
        </Container>
    </>
  );
}