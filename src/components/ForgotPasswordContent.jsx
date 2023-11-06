import { Box } from '@mui/material'
import React from 'react'
import forgotPasswordpagepic from "../public/signuppagepic.png"


function ForgotPasswordContent() {
  return (
    <Box sx={{height:"100%",width:"100%"}}>
        
            <img src={forgotPasswordpagepic} style={{objectFit:"fill",width:"100%",height:"100%"}} alt='loginpage'></img>
     
        
    </Box>
  )
}

export default ForgotPasswordContent