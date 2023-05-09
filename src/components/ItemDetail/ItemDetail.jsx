import { Box, Button, Grid, Paper, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useNavigate } from 'react-router-dom'
import { CategoryDetail } from '../CategoryDetail/CategoryDetail'

export default function ItemDetail ({ itemDetail }) {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <Grid
      elevation={10} component={Paper} justifyContent='center'
      sx={{ height: '600px', maxHeight: '600px', marginTop: '1rem', padding: '1rem', borderRadius: '8px' }}
      container direction={{ lg: 'row', md: 'column' }}
    >
      <Grid item xs={10} md={4} alignSelf='center'>
        <Box sx={{ width: '60%', mx: 'auto' }}>
          <Box
            component='img' src={itemDetail.image} alt={itemDetail.title}
            sx={{ height: '100%', width: '100%' }}
          />
        </Box>

      </Grid>

      <Grid padding={3} item xs={10} md={4}>

        <Typography fontFamily='sans-serif' fontWeight={100} gutterBottom variant='h4'>
          {itemDetail.title}

        </Typography>
        <Rating name='read-only' value={itemDetail.rating.rate} readOnly size='small' />
        <Typography justifyContent='center' variant='p' fontFamily='sans-serif' gutterBottom color='primary'>
          ({itemDetail.rating.count})
        </Typography>
        <Typography fontFamily={"'Roboto', sans-serif"} fontWeight={700} gutterBottom variant='h3'>
          $ {itemDetail.price}
        </Typography>
        <Typography gutterBottom variant='p'>
          {itemDetail.description}
        </Typography>

      </Grid>
      <Grid padding={3} item xs={10} md={4} borderRadius='8px' border='1px solid rgba(0,0,0,.1)'>

        <CategoryDetail idCategory={itemDetail.category} />
        <Stack mt={3} mb={5} spacing={2}>

          <ItemCount stock={itemDetail.stock} initial={1} />

        </Stack>
        <Button
          variant='contained'
          size='large'
          onClick={handleGoBack}
        >Volver
        </Button>
      </Grid>
    </Grid>

  // </Paper>
  )
}
