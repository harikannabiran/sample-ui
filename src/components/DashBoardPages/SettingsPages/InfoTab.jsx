import { Container, TextField, Box,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio,Button } from '@mui/material'

import React from 'react'


function InfoTab() {
  return (
    <Box>
        <Container  sx={{margin:"0px 0px 10px 0px"}}>
            <Box>
                <TextField sx={{width:"82%"}} variant='outlined' label="Bio" multiline rows={4} />
            </Box>
            <Box>
            <TextField sx={{width:"40%",margin:"20px 10px"}} variant='outlined' label="Date of Birth"/>
            <TextField sx={{width:"40%",margin:"20px 10px"}}  variant='outlined' label="Phone No."/>
            </Box>
            <Box>
            <TextField sx={{width:"40%",margin:"20px 10px"}} variant='outlined' label="Website"/>
            <TextField sx={{width:"40%",margin:"20px 10px"}}  variant='outlined' label="Country"/>
            </Box>
            <Box>
            <TextField sx={{width:"40%",margin:"20px 10px"}}  variant='outlined' label="Language"/>
            <FormControl sx={{width:"40%",margin:"20px 10px", textAlign:"left"}}>
      <FormLabel id="demo-row-radio-buttons-group-label" >Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
            </Box>
        </Container>
        <Box sx={{width:"20%",margin:"50px 90px"}}>
    <Button variant='contained'sx={{margin:"10px 20px"}}>Save Changes</Button>
        <Button variant='outlined'>Cancel</Button>
    </Box>
    
    </Box>
  )
}

export default InfoTab