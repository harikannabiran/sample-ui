import React, { useState } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Outlet, Link, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';
import GroupsIcon from '@mui/icons-material/Groups';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import Home from './DashBoardPages/Home';
import CRM from './DashBoardPages/CRM';
import Economics from './DashBoardPages/Economics';
import Settings from './DashBoardPages/Settings';
import Meetings from './DashBoardPages/Meetings';
import Analytics from '@mui/icons-material/Analytics';
import Help from './DashBoardPages/Help';

const useStyles = makeStyles({
  item: {
    margin: "0px",
    fontSize: "64px",
    textAlign: "left",
  },
});

function Sidebar() {
  const classes = useStyles();
  const location = useLocation();

  const sidebarItems = [
    { name: "Home", icon: <HomeIcon color='grey' />, path: '/dashboard/home' },
    { name: "CRM", icon: <MemoryOutlinedIcon />, path: '/dashboard/crm' },
    { name: "Economics", icon: <MonetizationOnOutlinedIcon />, path: '/dashboard/economics' },
    { name: "Settings", icon: <ConstructionIcon />, path: '/dashboard/settings' },
    { name: "Meetings", icon: <GroupsIcon />, path: '/dashboard/meetings' },
    { name: "Analytics", icon: <AnalyticsIcon />, path: '/dashboard/analytics' },
    { name: "Help", icon: <HelpOutlineIcon />, path: '/dashboard/help' }
  ];

  const currentPath = location.pathname;

  return (
    <Box sx={{ display: "flex", flexGrow: 1, height: "848px" }}>
      <Box sx={{
        width: "300px",
        height: "90vh",
        background: "inherit",
        margin: "0px",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column"
      }}>
        <main style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: "50px"
        }}>
          <section style={{ maxWidth: "300px" }}>
            <Box sx={{
              maxWidth: "100%",
              minHeight: 180,
              flexGrow: 1
            }}>
              <TreeView
                sx={{ width: "100%" }}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
              >
                {sidebarItems.map((item, index) => (
                  <TreeItem className={classes.item} icon={item.icon}
                    sx={{
                      height: "42px",
                      marginLeft: "10px",
                      textDecoration:"none",
                      ".MuiTreeItem-label": {
                        fontSize: "24px",
                        color: "grey"
                      },
                      ".MuiTreeItem-iconContainer": {
                        color: "grey"
                      },
                      ".Mui-selected": {
                        backgroundColor: "black",
                      },
                      ".MuiTreeItem-content": {
                        padding: "0px 10px"
                      },
                      ".MuiTreeItem-group": {
                        backgroundColor: "black",
                      },
                      ".MuiTreeItem-root &:hover": {
                        backgroundColor: "black",
                      }
                    }}
                    nodeId={index}
                    label={<Link to={item.path} style={{textDecoration:"none"}}>{item.name}</Link>}
                  />
                ))}
              </TreeView>
            </Box>
          </section>
        </main>
      </Box>

      <Box width="90%" height="100%" sx={{ overflow: "auto" }}>
        <Outlet />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/economics" element={<Economics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/help" element={<Help />} />
          {/* Add other nested routes for your menu items */}
        </Routes>
      </Box>
    </Box>
  );
}

export default Sidebar;
