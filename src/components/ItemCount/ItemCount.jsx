import { useState } from 'react'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import IconButton from '@mui/material/IconButton'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import { Divider, Stack, Typography } from '@mui/material'

export default function ItemCount ({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial)

  const handleAdd = () => {
    if (counter === stock) return null

    const count = counter + 1
    setCounter(count)
  }
  const handleRemove = () => {
    const count = counter - 1
    if (count === 0) return null

    setCounter(count)
  }
  const handleAddToCart = () => {
    onAdd(counter)
  }
  return (
    < >

      {stock === 0 &&
        <Alert severity='info'>
          <AlertTitle>No hay stock</AlertTitle>
        </Alert>}
      {stock !== 0 &&
        <>

          <Stack direction='row' justifyContent='center' alignItems='center'>
            <IconButton disabled={stock === 0} onClick={handleRemove}><RemoveOutlinedIcon fontSize='large' /></IconButton>
            {counter}
            <IconButton disabled={stock === 0} onClick={handleAdd}><AddOutlinedIcon fontSize='large' /></IconButton>

            <IconButton variant='contained' disabled={stock === 0} onClick={handleAddToCart}><AddShoppingCartOutlinedIcon fontSize='large' /></IconButton>

          </Stack>
          <Divider>
            <Typography variant='body2' color='textSecondary' component='p'>
              {stock} unidades disponibles
            </Typography>
          </Divider>
        </>}

    </>
  )
}
