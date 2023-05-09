import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getItemById } from '../../helpers/getData'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer () {
  const [itemDetail, setItemDetail] = useState(null)

  const { itemId } = useParams()

  useEffect(() => {
    getItemById(parseInt(itemId)).then((data) => {
      setItemDetail(data)
    })
  }, [itemId])
  return (
    <Container>
      {itemDetail ? <ItemDetail itemDetail={itemDetail} /> : 'f'}
    </Container>
  )
}
