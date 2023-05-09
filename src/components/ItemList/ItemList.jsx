import Item from '../Item/Item'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'
import ItemSkeleton from '../ItemSkeleton/ItemSkeleton'

export default function ItemList ({ items, loading }) {
  return (
    <Container>
      <Grid container spacing={4} mt={2} mb={6}>

        {loading
          ? <ItemSkeleton />
          : items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
      </Grid>
    </Container>
  )
}
