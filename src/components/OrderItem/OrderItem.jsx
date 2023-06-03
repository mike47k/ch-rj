import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export const OrderItem = ({ order }) => {
  return (
    <Grid
      elevation={10} component={Paper}
      sx={{ padding: '1rem', borderRadius: '8px' }}
      container mb={2}
    >
      <Grid item xs={10} md={6}>
        {order.items.map((i) => (
          <Grid
            key={i.item.id}
            container mb={2}
          >

            <Grid item xs={10} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box
                component='img' src={i.item.image} alt={i.item.title}
                sx={{ width: '50%' }}
              />

            </Grid>
            <Grid item xs={10} md={7} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography fontFamily='sans-serif' gutterBottom variant='p'>
                {i.item.title}

              </Typography>

            </Grid>
            <Grid item xs={10} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography fontFamily='sans-serif' gutterBottom variant='h6'>
                {i.cantidad} u. | $ {i.cantidad * i.item.price}

              </Typography>

            </Grid>

          </Grid>
        ))}

      </Grid>
      <Grid item xs={10} md={6}>
        <Typography fontFamily='sans-serif' gutterBottom variant='h5'>
          Para: {order.buyer}

        </Typography>

        <Typography fontFamily='sans-serif' gutterBottom variant='h5'>
          Estado: {order.status}

        </Typography>
        <Typography fontFamily='sans-serif' gutterBottom variant='h5'>
          Fecha: {order.date.toLocaleDateString()}

        </Typography>
        <Typography fontFamily='sans-serif' gutterBottom variant='p'>
          id: {order.id}

        </Typography>

      </Grid>

    </Grid>
  )
}
