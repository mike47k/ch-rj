import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import { Badge, Button, Divider, Stack, Typography } from '@mui/material'

export default function ItemCount ({ stock, cant, onAdd }) {
  const handleAdd = () => {
    onAdd()
  }

  return (
    < >

      {stock === 0 &&
        <Alert severity='info'>
          <AlertTitle>No hay stock</AlertTitle>
        </Alert>}
      {stock !== 0 &&
        <>

          <Stack direction='row' mt={3} justifyContent='center'>

            <Button variant='contained' disabled={stock === cant} onClick={handleAdd}>Sumar al carrito</Button>
            <Stack ml={2}>
              <Badge badgeContent={cant} color='primary'>

                <ShoppingCartOutlinedIcon fontSize='large' />
              </Badge>

            </Stack>

          </Stack>

          <Divider>
            <Typography variant='body2' color='textSecondary' mt={3} component='p'>
              {stock} unidades disponibles
            </Typography>
          </Divider>
        </>}

    </>
  )
}
