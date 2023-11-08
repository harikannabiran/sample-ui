import React, { useState } from 'react';
import { Box,  Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Outlet, Link, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Home from './DashBoardPages/Home';
import CRM from './DashBoardPages/CRM';
import Economics from './DashBoardPages/Economics';
import Settings from './DashBoardPages/Settings';
import Meetings from './DashBoardPages/Meetings';
import Analytics from "./DashBoardPages/Clients";
import Help from './DashBoardPages/Help';
import Landing from './DashBoardPages/Landing';
import Email from "./DashBoardPages/Email";
import Chat from "./DashBoardPages/Chat";
import Calendar from "./DashBoardPages/Calendar";
import Pages from "./DashBoardPages/Pages";
import Roles from "./DashBoardPages/Roles";
import Dialog from "./DashBoardPages/Dialog";
import Invoice from "./DashBoardPages/Invoice";
import User from "./DashBoardPages/User";

const useStyles = makeStyles({
  item: {
    color:"grey",
    padding:"5px",
    height: "100%",
    marginLeft: "10px",
    textDecoration:"none",
    borderTopRightRadius:"100px",
    borderBottomRightRadius:"100px",
    textAlign: "left",
   
    '&:hover': {
      backgroundColor:" linear-gradient(90deg, rgba(49,162,249,1) 0%, rgba(49,162,249,1) 35%, rgba(38,77,201,1) 100%)",
     
    }, 
    
    
    "&:focus": {
      color:"white",
      background:" linear-gradient(90deg, rgba(49,162,249,1) 0%, rgba(49,162,249,1) 35%, rgba(38,77,201,1) 100%)",
      outline: "none",
    },
   
  },
  icon:{
    fontSize:"32px",
    color: 'inherit',
  },
  selected: {
    color:"white",
    backgroundColor: " linear-gradient(90deg, rgba(49,162,249,1) 0%, rgba(49,162,249,1) 35%, rgba(38,77,201,1) 100%)",
    '& $icon': {
      color: "white", 
    },
  },
   
});

function Sidebar() {
  const classes = useStyles();
  const location = useLocation();

  const sidebarItems = [
    { name: "Home", icon: <HomeOutlinedIcon fontSize='medium' />, path: '/dashboard/home' },
    { name: "CRM", icon: <MemoryOutlinedIcon fontSize='medium'/>, path: '/dashboard/crm' },
    { name: "eCommerce", icon: <MonetizationOnOutlinedIcon fontSize='medium' />, path: '/dashboard/eCommerce' },
    { name: "Settings", icon: <SettingsOutlinedIcon fontSize='medium' />, path: '/dashboard/settings' },
    { name: "Analytics", icon: <AnalyticsOutlinedIcon fontSize='medium'/>, path: '/dashboard/analytics' },
    { name: "Meetings", icon: <Groups2OutlinedIcon fontSize='medium' />, path: '/dashboard/meetings' },
    { name: "Help", icon: <HelpOutlineIcon fontSize='medium' />, path: '/dashboard/help' }
  ];
  const sidebarAppSection=[
    { name: "Email", icon: <EmailOutlinedIcon fontSize='medium' />, path: '/dashboard/email' },
    { name: "Chat", icon: <ChatBubbleOutlineOutlinedIcon fontSize='medium'/>, path: '/dashboard/chat' },
    { name: "Calendar", icon: <CalendarTodayOutlinedIcon fontSize='medium' />, path: '/dashboard/calendar' },
    { name: "Invoice", icon: <ContentPasteOutlinedIcon fontSize='medium' />, path: '/dashboard/invoice' },
    { name: "User", icon: <ContentCopyOutlinedIcon fontSize='medium' />, path: '/dashboard/user' },
    { name: "Roles & Permission", icon: <LockOpenOutlinedIcon fontSize='medium'/>, path: '/dashboard/roles-and-permission' },
    { name: "Pages", icon: <DescriptionOutlinedIcon fontSize='medium' />, path: '/dashboard/pages' },
    { name: "Dialog Examples", icon: <PersonOutlineOutlinedIcon fontSize='medium' />, path: '/dashboard/dialog-examples' },
  ]
  const currentPath = location.pathname;
  const [selectedItem, setSelectedItem] = useState(currentPath);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Box sx={{ display: "flex", flexGrow: 1, height: "848px" }}>
         <nav className={classes.sidebar} style={{width:"300px" }}>
      <List  >
        {sidebarItems.map((item, index) => (
          <ListItem
              className={`${classes.item} ${currentPath === item.path ? classes.selected : ''}`}
              key={item.name}
              component={Link}
              to={item.path}
            >
            <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
        <Divider sx={{marginTop:"10px",color:"grey",fontSize:"small"}} textAlign='left'>APPS & PAGES</Divider>
        {sidebarAppSection.map((item, index) => (
          <ListItem
              className={`${classes.item} ${currentPath === item.path ? classes.selected : ''}`}
              key={item.name}
              component={Link}
              to={item.path}
            >
            <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List> 
    </nav>

      <Box width="90%" height="100%" sx={{ overflow: "auto" }}>
        <Outlet />
        <Routes>
        <Route path='/' element={<Landing/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/ecommerce" element={<Economics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/help" element={<Help />} />
          <Route path="/email" element={<Email />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/roles-and-permission" element={<Roles />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/dialog-examples" element={<Dialog />} />
          <Route path="/user" element={<User />} />
          {/* Add other nested routes for your menu items */}
        </Routes>
      </Box>
    </Box>
  );
}

export default Sidebar;
