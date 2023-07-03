// Component to display information about myself

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import image from "../media/Mariana.png";

function AboutMeCard() {
    return (
        <Grid item sx={{ display: 'grid', width: '100%'}}>
         <CardActionArea component="a" href="#">
          <Card sx={{ display: 'flex', width: '100%' }} style={{backgroundColor:"#1876d2", color:"#ffffff"}}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                {"Hi RUNWAY!"}
              </Typography>
              <br/>
              <Typography variant="subtitle1" paragraph>
                I'm thrilled to share a bit about myself. I've had the privilege of working on diverse projects in both full-stack
                development and mobile apps, constantly pushing boundaries to deliver exceptional results.
                I thrive in collaborative environments, where I actively contribute ideas and support my teammates to achieve collective 
                success. Being adaptable is second nature to me, as I have seamlessly transitioned between
                different technologies and frameworks throughout my career.
              </Typography>
              <Typography variant="subtitle1" paragraph>
              I'm particularly passionate about mobile app development, as it combines my love for crafting user-friendly experiences
              with the intricate technical challenges that arise in this fast-paced domain. Runway's focus on empowering mobile teams
              resonates deeply with me, and I'm eager to contribute to the continued growth and success of the platform.
              </Typography>
              <Typography variant="subtitle1" paragraph>
              In summary, I bring a strong work ethic, a keen ability to learn new technologies, and a genuine enthusiasm for collaborating
              within a startup environment. I believe that my background aligns well with Runway's values and goals, and I'm excited about
              the prospect of joining your team. Thank you for considering my application. I look forward to the opportunity to discuss further and 
              learn more about how I can contribute to Runway's success.
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 300, display: { xs: 'none', sm: 'block' }, margin: "15px" }}
              src={image}
              alt={"post.imageLabel"}
            />
           </Card>
        </CardActionArea>
        </Grid>
    );
}

export default function AboutMe() {
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
          <Button variant="contained" component={Link} to="/">Home</Button>
        </Toolbar>
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 5,
            pb: 5,
          }}
        >
          <Container maxWidth="lg">
             {AboutMeCard()}
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
        </Container>
    </>
  );
}