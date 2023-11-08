import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function Landing() {
  return (
    <Box>
        <Container sx={{marginTop:"25vh"}}>
            <Typography variant='h2' sx={{color:"#5272F2"}}>Welcome to NeatLab Dashboard</Typography>
            <Typography variant='h5' sx={{color:"grey"}}>Tighten your seat belt for your adventure!</Typography>
            <Typography variant='h5' sx={{color:"grey"}}>Let's Go!</Typography>
        </Container>
    </Box>
  )
}

export default Landing