import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Card,
  CardContent,
  Grid,
  CardActionArea,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ConstructionIcon from '@mui/icons-material/Construction';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LinkIcon from '@mui/icons-material/Link';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCRM } from './CRMContext';
const CRM = () => {
  const AccSettingIcon = styled(ConstructionIcon)(({ theme }) => ({
    color: 'blue',
  }));
  const APIicon = styled(LinkIcon)(({ theme }) => ({
    color: 'green',
  }));
  const BillingIcon = styled(AttachMoneyIcon)(({ theme }) => ({
    color: 'red',
  }));
  const CopyrightIcon = styled(LockOpenIcon)(({ theme }) => ({
    color: '#F4CE14',
  }));
  const MobileIcon = styled(MobileScreenShareIcon)(({ theme }) => ({
    color: '#5272F2',
  }));

  const cardData = [
    {
      header: "Account Settings",
      items: [
        "How Secure is my Password?",
        "Can I Change My Username",
        "Where Can I Upload My Avatar?",
        "How Do I Change My TimeZone?",
        "How Do I Change My Password?",
      ],
      icon: <AccSettingIcon />,
      details: {
        heading: "How Secure is my Password?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      },
    },
    {
      header: "API Questions",
      items: [
        "What Technologies Are Used?",
        "What Are The API Limits?",
        "Why Was My Application Rejected?",
        "Where can I find the documentation?",
        "How Do I Get An API Key?",
      ],
      icon: <APIicon />,
      details: {
        heading: "Why Was My Application Rejected?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      },
    },
    {
      header: "Billing",
      items: [
        "Can I Contact A Sales Rep?",
        "Do I Need To Pay VAT?",
        "Can I Get A Refund",
        "Difference Annual & Monthly Billing",
        "What Happens If The Price Increases?",
      ],
      icon: <BillingIcon />,
      details: {
        heading: "Can I Contact A Sales Rep?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      },
    },
    {
      header: "Copyright & Legal",
      items: [
        "How Do I Contact Legal?",
        "Where Are Your Offices Located?",
        "Where Can I Upload My Avatar?",
        "Who Owns The Copyright On Text?",
        "How Do I File A DMCA?",
      ],
      icon: <CopyrightIcon />,
      details: {
        heading: "How Do I Contact Legal?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      },
    },
    {
      header: "Mobile Apps",
      items: [
        "How Do I Download The Android App?",
        "Where Can I Upload My Avatar?",
        "How To Download Our iPad App?",
        "Can I Use My Android Phone?",
        "Is There An iOS App?",
      ],
      icon: <MobileIcon />,
      details: {
        heading: "How Do I Download The Android App?",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      },
    },
    {
      header: "Using Know How",
      items: ["Customization", "Upgrading", "Customizing Your Theme", "Upgrading Your Theme"],
      icon: <InfoIcon />,
      details: {
        heading: "Customizing Your Theme",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      },
    },
  ];

  const [isFlipped, setIsFlipped] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const history = useParams();
  const navigate = useNavigate(); 
  const { selectedCardIndex, setSelectedCardIndex } = useCRM();
  console.log(isFlipped)
  const handleCardClick = (index) => {
    setIsFlipped(true);
    console.log('Before click - isFlipped:', isFlipped);
    setSelectedCardIndex(index);
    setCardIndex(index);
    
    console.log('After click - isFlipped:', isFlipped);
    
    
  };

  return (
    <Box sx={{paddingLeft:"50px"}}>
      {isFlipped ? (
        <>
        <Box sx={{ margin: "20px 0px 50px 0px", paddingLeft: "80px" }}>
          <Grid container rowSpacing={2} columns={{ xs: 4, sm: 4, md: 12 }}>
            <Grid item xs={4} sx={{ width: "400px" }}>
              <Card sx={{ width: "400px", height: "250px", boxShadow: "2" }}>
                <CardContent sx={{ padding: "0px" }}>
                  <Typography variant="h6" sx={{ color: "grey", backgroundColor: "#F0F0F0", fontSize: "24px", alignItems: "center", width: "100%", height: "50px", paddingTop: "10px", paddingLeft: "20px", textAlign: "left" }}>
                    {cardData[cardIndex].icon} {cardData[cardIndex].header} ({cardData[cardIndex].items.length})
                  </Typography>
                  {cardData[cardIndex].items.map((query) => {
                    return (
                      <Typography variant="body2" mt={2} mb={2} sx={{ color: "grey", textAlign: "left", fontSize: "14px", padding: "0px 20px" }}>
                        <CircleOutlinedIcon fontSize="8px" /> {query}
                      </Typography>
                    );
                  })}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} sx={{ width: "800px" }}>
              
                <Card sx={{ width: "800px", height: "100%", boxShadow: "2" }}>
                  <CardContent sx={{ padding: "0px" }}>
                    <Typography variant="h6" sx={{ color: "grey", fontSize: "24px", alignItems: "center", width: "100%", height: "50px", paddingTop: "10px", paddingLeft: "20px", textAlign: "left" }}>
                      <MobileScreenShareIcon /> {cardData[cardIndex].details.heading}
                    </Typography>
                    <Typography variant="body2" mt={2} mb={2} sx={{ color: "grey", textAlign: "left", fontSize: "14px", padding: "0px 20px" }}>
                      <CircleOutlinedIcon fontSize="8px" /> {cardData[cardIndex].details.body}
                    </Typography>
                  </CardContent>
                </Card>
             
            </Grid>
          </Grid>
        </Box>
        </>
        
      ) : (<>
        <Box sx={{ backgroundColor: "#DDF2FD", height: "300px", width: "95%", borderRadius: "20px", paddingTop: "5vh",paddingLeft:"10px" }}>
          <Typography mt={2} mb={2} variant="h5" sx={{ color: "#5272F2" }}>
            Hello, how can we help?
          </Typography>
          <Typography mt={2} mb={2} variant="body1" sx={{ color: "grey" }}>
            or choose a category to quickly find the help you need
          </Typography>
          <FormControl fullWidth sx={{ m: 1, display: "flex", alignItems: "center" }}>
            <OutlinedInput id="outlined-adornment-amount" placeholder="Ask a question..." startAdornment={<InputAdornment position="start"><Search /></InputAdornment>} sx={{ width: "30%", backgroundColor: "white" }} />
          </FormControl>
        </Box>
        <Box sx={{ margin: "20px 0px 20px 0px", paddingLeft: "20px" }}>
          <Grid container rowSpacing={2} columns={{ xs: 4, sm: 4, md: 12 }}>
            {cardData.map((data, index) => {
              return (
                <Grid item xs={4} sx={{ width: "400px" }} key={data.header}>
                  <CardActionArea  component="div" sx={{ borderStyle: "none", backgroundColor: "inherit" }}>
                    <Card  sx={{ width: "400px", height: "250px", boxShadow: "2" }}>
                      <CardContent onClick={() => handleCardClick(index)} sx={{ padding: "0px" }}>
                        <Typography variant="h6" sx={{ color: "grey", backgroundColor: "#F0F0F0", fontSize: "24px", alignItems: "center", width: "100%", height: "50px", paddingTop: "10px", paddingLeft: "20px", textAlign: "left" }}>
                          {data.icon} {data.header} ({data.items.length})
                        </Typography>
                        {data.items.map((query) => {
                          return (
                            <Typography variant="body2" mt={2} mb={2} sx={{ color: "grey", textAlign: "left", fontSize: "14px", padding: "0px 20px" }}>
                              <CircleOutlinedIcon fontSize="8px" /> {query}
                            </Typography>
                          );
                        })}
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </>
      
  )
 
};
</Box>)

}
export default CRM;
