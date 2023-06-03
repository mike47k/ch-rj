import React, { useContext } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartWidget () {
  const { totalItems } = useContext(CartContext)
  return (
    <Link to='/carrito'>

      <IconButton>
        <Badge badgeContent={totalItems()} color='primary'>
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
    </Link>
  )
}
