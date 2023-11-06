import React, { useState } from 'react'
import { Box, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Home from './DashBoardPages/Home';
import CRM from "./DashBoardPages/CRM"
import Clients from './DashBoardPages/Clients';
import Economics from './DashBoardPages/Economics';
import Meetings from './DashBoardPages/Meetings';
import Settings from './DashBoardPages/Settings';
import Help from './DashBoardPages/Help';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from 'react-router-dom';
import ConstructionIcon from '@mui/icons-material/Construction';
import GroupsIcon from '@mui/icons-material/Groups';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
const useStyles=makeStyles({
    item:{
        margin:"0px",
        fontSize:"64px",
        textAlign:"left",
       
        },  
})

function Sidebar() {
    const classes=useStyles()
    const history = useHistory()
    const location = useLocation();
    const sidebarItems=[
        ["Home",<HomeIcon color='grey'/>],
        ["CRM",<MemoryOutlinedIcon/>],
        ["Economics",<MonetizationOnOutlinedIcon/>],
        ["Settings",<ConstructionIcon/>],
        ["Meetings",<GroupsIcon/>],
        ["Analytics",<AnalyticsIcon/>],
        ["Help",<HelpOutlineIcon/>]
    ]
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] =useState(null);
  
    const currentPath = location.pathname;
  const initialActiveTree = sidebarItems.find(([node, path]) => currentPath.includes(node.toLowerCase()))[0];
  

  const [activeTree, setActiveTree] = useState(initialActiveTree);
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleSelect=(event,selectedTree)=>{
      const selectedNode = sidebarItems[selectedTree][0];
      setActiveTree(selectedNode);
      history.push(`/dashboard/${selectedNode.toLowerCase()}`);
    }
    const ShowComponent=(props)=>{

      const {children,activeTree,selectedTree}=props
     
      return ( <div hidden={activeTree!== selectedTree}>
          {activeTree === selectedTree && <Box mx={2} >{children}</Box>}
      
      </div>
    )}
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
    <Box sx={{display:"flex",flexGrow:1,height:"848px"}}>
      <Box sx={{
        width:"300px",
        height:"90vh", 
        background:"inherit",
        margin:"0px", 
        justifyContent:"space-between",
        display:"flex",
        flexDirection:"column"}}>
        
        
          <main style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            marginTop:"50px"}}>
            <section style={{maxWidth:"300px"}}>
              <Box sx={{
                maxWidth:"100%", 
                minHeight: 180, 
                flexGrow: 1}}>
                  <TreeView
                  
                      sx={{width:"100%"}}
                      defaultCollapseIcon={<ExpandMoreIcon />}
                      defaultExpandIcon={<ChevronRightIcon />}
                      onNodeSelect={handleSelect}
                      disabledItems
                  >
                    {sidebarItems.map((item,index)=> <TreeItem  className={classes.item} icon={item[1]}
                      sx={{height:"42px",marginLeft:"10px",
                      
                      ".MuiTreeItem-label":{
                        fontSize:"24px",
                        color:"grey"
                      },
                      ".MuiTreeItem-iconContainer":{
                        color:"grey"
                      },
                      ".Mui-selected":{
                        backgroundColor:"black",
                     
                      },
                      ".MuiTreeItem-content":{
                        padding:"0px 10px"
                      },
                      ".MuiTreeItem-group":{
                        backgroundColor:"black",
                      },
                      ".MuiTreeItem-root &:hover":{
                        backgroundColor:"black",
                      }
                      
                      
                      }}
                      nodeId={index} 
                      label={item[0]}/>)}
                  </TreeView>
              </Box>
            </section>
          </main>
          
        </Box>
   
      <Box width="90%" height="100%" sx={{overflow:"auto"}}  >
              <ShowComponent activeTree={activeTree} selectedTree="Home"><Home /></ShowComponent>
              <ShowComponent activeTree={activeTree} selectedTree="CRM"><CRM /></ShowComponent>
              <ShowComponent activeTree={activeTree} selectedTree="Analytics"><Clients /></ShowComponent>
              <ShowComponent activeTree={activeTree} selectedTree="Economics"><Economics/></ShowComponent>
              <ShowComponent activeTree={activeTree} selectedTree="Meetings"><Meetings/></ShowComponent>
              <ShowComponent activeTree={activeTree} selectedTree="Settings"><Settings/></ShowComponent>
              <ShowComponent activeTree={activeTree} selectedTree="Help"><Help/></ShowComponent>
              
        </Box>
       
    </Box>
  )
}
export default Sidebar