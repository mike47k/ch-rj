import React, { useEffect, useState } from 'react'
import { CATEGORIA } from '../../Data/MockData'
import { Chip, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const CategoryDetail = ({ idCategory }) => {
  const [categoria, setCategoria] = useState()
  useEffect(() => {
    if (idCategory) {
      setCategoria(CATEGORIA.find(c => c.id === idCategory))
    }
  }, [idCategory, categoria])
  return (
    <>
      <Typography gutterBottom variant='p'>
        Categoria:

      </Typography>
      <Link to={`/categoria/${categoria && categoria.id}`}>
        <Chip label={categoria && categoria.categoria} clickable />

      </Link>
    </>
  )
}
