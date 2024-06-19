import React from 'react'
import { Card,CardMedia,CardContent,CardActions,CardHeader,Rating } from '@mui/material'

function CustomCard({title,description,image,price,rating }) {
  return (
    <Card sx={{ maxWidth: 300, display:'flex' ,flexDirection:'column',background:'beige' }}>
        <CardHeader title={title} sx={{flex:1,border:'1px solid'}}>

        </CardHeader>
        <CardContent sx={{flex:3,border:'1px solid'}}>
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

        <CardActions sx={{flex:2,border:'1px solid'}}>
            <Rating value={rating.rate} readOnly />
            {/* <Add to cart/> */}
            
        </CardActions>
    
    </Card>
  )
}

export default CustomCard