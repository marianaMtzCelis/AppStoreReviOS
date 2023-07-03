import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom'

export default function Reviews() {
  const [currentAppId, setCurrentAppId] = useState("981902595")
  const [appReviews, setAppReviews] = useState([])
  const [appData, setAppData] = useState({
      "981902595": {
        "name": "Here Comes the Bus",
        "author": "Synovia Solutions LLC"
    }
  })
  const [errorInFetch, setErrorInFetch] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:3001/api/getAppData`)
    .then((res) => res.json())
    .then((json) => {
        const allAppsData = json.message;
        setAppData(allAppsData.apps);
      })
    }, []);

  useEffect(() => {
      fetch(`http://localhost:3001/api/getAppReviews?appId=${currentAppId}`)
      .then((res) => res.json())
      .then((json) => setAppReviews(json.message))
      .catch((_) => {setErrorInFetch(true)})
    }, [currentAppId]);

  if (errorInFetch) {
    return <> Server unavailable :(</>
  }

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
          <Container maxWidth="md">
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Card
                  sx={{ height: '100%', width: '80%', display: 'flex', flexDirection: 'column' }}
                  style={{borderRadius: 0, border: '4px solid #1876d2'}}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {appData[currentAppId].name}
                    </Typography>
                    <Typography>
                      Author: {appData[currentAppId].author}
                    </Typography>
                    <br/>
                    <FormControl fullWidth>
                      Choose an app
                      <br/><br/>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={appData[currentAppId].name}
                        label="App"
                        onChange={(event) => setCurrentAppId(event.target.value)}
                        displayEmpty
                        renderValue={(value) => value !== '' ? value : 'No app selected'}
                      >
                        {Object.entries(appData).map(([appId, data]) => {
                          return <MenuItem value={appId}>{data.name}</MenuItem>                      
                        })}
                      </Select>
                    </FormControl>
                  </CardContent>
                </Card>
            </Stack>
          </Container>
        <Container sx={{ py: 8 }} maxWidth="false">
          <Grid container spacing={4}>
            {appReviews.map((review, index) => {
                const dateString = new Date(review.date)
                return(
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  style={{borderRadius: 0, border: '2px solid #1876d2'}}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {review.reviewTitle}
                    </Typography>
                    <Typography>
                      {review.reviewContent}
                    </Typography>
                  </CardContent>
                  <CardActions style={{justifyContent: 'space-between'}}>
                  <Typography>
                      By: {review.author}
                    </Typography>
                    <Typography>
                      {dateString.toDateString()}
                    </Typography>
                    <Rating value={Number(review.rating)} sx={{'& .MuiRating-iconFilled': {color: "#72a4e0"}}} readOnly/>
                  </CardActions>
                </Card>
              </Grid>
            )})}
          </Grid>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
        </Container>
    </>
  );
}