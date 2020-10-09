import React from 'react';
import Grid from '@material-ui/core/Grid';
import Donationstable from './Donationstable';
import NumDonations from './NumDonations';
import Navbar from '../../Navbar';
import {BrowserRouter as Router, Route} from  'react-router-dom'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        
        
    },
    NumDonations: {
        
    },
    content: {
    }
    
    
    
  }));
function Home() {
  const classes = useStyles();
  return (
    <div className="root">
        <Navbar />
        <div className={classes.content}>
                    <NumDonations/>
           
        <Donationstable/>
        </div>
    </div>
  );
}

export default Home;
