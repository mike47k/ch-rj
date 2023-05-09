import React from 'react'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'
import CardActionArea from '@mui/material/CardActionArea'

import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom'
import './style.css'

export default function Item ({ item }) {
  const [show, setShow] = React.useState(false)
  const [elevation, setElevation] = React.useState(2)

  const mouseEnter = () => {
    setShow(true)
    setElevation(24)
  }
  const mouseLeave = () => {
    setShow(false)
    setElevation(2)
  }

  return (
    <Grid sx={{ height: '400px' }} item xs={10} md={4} lg={3}>
      <Paper sx={{ height: '100%' }} elevation={elevation}>
        <Link to={`/item/${item.id}`} className='link'>
          <CardActionArea sx={{ height: '100%' }} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <CardMedia
              sx={{ width: '80%', mx: 'auto', my: 2, objectFit: 'contain', maxHeight: '150px' }}
              component='img'
              alt={item.title}
              image={item.image}
            />
            <Divider />

            <CardContent>
              <Typography gutterBottom variant='h5'>
                $ {item.price}
              </Typography>
              <Typography sx={{ mb: 1.5, color: '#00a650' }} gutterBottom variant='body1'>
                Envio gratis
              </Typography>
              {show &&
                <Typography gutterBottom variant='p' pb={10}>
                  {item.title}
                </Typography>}

            </CardContent>
          </CardActionArea>
        </Link>

      </Paper>
    </Grid>
  )
}
