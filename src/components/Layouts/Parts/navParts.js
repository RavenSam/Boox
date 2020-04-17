import React from "react"
import { Link } from "react-router-dom"
import { List, ListItem, ListItemIcon, ListItemText, IconButton, InputBase } from "@material-ui/core"

import {
   Assignment as AssigIcon,
   Home as HomeIcon,
   Apps as AppsIcon,
   ContactMail as MailIcon,
   Search as SearchIcon,
} from "@material-ui/icons"

import Logo from "../../../images/logo.png"

export const menuList = [
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

export const menuItem = () => (
   <div className="menuItem">
      <div className="logoContainer">
         <img src={Logo} className="logoMenu" alt="Logo" />
      </div>

      <hr />

      <div className="search">
         <InputBase color="primary" className="input navInput" placeholder="Search" />
         <IconButton type="submit" className="searchIcon ">
            <SearchIcon />
         </IconButton>
      </div>

      <List>
         {menuList.map(({ listIcon, listText, listPath }, key) => (
            <ListItem key={key} button component={Link} to={listPath}>
               <ListItemIcon className="listItem">{listIcon}</ListItemIcon>
               <ListItemText className="listItem " primary={listText} />
            </ListItem>
         ))}
      </List>
   </div>
)
