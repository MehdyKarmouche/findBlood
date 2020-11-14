import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import { TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menu: {
      width:"100%",
      marginBottom:"10px",
      marginTop:"10px"
    },
    body: {

    }
  }));

const EditDonation = ({donation,handleChangeEditBlood, handleChangeImpEditImp, bloodtypes, importances }) => {

    const classes = useStyles()
    return (
        <div className={classes.body}>
      <Typography color="primary">Edit donation</Typography>
      <form >
      <TextField
            className={classes.menu}
            select
            label="Select blood type"
            name="bloodType"
            value={donation.bloodtype}
            onChange={handleChangeEditBlood}
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
             onChange={handleChangeImpEditImp}
             helperText="Please select the Importance"
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
        Edit the bloodtype and the importance of the donation you want to create
      </p>
    </div>
    )
}

export default EditDonation
