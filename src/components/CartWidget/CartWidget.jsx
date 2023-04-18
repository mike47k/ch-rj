import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 3,
    // border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))

export default function CartWidget () {
  return (
    <IconButton aria-label='shoppingcart'>
      <StyledBadge badgeContent={4} color='primary'>
        <ShoppingCartOutlinedIcon />
      </StyledBadge>
    </IconButton>
  )
}
