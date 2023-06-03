import { Box, Button, ButtonGroup, Grid, IconButton, Paper, Typography } from '@mui/material'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete'

export default function CartItem ({ cart }) {
  const { agregarAlCarrito, removeItem } = useContext(CartContext)
  const handleAdd = () => {
    agregarAlCarrito(cart.item, 1)
  }
  const handleRemove = () => {
    agregarAlCarrito(cart.item, -1)
  }
  const remove = () => {
    removeItem(cart.item.id)
    console.log(cart.item)
  }
  return (
    <Grid
      elevation={10} component={Paper}
      sx={{ padding: '1rem', borderRadius: '8px' }}
      container mb={2}
    >
      <Grid item xs={10} md={1.2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          component='img' src={cart.item.image} alt={cart.item.title}
          sx={{ width: '50%' }}
        />

      </Grid>
      <Grid item xs={10} md={6.8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography fontFamily='sans-serif' gutterBottom variant='h5'>
          {cart.item.title}

        </Typography>

      </Grid>
      <Grid item xs={10} md={1.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ButtonGroup size='small' variant='contained' aria-label='outlined primary button group'>

          <Button size='small' disabled={cart.cantidad === 1} onClick={handleRemove}><RemoveOutlinedIcon fontSize='small' /></Button>
          <Typography ml={2} mr={2} gutterBottom variant='h6'>
            {cart.cantidad}
          </Typography>

          <Button size='small' disabled={cart.cantidad === cart.item.stock} onClick={handleAdd}><AddOutlinedIcon fontSize='small' /></Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={10} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography color='#4675b9' fontFamily='sans-serif' gutterBottom variant='h4'>
          $ {cart.item.price * cart.cantidad}

        </Typography>

      </Grid>
      <Grid item xs={10} md={0.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton aria-label='delete' onClick={remove}>
          <DeleteIcon />
        </IconButton>

      </Grid>

    </Grid>
  )
}
