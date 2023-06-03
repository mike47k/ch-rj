import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CartWidget from '../CartWidget/CartWidget'
import { Stack } from '@mui/material'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import Avatar from '@mui/material/Avatar'
import LogoLM from '../../assets/logo.jpeg'
import { Link } from 'react-router-dom'
import './style.css'
import { CATEGORIA } from '../../Data/MockData'

const settings = [{ name: 'Mis ordenes', link: 'mis-ordenes' }, { name: 'Cerrar Sesion', link: 'cerrar-sesion' }]

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2'
    }
  }
})

function Navbar () {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <ThemeProvider theme={darkTheme}>

      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: { xs: 'space-between', md: 'initial' } }}>

            <Link to='/'>
              <Avatar
                variant='square'
                alt='Remy Sharp'
                src={LogoLM}
                sx={{ width: 42, height: 42, marginRight: 2, order: { xs: '2', md: 'initial' } }}
              />
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                id='categoria'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Categoria
              </Button>

              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
              >

                {CATEGORIA.map((categoria) => (
                  <Link to={`/categoria/${categoria.id}`} key={categoria.id} className='link'>
                    <MenuItem onClick={handleClose}>{categoria.categoria}</MenuItem>

                  </Link>

                ))}

              </Menu>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, order: '1' }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                <MenuItem>Categorias: </MenuItem>
                {CATEGORIA.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>{page.categoria}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Stack direction='row' spacing={2} sx={{ order: { xs: '3', md: 'initial' } }}>
              <Box sx={{ flexGrow: 0 }}>
                <IconButton onClick={handleOpenUserMenu}>
                  <PermIdentityOutlinedIcon />
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (

                    <Link to={`/${setting.link}`} key={setting.name} className='link'>
                      <MenuItem onClick={handleCloseUserMenu}>{setting.name}</MenuItem>

                    </Link>
                  ))}
                </Menu>
              </Box>

              <CartWidget />

            </Stack>

          </Toolbar>
        </Container>
      </AppBar>

    </ThemeProvider>

  )
}
export default Navbar
