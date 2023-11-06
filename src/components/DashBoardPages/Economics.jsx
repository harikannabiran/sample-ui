import { AttachMoney, CircleOutlined } from '@mui/icons-material'
import { Box, Container, Grid, Switch, Typography,Card,CardContent, CardMedia, CardActions, Button, CardHeader, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import React from 'react'
import standardpic from "../../public/standardplan.png"
import basicpic from "../../public/basicplan.png"
import enterprisepic from "../../public/enterpriseplan.png"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Economics() {
  const cardData=[
    {
      plan:"Basic",
      plandescription:"Asimple start for everyone",
      cost:"0",
      features:[
        "100 responses a month",
        "Unlimites forms and surveys",
        "Unlimited fields",
        "Basic form creation tools",
        "Up to 2 subdomins"
      ],
      btn:"your current plan",
      btntype:"outlined",
      btncolor:"green",
      img:basicpic

    },
    {
      plan:"Standard",
      plandescription:"For small to medium businesses",
      cost:"49",
      features:[
        "Unlimited response",
        "Unlimites forms and surveys",
        "Instagram profil page",
        "Google Docs integration",
        "Custom 'Thank you' page"
      ],
      btn:"upgrade",
      btntype:"contained",
      chip:"Popular",
      img:standardpic
    },
    {
      plan:"Enterprise",
      plandescription:"Solution for big organizations",
      cost:"99",
      features:[
        "PayPal payments",
        "Logic Jumps",
        "File upload with 5GB storage",
        "Custom Domain support",
        "Stripe integration"
      ],
      btn:"upgrade",
      btntype:"outlined",

      img:enterprisepic
    }
  ]
  return (
    <Box  >
      <Container>
        <Box>
          <Typography variant='h5' sx={{color:"grey"}}>Pricing Plans</Typography>
          <Typography variant='body1' sx={{color:"grey"}}>All plans include 40+ advanced tools and features to boost your product</Typography>
          <Typography variant='body1' sx={{color:"grey"}}>Choose the best plan to fit needs.</Typography>
          <Typography variant='body1' sx={{color:"grey"}}>Monthly <Switch/> Annually</Typography>
        </Box>
      </Container>
      <Container>
      <Box mt={8} >
        <Grid container  rowSpacing={2}  columns={{ xs: 4, sm: 4, md: 12 }} >
      
      {cardData.map((data)=>{
        return(
          <Grid item xs={4} sx={{width:"400px",paddingLeft:"20px"}}>
          <Card sx={{width:"300px", height:"660px",boxShadow:"3"}}>
         <CardHeader sx={{justifyContent:"right"}} title=
          {
            data.chip?<>
            <Chip sx={{zIndex:"1"}} label={data.chip} variant='outlined'/>
            </>:<><Box sx={{height:"30px"}}></Box></>
         }/>
          <CardMedia component="img" width="100" height='200' sx={{objectFit:"contain"}} image={data.img} />
          <CardContent height="100px" sx={{padding:"0px"}}>
            <Typography variant='h4' >{data.plan}</Typography>
            <Typography variant='h6'>{data.plandescription}</Typography>
            <Box mt={2} sx={{display:"inline-flex",justifyContent:"center"}}>
            <Typography><AttachMoney fontSize='small'/></Typography>
            <Typography variant='h3'>{data.cost} </Typography>
            <Box sx={{paddingTop:"24px"}}><Typography>/month</Typography></Box>
            </Box>
            
            {data.features.map((query)=>{
              return(
                <Typography variant='body2' mt={2} mb={2} sx={{color:"grey",textAlign:"left",fontSize:"14px",padding:"0px 20px"}}><CircleOutlined fontSize='8px'/> {query}</Typography>
              )
            })}
          </CardContent>
          <CardActions >
            <Button  fullWidth variant={data.chip ==="Popular"?"contained":"outlined"} color={
              data.btn ==="your current plan"? "success":"primary"
            }>{data.btn}</Button>
          </CardActions>
        </Card>
        </Grid>
        )
        
      })}
      </Grid>
        </Box>
      </Container>
     <Container sx={{height:"250px",width:"100%",backgroundColor:"#DDF2FD",marginTop:"50px"}}>
      <Box sx={{textAlign:"left",paddingTop:"60px"}}>
        <Typography sx={{margin:"12px ",color:"#5272F2"}} variant='h5'>Still not convinced? Start with a 14-day FREE trail!</Typography>
        <Typography sx={{margin:"12px ",color:"grey"}} variant='body1'>You get full access with all features for 14 dyas.</Typography>
        <Button sx={{margin:"12px "}} variant='contained'>Start 14-day free trail</Button>
      </Box>
     </Container>
      <Container sx={{marginTop:"100px",marginBottom:"100px"}}>
        <Box>
          <Typography variant='h5' mt={4} mb={4} sx={{color:"grey"}}>FAQ's</Typography>
          <Typography variant='body1' mt={4} mb={4} sx={{color:"grey"}}>Let us help answer the most common questions</Typography>
          <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant='h6' sx={{color:"grey"}}>General settings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' sx={{color:"grey",textAlign:"left"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Nunc congue nisi vitae suscipit tellus. Tempor orci eu lobortis elementum nibh. Tristique sollicitudin nibh sit amet commodo.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant='h6' sx={{color:"grey"}}>User</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography  variant='body1' sx={{color:"grey",textAlign:"left"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Nunc congue nisi vitae suscipit tellus. Tempor orci eu lobortis elementum nibh. Tristique sollicitudin nibh sit amet commodo.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant='h6' sx={{color:"grey"}}>Advanced settings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' sx={{color:"grey",textAlign:"left"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Nunc congue nisi vitae suscipit tellus. Tempor orci eu lobortis elementum nibh. Tristique sollicitudin nibh sit amet commodo.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>

    </Box>
  )
}

export default Economics