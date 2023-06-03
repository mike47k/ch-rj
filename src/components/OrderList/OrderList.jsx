import React, { useContext } from 'react'
import { OrederContext } from '../../context/OrderContext'
import { Grid } from '@mui/material'
import { OrderItem } from '../OrderItem/OrderItem'

export const OrderList = () => {
  const { order } = useContext(OrederContext)
  return (
    <Grid container p={2}>
      <Grid item>
        {!order
          ? 'f'
          : order.map((o) => (
            <OrderItem key={o.id} order={o} />
          ))}
      </Grid>

    </Grid>
  )
}
