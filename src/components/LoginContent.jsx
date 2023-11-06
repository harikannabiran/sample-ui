import { Box } from '@mui/material'
import React from 'react'
import loginpagepic from "../public/loginpagepic.png"


function LoginContent() {
  return (
    <Box sx={{height:"100%",width:"100%"}}>
        <img src={loginpagepic} style={{objectFit:"fill",width:"100%",height:"100%"}} alt='loginpage'></img>
    </Box>
  )
}

export default LoginContent