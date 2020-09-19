import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';


const useStyles = makeStyles(() => ({
    root: {
        padding:"0",
        
    },

    containerStyles: {
      padding: 0,
      display:"block"
    
    },

    typographyStyles: {
        textAlign: "center",
        height: '50vh',
        
    },
    title:{
        position:"relative",
        top:"30%",
        display:"block"
    },
    buttonColumn:{
        display:"block"
    },
    button: {
        color:"white",
        backgroundColor:"#3f51b5",
        float:"right",
    },
    buttonLeft: {
        color:"white",
        backgroundColor:"#3f51b5",
        
    },
    h1:{
        fontSize:"50px"
    }
    
    
    
  }));

function HomeContent() {

  const classes = useStyles();
  return (
    <React.Fragment>
    <div className={classes.root}>
      <Container className={classes.containerStyles} >
        <Typography className={classes.typographyStyles} component="div">
            <div className={classes.title}>
                <h1 className={classes.h1}>Donate Your Blood.  Save Lifes.</h1>
                <p className={classes.p}>This is an app that allows blood centers to notify potential donors about blood needs. </p>
            </div>
        </Typography>
      </Container>
      
      
    </div>
    <Container>
    <Typography>
    <Grid className={classes.Grid} container spacing={3}>
            <Grid  item xs={6}>
                <Button className={classes.button} display="inline" variant="contained" color="secondary"  size="large">
                    Center
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button className={classes.buttonLeft} display="inline" variant="contained" color="secondary" size="large">
                    Donor
                </Button>
            </Grid>
        </Grid>
    </Typography>
    </Container>
    
    

    
    </React.Fragment>
    
  );
}

export default HomeContent;
