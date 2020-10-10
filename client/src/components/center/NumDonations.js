import React from 'react';
import Link from '@material-ui/core/Link';
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

export default function NumDonations() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid className={classes.root} container spacing={4}>
        <Grid item xs={6} sm={3}>
        <Paper className={classes.paper} elevation={3}>
      <Title>Donations</Title>
      <Typography component="p" variant="h4">
        100
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
      </div>
      </Paper>
      </Grid>
      

      <Grid item item xs={6} sm={3}>
        <Paper className={classes.paper} elevation={3}>
        <Title>avg donation/day</Title>
        <Typography component="p" variant="h4">
          5
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          on 15 March, 2019
        </Typography>
        <div>
        </div>
        </Paper>
      </Grid>

    </Grid>
    </React.Fragment>
  );
}