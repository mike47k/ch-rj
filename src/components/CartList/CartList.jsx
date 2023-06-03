import Grid from '@mui/material/Grid'
import { Paper, Button } from '@mui/material'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import CartResume from '../CartResume/CartResume'
import { OrederContext } from '../../context/OrderContext'
import { useNavigate } from 'react-router-dom'

export default function CartList () {
  const { cart, emptyCart } = useContext(CartContext)
  const { addOrder } = useContext(OrederContext)
  const navigate = useNavigate()

  const generateOrder = () => {
    addOrder(cart)
    emptyCart()
    navigate('/')
  }

  return (
    <Grid container p={2} sx={{ justifyContent: 'space-between' }}>
      <Grid item md={8.4}>
        {!cart
          ? 'f'
          : cart.map((c) => (
            <CartItem key={c.item.id} cart={c} />
          ))}
      </Grid>

      <Grid
        item md={3.5} elevation={10} component={Paper} sx={{ borderRadius: '8px', padding: '1rem', height: '350px' }}
      >
        <CartResume />
        <Button variant='contained' color='primary' onClick={generateOrder}>
          Generar orden
        </Button>
      </Grid>
    </Grid>
  )
}
