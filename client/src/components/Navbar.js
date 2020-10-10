import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Tabs, Tab,Toolbar,Typography, Button,IconButton,MenuIcon} from '@material-ui/core'
import {BrowserRouter as Router, Route, Link} from  'react-router-dom'


const useStyles = makeStyles(() => ({
  rootStyles: {
    flexGrow: 1,
    margin:"0"
    
  },
  typographyStyles: {
    flexGrow: 1,
    margin: 15,
    paddingLeft:80
  },
  navbarStyles: {
    height: 65,
    background: ""
  },
  logo: {
    color:"white",
    textDecoration:"none"
  }
}));


function Navbar() {
  const classes = useStyles();

  return (
    
      <div className={classes.rootStyles}>
        <AppBar position="static" className={classes.navbarStyles}>
          <Typography variant="h6" className={classes.typographyStyles} >
            <Link to="/" className={classes.logo}>
            FindBlood
            </Link>
            
          </Typography>
          
        </AppBar>
      </div>
    
    
  );
}

export default Navbar;