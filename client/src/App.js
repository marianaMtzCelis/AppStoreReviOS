import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Reviews from './components/Reviews';
import { createTheme, ThemeProvider } from '@mui/material/styles';

   function App() {
    return (
      <ThemeProvider theme={createTheme()}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </Router>
      </ThemeProvider>
    );
   }

   export default App;