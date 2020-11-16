import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
  
    heroSelect: {
        alignItems:"center"
      },
    textfield: {
        align:"center",
        width:"50%",
        left:"25%"
      }
  });

const CallForAction = () => {
    const classes = useStyles();
    const [city,setCity] = React.useState();
  
    return (
        <div>
            <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Why donate?
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Right now, people are in need of your donation. A simple action from you could save a life.
            </Typography>
            <div className={classes.heroSelect}>
            </div>
          </Container>
        </div>
        </div>
    );
  }
  
  export default CallForAction;