//Write your missing code here
import {AppBar,Box,IconButton,Toolbar,Typography,
  } from "@mui/material";
  import React from "react";
  import { Link } from "react-router-dom";
  import { Home, Add } from "@mui/icons-material";
  
  const Navbar = () => {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Employee App
              </Typography>
              <IconButton color="inherit" component={Link} to="/">
              <Home />
            </IconButton>
            <IconButton color="white" component={Link} to="/add" sx={{backgroundColor:"white",width:30,height:30,borderRadius:0,ml:3}}>
              <Add />
            </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  };
  
  export default Navbar;
  