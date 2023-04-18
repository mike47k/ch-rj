
import * as React from 'react'
import Paper from '@mui/material/Paper'
import { Container } from '@mui/system'
import { Typography } from '@mui/material'

export default function ItemListContainer ({ greeting }) {
  return (
    <Container sx={{
      marginTop: 5
    }}
    >

      <Paper elevation={3} sx={{ width: '100px', padding: '16px' }}>
        <Typography variant='h5'>
          {greeting}

        </Typography>
      </Paper>

    </Container>

  )
}
