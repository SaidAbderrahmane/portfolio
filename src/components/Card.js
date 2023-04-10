import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ marginLeft:5, margin: 2, width: 450, height:450 }}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://www.zdnet.com/a/img/resize/adcb2eb2cc3f5562f7e80931308e2a08b01947ce/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/istock-1147195672-11.jpg?auto=webp&fit=crop&height=900&width=1200"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Project Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Project Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='https://www.github.com/saidabderrahmane' size="small">Source</Button>
        <Button size="small">Demo</Button>
      </CardActions>
    </Card>
  );
}