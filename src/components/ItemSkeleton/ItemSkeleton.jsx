import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import { Grid } from '@mui/material'

export default function ItemSkeleton () {
  const myArray = Array.from({ length: 20 })

  return (
    <>{myArray.map((_, i) => (
      <Grid key={i} sx={{ height: '400px' }} item xs={10} md={4} lg={3}>
        <Skeleton variant='rectangular' height={220} />

        <Skeleton sx={{ mt: 2, mb: 2 }} variant='rounded' width={150} height={60} />
        <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        <Skeleton variant='text' sx={{ fontSize: '1rem' }} />

      </Grid>
    ))}
    </>
  )
}
