import React from 'react'
import { Card,CardMedia,CardContent,CardActions,CardHeader,Rating } from '@mui/material'

function CustomCard({title,description,image,price,rating }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={title}>

        </CardHeader>
        <CardContent>
            <CardMedia 
                 component="img"
                 height="194"
                 image={image}
                 alt="Paella dish"
            />

            {description}
            <p>
                price :{price}
            </p>
        </CardContent>

        <CardActions>
            <Rating value={rating.rate} readOnly />
        </CardActions>
    
    </Card>
  )
}

export default CustomCard