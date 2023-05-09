import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getData, getItemByCategory } from '../../helpers/getData'

import ItemList from '../ItemList/ItemList'

export default function ItemListContainer () {
  const [items, setItems] = useState(null)
  const [loading, setLoading] = useState(true)

  const { category } = useParams()

  useEffect(() => {
    setLoading(true)
    if (category) {
      getItemByCategory(parseInt(category)).then((data) => {
        setItems(data)
        setLoading(false)
      })
    } else {
      getData().then((data) => {
        setItems(data)
        setLoading(false)
      })
    }
  }, [category])
  return (
    <>
      <ItemList items={items} loading={loading} />
    </>

  )
}
