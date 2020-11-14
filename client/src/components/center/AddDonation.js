import React, {useState} from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import { TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menu: {
      width:"100%",
      marginBottom:"10px",
      marginTop:"10px"
    },
  }));


const AddDonation = ({handleSubmit, handleChangeImp,handleChangeBlood, donation, importances, bloodtypes}) => {
    
    const classes = useStyles()
  
    return (
        <div onSubmit={handleSubmit} className={classes.body}>
      <Typography color="primary">Add donation</Typography>
      <form noValidate>
      <TextField
           className={classes.menu}
           select
           label="Select blood type"
           value={donation.bloodtype}
           name="bloodType"
           onChange={handleChangeBlood}
           variant="outlined"
           required
          >
            {bloodtypes.map((option) => (
            <MenuItem key={option.id} value={option.bloodtype}>
              {option.bloodtype}
            </MenuItem>
          ))}
          </TextField>
          <TextField
            className={classes.menu}
            select
            label="Select importance"
            name="importance"
            value={donation.importance}
            onChange={handleChangeImp}
            variant="outlined"
            required
            
          >
            {importances.map((option) => (
            <MenuItem key={option.id} value={option.importance}>
              {option.importance}
            </MenuItem>
          ))}

          </TextField>
      </form>
      <p id="simple-modal-description">
        Select the bloodtype and the importance of the donation you want to create
      </p>
    </div>
    )
}

export default AddDonation
