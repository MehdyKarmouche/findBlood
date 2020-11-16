import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import cities from '../cities'

const useStyles = makeStyles({
    heroContent: {
        
    },
    heroSelect: {
        alignItems:"center"
      },
      form: {
        
        
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

    const handleChange = (event) =>{
        setCity(event.target.value)
    }
  
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
             <form className={classes.form} >
                <TextField
                    className={classes.textfield}
                    select
                    label="Change city"
                    value={city}
                    onChange={handleChange}
                    variant="outlined"
                >
                    {cities.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                        {option.city}
                        </MenuItem>
                    ))}
                </TextField>
              </form>
            </div>
          </Container>
        </div>
        </div>
    );
  }
  
  export default CallForAction;