import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Title from '.././Title';
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
        <Grid item xs={6}>
        <Paper className={classes.paper} elevation={3}>
      <Title>Completed donations</Title>
      <h2>
        $3,024.00
      </h2>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
      </div>
      </Paper>
      </Grid>
      

      <Grid item item xs={6}>
        <Paper className={classes.paper} elevation={3}>
        <Title>Completed donations</Title>
        <h2>
          $3,024.00
        </h2>
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