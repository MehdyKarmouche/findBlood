import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Tabs, Tab,Toolbar,Typography, Button,IconButton,MenuIcon} from '@material-ui/core'
/*import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';*/

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
  }
}));


function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.rootStyles}>
      <AppBar position="static" className={classes.navbarStyles}>
        <Typography variant="h6" className={classes.typographyStyles} >
          FindBlood
        </Typography>
        
      </AppBar>
    </div>
    
  );
}

export default Navbar;