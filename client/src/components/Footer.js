import { Typography} from '@material-ui/core';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
const useStyles = makeStyles((theme) => ({
  footer: {
    bottom:0,
    marginTop:"150px"
  }
}));

function Footer() {
  const classes = useStyles();
    return (
        <Box mt={5} className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          www.Findblood.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </Box>
    );
  }
export default Footer;