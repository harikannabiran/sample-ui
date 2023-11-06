import { Search } from '@mui/icons-material'
import { Box, Typography,FormControl,InputAdornment,OutlinedInput, Card, CardContent, Grid } from '@mui/material'
import React, { useState } from 'react'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ConstructionIcon from '@mui/icons-material/Construction';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LinkIcon from '@mui/icons-material/Link';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function CRM() {
  const AccSettingIcon = styled(ConstructionIcon)(({ theme }) => ({
    color: 'blue', 
  }));
  const APIicon = styled(LinkIcon)(({ theme }) => ({
    color: 'green', 
  }));
  const BillingIcon = styled(AttachMoneyIcon)(({ theme }) => ({
    color: 'red', 
  }));
  const CopyrightIcon= styled(LockOpenIcon)(({ theme }) => ({
    color: '#F4CE14', 
  }));
  const MobileIcon= styled(MobileScreenShareIcon)(({ theme }) => ({
    color: '#5272F2', 
  }));
  
  const cardData=[
    {
      index:"0",
      header:"Account Settings",
      body:[
        "How Secure is my Password?",
        "Can I Change My Usename",
        "Where Can I Upload My Avatar?",
        "How Do I Change My TimeZone?",
        "How Do I Change My Password?"
      ],
      icon:<AccSettingIcon  />,
      details:{
        heading:"How Secure is my Password?",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Felis eget nunc lobortis mattis. Donec et odio pellentesque diam volutpat. Senectus et netus et malesuada fames ac turpis. Scelerisque eu ultrices vitae auctor eu augue. Vitae et leo duis ut. Nec nam aliquam sem et tortor consequat. Nisl vel pretium lectus quam id leo. Libero id faucibus nisl tincidunt eget nullam non nisi est. A diam sollicitudin tempor id eu nisl. Velit laoreet id donec ultrices tincidunt. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Ante metus dictum at tempor commodo ullamcorper a lacus."
      }
    },
    {
      index:"1",
      header:"API Questions",
      body:[
        "What Technologies Are Used?",
        "What Are The API Limits?",
        "Why Was My Application Rejected?",
        "Where can I find the documentation?",
        "How Do I Get AN API Key?"
      ],
      icon:<APIicon/>,
      details:{
        heading:"Why Was My Application Rejected?",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Felis eget nunc lobortis mattis. Donec et odio pellentesque diam volutpat. Senectus et netus et malesuada fames ac turpis. Scelerisque eu ultrices vitae auctor eu augue. Vitae et leo duis ut. Nec nam aliquam sem et tortor consequat. Nisl vel pretium lectus quam id leo. Libero id faucibus nisl tincidunt eget nullam non nisi est. A diam sollicitudin tempor id eu nisl. Velit laoreet id donec ultrices tincidunt. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Ante metus dictum at tempor commodo ullamcorper a lacus."
      }
    },
    {
      index:"2",
      header:"Billing",
      body:[
        "Can I Contact A Sales Rep?",
        "Do I Need To Pay VAT?",
        "Can I Get A Refund",
        "Difference Annual & Monthly Billing",
        "What Happens If The Price Increase?"      
      ],
      icon:<BillingIcon/>,
      details:{
        heading:"Can I Contact A Sales Rep?",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Felis eget nunc lobortis mattis. Donec et odio pellentesque diam volutpat. Senectus et netus et malesuada fames ac turpis. Scelerisque eu ultrices vitae auctor eu augue. Vitae et leo duis ut. Nec nam aliquam sem et tortor consequat. Nisl vel pretium lectus quam id leo. Libero id faucibus nisl tincidunt eget nullam non nisi est. A diam sollicitudin tempor id eu nisl. Velit laoreet id donec ultrices tincidunt. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Ante metus dictum at tempor commodo ullamcorper a lacus."
      }
    },
    {
      index:"3",
      header:"Copyright & Legal",
      body:[
        "How Do I Contact Legal?",
        "Where Are Your Offices Located?",
        "Where Can I Upload My Avatar?",
        "Who Owns The Copyright On Text?",
        "How Do I File A DMCA?"
      ],
      icon:<CopyrightIcon/>,
      details:{
        heading:"How Do I Contact Legal?",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Felis eget nunc lobortis mattis. Donec et odio pellentesque diam volutpat. Senectus et netus et malesuada fames ac turpis. Scelerisque eu ultrices vitae auctor eu augue. Vitae et leo duis ut. Nec nam aliquam sem et tortor consequat. Nisl vel pretium lectus quam id leo. Libero id faucibus nisl tincidunt eget nullam non nisi est. A diam sollicitudin tempor id eu nisl. Velit laoreet id donec ultrices tincidunt. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Ante metus dictum at tempor commodo ullamcorper a lacus."
      }
    },
    {
      index:"4",
      header:"Mobile Apps",
      body:[
        "How Do I Download The Android App?",
        "Where Can I Upload My Avatar?",
        "How To Download Our iPad App?",
        "Can I Use My Android Phone?",
        "Is There An iOS App?"
      ],
      icon:<MobileIcon/>,
      details:{
        heading:"How Do I Download The Android App?",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Felis eget nunc lobortis mattis. Donec et odio pellentesque diam volutpat. Senectus et netus et malesuada fames ac turpis. Scelerisque eu ultrices vitae auctor eu augue. Vitae et leo duis ut. Nec nam aliquam sem et tortor consequat. Nisl vel pretium lectus quam id leo. Libero id faucibus nisl tincidunt eget nullam non nisi est. A diam sollicitudin tempor id eu nisl. Velit laoreet id donec ultrices tincidunt. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Ante metus dictum at tempor commodo ullamcorper a lacus."
      }
      
    },
    {
      index:"5",
      header:"Using Know How",
      body:[
        "Customization",
        "Upgrading",
        "Customizing Your Theme",
        "Upgrading Your Theme"
      ],
      icon:<InfoIcon/>,
      details:{
        heading:"Customizing Your Theme",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Felis eget nunc lobortis mattis. Donec et odio pellentesque diam volutpat. Senectus et netus et malesuada fames ac turpis. Scelerisque eu ultrices vitae auctor eu augue. Vitae et leo duis ut. Nec nam aliquam sem et tortor consequat. Nisl vel pretium lectus quam id leo. Libero id faucibus nisl tincidunt eget nullam non nisi est. A diam sollicitudin tempor id eu nisl. Velit laoreet id donec ultrices tincidunt. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Ante metus dictum at tempor commodo ullamcorper a lacus."
      }
    }
  ]
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardIndex,setCardIndex]=useState(0)
  const [detail,setDetail]=useState()
  const history = useHistory();
  const { selectedCardHeader } = useParams();
  
  const handleCardClick = (index) => {
    const selectedHeader = cardData[index].header;
    history.push(`/dashboard/crm/${selectedHeader.toLowerCase()}`);
    setCardIndex(index)
    console.log(index)
    setIsFlipped(isFlipped?false:true);
    setDetail(cardData[cardIndex])
  };
  useEffect(() => {
    const handlePopstate = () => {
      window.location.reload();
    };
    const handlePushstate = () => {
      window.location.reload();
    };
    window.addEventListener('popstate', handlePopstate);
    window.addEventListener('pushstate', handlePushstate);
    return () => {
      window.removeEventListener('popstate', handlePopstate);
      window.removeEventListener('pushstate', handlePushstate);
    };
  }, []); 
  return (
    <Box>
    {
      isFlipped? <>
      <Box sx={{margin:"20px 0px 50px 0px",paddingLeft:"80px"}} >
        <Grid container  rowSpacing={2}  columns={{ xs: 4, sm: 4, md: 12 }} >
         
              <Grid item xs={4} sx={{width:"400px"}} >
              <button  value={cardData[cardIndex].index} style={{borderStyle:"none",backgroundColor:"inherit"}}>
              <Card sx={{width:"400px", height:"250px",boxShadow:"2"}}   >
                  <CardContent sx={{padding:"0px"}}>
                    <Typography variant='h6'sx={{color:"grey",backgroundColor:"#F0F0F0",fontSize:"24px", alignItems:"center", width:"100%",height:"50px",paddingTop:"10px",paddingLeft:"20px",textAlign:"left"}}>  {cardData[cardIndex].icon}  {cardData[cardIndex].header} ({cardData[cardIndex].body.length})</Typography>
                    {cardData[cardIndex].body.map((query)=>{
                      return(
                        <Typography variant='body2' mt={2} mb={2} sx={{color:"grey",textAlign:"left",fontSize:"14px",padding:"0px 20px"}}><CircleOutlinedIcon fontSize='8px'/> {query}</Typography>
                      )
                    })}
                  </CardContent>
                </Card>
              </button>
              </Grid>
              <Grid item xs={4} sx={{width:"800px"}} >
              <button onClick={handleCardClick  } value={cardData[cardIndex].index} style={{borderStyle:"none",backgroundColor:"inherit"}}>
              <Card sx={{width:"800px", height:"100%",boxShadow:"2",}}   >
                  <CardContent sx={{padding:"0px"}}>
                    <Typography variant='h6'sx={{color:"grey",fontSize:"24px", alignItems:"center", width:"100%",height:"50px",paddingTop:"10px",paddingLeft:"20px",textAlign:"left"}}><MobileScreenShareIcon/>{cardData[cardIndex].details.heading} </Typography>
                    {cardData[cardIndex].body.map((query)=>{
                      return(
                        <Typography variant='body2' mt={2} mb={2} sx={{color:"grey",textAlign:"left",fontSize:"14px",padding:"0px 20px"}}><CircleOutlinedIcon fontSize='8px'/> {cardData[cardIndex].details.body}</Typography>
                      )
                    })}
                  </CardContent>
                </Card>
              </button>
              </Grid>
        </Grid>
        
      </Box>  

      </>:
      <>
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
        <Grid container  rowSpacing={2}  columns={{ xs: 4, sm: 4, md: 12 }} >
          {cardData.map((data,index)=>{
            console.log(index)
            return(
              <Grid item xs={4} sx={{width:"400px"}} >
              <button onClick={() => handleCardClick(index)} value={index} style={{borderStyle:"none",backgroundColor:"inherit"}}>
              <Card sx={{width:"400px", height:"250px",boxShadow:"2"}}   >
                  <CardContent sx={{padding:"0px"}}>
                    <Typography variant='h6'sx={{color:"grey",backgroundColor:"#F0F0F0",fontSize:"24px", alignItems:"center", width:"100%",height:"50px",paddingTop:"10px",paddingLeft:"20px",textAlign:"left"}}>  {data.icon}  {data.header} ({data.body.length})</Typography>
                    {data.body.map((query)=>{
                      return(
                        <Typography variant='body2' mt={2} mb={2} sx={{color:"grey",textAlign:"left",fontSize:"14px",padding:"0px 20px"}}><CircleOutlinedIcon fontSize='8px'/> {query}</Typography>
                      )
                    })}
                  </CardContent>
                </Card>
              </button>
               
              </Grid>
            )})}
        </Grid>
      </Box>  
      </>
    }
      
    </Box>
    
  )
}

export default CRM