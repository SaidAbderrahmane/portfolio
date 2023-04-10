import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Import your background image from the net using a URL
const backgroundImageUrl = 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80';

function About(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Add a dark overlay to improve text legibility */}
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', flexGrow: 1 }}>
        <CssBaseline />
        <Box sx={{ p: 3 }}>
          {/* Replace the toolbar with your hero content */}
          <Box sx={{ mx: 'auto', maxWidth: '800px', textAlign: 'center', my: { xs: 8, md: 12 } }}>
            <Typography variant="h3" gutterBottom sx={{ color: '#fff' }}>
              About Me
            </Typography>
            <Typography sx={{ fontSize: 20, color: '#fff' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt?
              Corporis qui ducimus quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis
              in cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus
              quia corrupti alias distinctio nostrum. nesciunt ipsa ullam consequuntur dignissimos numquam at nisi porro a,
              quaerat rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem dolores sunt
              inventore perferendis, aut sapiente modi nesciunt.
            </Typography>
            <Button variant="contained" sx={{ mt: 3 }}>Contact Me</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
