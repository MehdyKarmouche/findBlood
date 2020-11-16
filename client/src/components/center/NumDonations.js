import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Title from './Title';
import Grid from '@material-ui/core/Grid';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  root: {
    flexGrow:1
  },
  paper: {
    marginLeft:"20px",
    marginTop:"20px",
  }
});

const NumDonations = () => {
  const [total,setTotal] = useState()
  const [complete,setComplete] = useState()
  const date = new Date()
  async function fetchTotal(){
    const res = await fetch("http://localhost:4000/centers/stats/total")
    res
      .json()
      .then(res => setTotal(res));   
  }
  async function fetchCompletes(){
    const res = await fetch("http://localhost:4000/centers/stats/completed")
    res
      .json()
      .then(res => setComplete(res));   
  }

  useEffect(() => {
    fetchTotal();
    fetchCompletes();
  },[])
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid className={classes.root} container spacing={4}>
        <Grid item xs={6} sm={3}>
      <Paper className={classes.paper} elevation={3}>
        <Title>Number of Donations</Title>
        <Typography component="p" variant="h4">
          {total}
        </Typography>
      </Paper>
      </Grid>
      

      <Grid item item xs={6} sm={3}>
        <Paper className={classes.paper} elevation={3}>
          <Title>Completed Donations</Title>
          <Typography component="p" variant="h4">
            {complete}
          </Typography>
        </Paper>
      </Grid>

    </Grid>
    </React.Fragment>
  );
}
export default NumDonations;