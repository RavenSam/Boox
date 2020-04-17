import React, { useState } from "react"
import { AppBar, Toolbar, Drawer, IconButton, InputBase } from "@material-ui/core"
import { Menu as MenuIcon, Search as SearchIcon } from "@material-ui/icons"

// Styles
import "./css/navbar.css"
// Images
import Logo from "../../images/logo.png"
// Parts
import { menuItem } from "./Parts/navParts"

// ==================================================================
// Component
const Navbar = () => {
   const [state, setState] = useState({ drawerOpen: false })

   const toggleDrawer = (open) => setState({ drawerOpen: open })

   return (
      <AppBar className="Appbar">
         <Toolbar>
            <img src={Logo} className="logo" alt="Logo" />

            <div className="rightSide">
               <div className="search xs-d-none">
                  <InputBase color="primary" className="input" placeholder="Search" />
                  <IconButton type="submit" className="searchIcon ">
                     <SearchIcon />
                  </IconButton>
               </div>

               <IconButton className="menuButton" onClick={() => toggleDrawer(true)}>
                  <MenuIcon />
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
