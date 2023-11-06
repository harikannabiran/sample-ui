import { Search } from '@mui/icons-material'
import { Box, TextField, Typography,FormControl,InputLabel,InputAdornment,OutlinedInput, Card, CardMedia, CardContent, Grid } from '@mui/material'
import React from 'react'

function Home() {
  const cardData=[
    {
      header:"Sales Automation",
      body:"There is perphaps no better demonstration of folly image of our tiny world.",
      image:"https://img.freepik.com/free-vector/social-media-3d-concept-background_52683-96682.jpg?w=1380&t=st=1698912624~exp=1698913224~hmac=257fb34b0576cb37f00b5f846de7468a51e5ca99fff44414501b57208402f664"
    },
    {
      header:"Marketing Automation",
      body:"Looking again at that dot. That's here. That's home. That's us. On it everyone you love.",
      image:"https://img.freepik.com/free-vector/social-media-3d-concept-background_52683-96685.jpg?w=1380&t=st=1698912775~exp=1698913375~hmac=7c44ebf617bc7d15a63d9c856d94f7c92136366f8cb00808305b3c6618b08651"
    },
    {
      header:"API Questions",
      body:"Every hero and coward, every creator and destoryer of civillatizatio.n",
      image:"https://img.freepik.com/free-vector/social-media-3d-concept-background_52683-96688.jpg"
    },
    {
      header:"Personalization",
      body:"It's has been said that astronomy is humbling and character experience.",
      image:"https://img.freepik.com/free-vector/realistic-polygonal-background_23-2148916593.jpg"
    },
    {
      header:"Email Marketing",
      body:"There is perphaps no better demonstration of folly of human conceits.",
      image:"https://img.freepik.com/free-vector/realistic-3d-shapes-floating-background_52683-59348.jpg"
    },
    {
      header:"Demand Generation",
      body:"Competend means we will take anything for granted.",
      image:"https://img.freepik.com/free-vector/diverse-3d-shapes-floating-background_52683-59520.jpg"
    }
  ]
  return (
    <Box>
      <Box  sx={{backgroundColor:"#DDF2FD",height:"300px",width:"100%",borderRadius:"20px",paddingTop:"5vh"}}>
     
      <Typography mt={2} mb={2} variant='h5' sx={{color:"#5272F2"}}>Hello, how can we help?</Typography>
          <Typography mt={2} mb={2} variant='body1' sx={{color:"grey"}}>or choose a category to quickly find help you need</Typography>
          <FormControl  fullWidth sx={{ m: 1,display:"flex",alignItems:"center" }}>
          <OutlinedInput 
            id="outlined-adornment-amount"
            placeholder='Ask a question...'
            startAdornment={<InputAdornment position="start"><Search/></InputAdornment>}
            sx={{width:"30%",backgroundColor:"white"}}
          />
        </FormControl>
      </Box> 
      <Box sx={{margin:"20px 0px 50px 0px",paddingLeft:"80px"}} >
      <Grid container  rowSpacing={4}  columns={{ xs: 4, sm: 4, md: 12 }} >
      
        {cardData.map((data)=>{
          return(
            <Grid item xs={4} sx={{width:"400px"}}>
            <Card sx={{width:"400px", height:"300px",boxShadow:"3"}}>
            <CardMedia component="img" height='194' image={data.image}/>
            <CardContent>
              <Typography variant='h5'sx={{color:"grey"}}>{data.header}</Typography>
              <Typography variant='body2' sx={{color:"grey"}}>{data.body}</Typography>
            </CardContent>
          </Card>
          </Grid>
          )
          
        })}
        </Grid>

      </Box>  
    </Box>
    
  )
}

export default Home