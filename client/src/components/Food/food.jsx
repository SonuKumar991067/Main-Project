import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Food = ({name, price, desc, imageUrl}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 290 }}
      image={imageUrl}
    //   title="Burger"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography gutterBottom variant="h6" component="div">
        {price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
     <i>{desc}</i>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Buy Now</Button>
      <Button size="small"></Button>
    </CardActions>
  </Card>
  )
}

export default Food;
