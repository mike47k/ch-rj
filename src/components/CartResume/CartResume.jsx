import { Divider, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function CartResume () {
  const { totalCompra, totalCantidad } = useContext(CartContext)

  return (
    <Stack mb={3}>

      <Typography fontFamily={"'Roboto', sans-serif"} gutterBottom variant='h6'>
        Para: nombre
      </Typography>
      <Typography fontFamily={"'Roboto', sans-serif"} gutterBottom variant='h6'>
        Email: email
      </Typography>
      <Typography fontFamily={"'Roboto', sans-serif"} gutterBottom variant='h6'>
        Telefono: telefono
      </Typography>
      <Divider sx={{ marginTop: '32px', marginBottom: '16px' }} />
      <Typography fontFamily={"'Roboto', sans-serif"} fontWeight={700} gutterBottom variant='h5'>
        Cantidad total:  {totalCantidad()}
      </Typography>
      <Typography fontFamily={"'Roboto', sans-serif"} fontWeight={700} gutterBottom variant='h5'>
        Total: $ {totalCompra()}
      </Typography>

    </Stack>
  )
}
