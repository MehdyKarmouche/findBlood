import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


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
        marginTop:"100px"
    },
    title:{
        position:"relative",
        display:"block",
        top:"25%"
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
    },
    wrapper: {
        width:"100%"
    }
    
    
    
  }));

const HomeContent = () => {

  const classes = useStyles();
  return (
    <React.Fragment>
    <div className={classes.root}>
      <Container className={classes.containerStyles} >
        <Typography className={classes.typographyStyles} component="div">
            <div className={classes.title}>
                <h1 className={classes.h1}>Donate Your Blood.  Save Lives.</h1>
                <p className={classes.p}>This is an app that allows blood centers to notify potential donors about blood needs. </p>
            </div>
        </Typography>
      </Container>
      
      
    </div>
    <Container className={classes.wrapper}>
    <Typography>
    <Grid className={classes.Grid} container spacing={3}>
            <Grid  item xs={6}>
                <Link to="/center/signin" style={{ textDecoration: 'none' }}>
                    <Button className={classes.button} display="inline" variant="contained" color="secondary"  size="large">
                        Center
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={6}>
                <Link to="/donor/signin" style={{ textDecoration: 'none' }}>
                    <Button href className={classes.buttonLeft} display="inline" variant="contained" color="secondary" size="large">
                        Donor
                    </Button>
                </Link>
            </Grid>
        </Grid>
    </Typography>

    </Container>
    
    

    
    </React.Fragment>
    
  );
}

export default HomeContent;
