import { AppBar, Badge, Box, Button, IconButton, Menu, MenuItem, Radio, Toolbar, Typography } from '@mui/material';
import logo from "../public/logo.png"
import React from 'react'
import Search from './Search';
import { AccountCircleRounded, Language,  Notifications } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import { red } from '@mui/material/colors';
function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));


  return (<div>
    <Box sx={{ flexGrow: 1 }} >
        <AppBar sx={{boxShadow:"none"}} position='sticky' color='inherit' enableColorOnDark>
            <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
            <div>
                <Button href='/dashboard/' variant='text' disableTouchRipple><img src={logo} alt='logo'></img> <Typography ml={1} variant='h6' sx={{font:"24px ",color:"#5272F2"}}>NEATLAB</Typography> </Button>
                <Radio size='sm'  sx={{
                  color: red[800],
                  '&.Mui-checked': {
                    color: red[600],
                  },
                }}/>
                <Search />
            </div>  
            <div>
                <IconButton>
                    <Language/>
                </IconButton>
                <IconButton>
                    <Notifications/>
                </IconButton>
                <IconButton onClick={handleClick}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    >
                    <AccountCircleRounded/>

                </StyledBadge>
                            
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose} ><Button variant='text' href='/login' sx={{color:"red"}}> <LogoutIcon color='error'/> Logout</Button></MenuItem>
                </Menu>
                </div>
            </Toolbar>
        </AppBar>
    </Box>
  </div>
    
  )
}

export default NavBar