import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
   AppBar,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   Toolbar,
   Drawer,
   Typography,
   IconButton,
   InputBase,
} from "@material-ui/core"
import {
   Menu as MenuIcon,
   Assignment as AssigIcon,
   Home as HomeIcon,
   Apps as AppsIcon,
   ContactMail as MailIcon,
   Search as SearchIcon,
   MoreVert as MoreVertIcon,
} from "@material-ui/icons"

// Styles
import "./css/navbar.css"

const menuList = [
   {
      listIcon: <HomeIcon />,
      listText: "Home",
      listPath: "/",
   },
   {
      listIcon: <AssigIcon />,
      listText: "Resume",
      listPath: "/resume",
   },
   {
      listIcon: <AppsIcon />,
      listText: "Portfolio",
      listPath: "/portfolio",
   },
   {
      listIcon: <MailIcon />,
      listText: "Contact",
      listPath: "/contact",
   },
]

// ==================================================================
// Component
const Navbar = () => {
   const [state, setState] = useState({ drawerOpen: false })

   const toggleDrawer = (open) => setState({ drawerOpen: open })

   const menuItem = () => (
      <List className="menuItem">
         {menuList.map(({ listIcon, listText, listPath }, key) => (
            <ListItem key={key} button component={Link} to={listPath}>
               <ListItemIcon className="listItem">{listIcon}</ListItemIcon>
               <ListItemText className="listItem " primary={listText} />
            </ListItem>
         ))}
      </List>
   )

   return (
      <AppBar className="Appbar">
         <Toolbar>
            <IconButton className="menuButton" onClick={() => toggleDrawer(true)}>
               <MenuIcon />
            </IconButton>
            <Typography className="xs-d-none" variant="h6" color="inherit">
               Logo
            </Typography>

            <div className="rightSide">
               <div className="search">
                  <InputBase color="primary" className="input" placeholder="Search" />
                  <IconButton type="submit" className="searchIcon ">
                     <SearchIcon />
                  </IconButton>
               </div>

               <IconButton className="appsButton">
                  <MoreVertIcon />
               </IconButton>
            </div>

            <Drawer className="drawer" anchor="left" open={state.drawerOpen} onClose={() => toggleDrawer(false)}>
               {menuItem()}
            </Drawer>
         </Toolbar>
      </AppBar>
   )
}

export default Navbar
