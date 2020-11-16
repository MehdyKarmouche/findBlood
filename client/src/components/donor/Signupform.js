import React, { useState }  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import {BrowserRouter as Router, Route, Redirect} from  'react-router-dom'
import cities from '../cities'
import bloodtypes from '../bloodtypes'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUpForm = () => {
  const classes = useStyles()
  const [user,setUser] = useState({
    email:"",
    password:"",
    password2:"",
    city:"",
    bloodType:"",
    signedIn:false
  })
  const [city,setCity] = useState()
  const [blood,setBlood] = useState()
  const handleChangeBlood = (event) => {
    const selectedBlood = event.target.value;
    setBlood(selectedBlood)
    setUser({ ...user, bloodType: selectedBlood })
  }
  const handleChangeCity = (event) => {
    const selectedCity = event.target.value;
    setCity(selectedCity)
    setUser({ ...user, city: selectedCity })

  }

  

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:4000/signup/donor', {
      method: 'POST',
      body: JSON.stringify({ user }),
      headers: { 'Content-Type': 'application/json'  },
    })
      .then(res =>{res.json().then((result)=>{
        if(result.msg!="Email already exists"){
          setUser({...user,signedIn:true})
        }
        else
          console.log("can't login")
      })})
      
  }
  if(user.signedIn)
    return <Redirect  exact from="/donor/signup" to="/donor/signin" />

  return (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up for Donors
        </Typography>
        <form onSubmit={handleSubmit}   className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email[email]"
                autoComplete="email"
                onChange={e => setUser({ ...user, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password[password]"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setUser({ ...user, password: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2[password2]"
                label="Re-type password"
                type="password"
                id="password2"
                autoComplete="current-password"
                onChange={e => setUser({ ...user, password2: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                    className={classes.textfield}
                    select
                    label="Select your city"
                    value={cities.city}
                    onChange={handleChangeCity}
                    variant="outlined"
                    fullWidth
                >
                    {cities.map((option) => (
                        <MenuItem key={option.id} value={option.city}>
                        {option.city}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                    className={classes.textfield}
                    select
                    label="Select your blood type"
                    value={bloodtypes.bloodtype}
                    onChange={handleChangeBlood}
                    variant="outlined"
                    fullWidth
                >
                    {bloodtypes.map((option) => (
                        <MenuItem key={option.id} value={option.bloodtype}>
                        {option.bloodtype}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/donor/signin" variant="body2" style={{ textDecoration: 'none' }}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default SignUpForm;