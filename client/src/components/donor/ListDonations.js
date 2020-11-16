import React , { useState, useEffect }  from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import cities from '../cities'
const useStyles = makeStyles((theme)=>({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  textfield: {
    align:"center",
    width:"50%",
    left:"25%",
    marginBottom:"10px"
  }

}));




const ListDonations = () => {

  const [donations, setDonations] = useState([]);
  const [city,setCity] = React.useState();
  const handleDonate = (donationId) => {
    const jwtToken = localStorage.getItem("jwtToken")
    const toSend = {
      "jwtToken": jwtToken,
      donationId: donationId
    }
    fetch('http://localhost:4000/donor/interested', {
      method: 'POST',
      body: JSON.stringify({toSend}),
      headers: { 'Content-Type': 'application/json' },
    })
  }
  const handleChange = (event) =>{
        const selectedCity = event.target.value;
        setCity(selectedCity)
        
        
    }
  async function fetchData(){
    const res = await fetch("http://localhost:4000/donor/donations")
    
    res
      .json()
      .then(res => setDonations(res));
      console.log(res);


  }
  
  useEffect(() => {
    fetchData();
    
  },[]);
    const classes = useStyles();
    return(
        <div>
            <Container className={classes.cardGrid} maxWidth="md">
            <form className={classes.form} >
                <TextField
                    className={classes.textfield}
                    select
                    label="Select city"
                    value={cities.city}
                    onChange={handleChange}
                    variant="outlined"
                >
                    {cities.map((option) => (
                        <MenuItem key={option.id} value={option.city}>
                        {option.city}
                        </MenuItem>
                    ))}
                </TextField>
              </form>
          {/* End hero unit */}
          <Grid container spacing={4}>
           
            {donations.map((donation) => (donation.city === city ) ? ( 
              <Grid item key={donation._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={process.env.PUBLIC_URL + '/donationImage2.jpg'}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                    In need of: "{donation.bloodType}" blood type
                    </Typography>
                    <Typography>
                      Importance: {donation.importance}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => handleDonate(donation._id)} variant="contained" size="small" color="primary">
                      Donate
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ):(<h1></h1>)
            )}
          </Grid>
        </Container>
        </div>
    )
}
export default ListDonations;