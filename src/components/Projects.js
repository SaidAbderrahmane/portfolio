import React from 'react';
import MediaCard from './Card.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Projects(props) {
    return (
        <Box component="main" sx={{ p: 3 }}>
            <section id="Projects">
                <h2>Projects</h2>
                <Grid component="main" sx={{ p: 3 }} container rowSpacing={1} columnSpacing={5} columns={{ xs: 1, md: 3 }}>
                    <Grid >
                        <MediaCard />
                    </Grid>
                    <Grid >
                        <MediaCard />
                    </Grid>
                    <Grid>
                        <MediaCard />
                    </Grid>
                    <Grid>
                        <MediaCard />
                    </Grid>
                    <Grid>
                        <MediaCard />
                    </Grid>
                    <Grid>
                        <MediaCard />
                    </Grid>
                </Grid>
            </section>
        </Box>);
}

export default Projects;