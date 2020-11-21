import React, {useState, useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import VisibilityIcon from '@material-ui/icons/Visibility';
import Title from './Title';
import { Typography } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddDonation from './AddDonation'
import EditDonation from './EditDonation'
import bloodtypes from '../bloodtypes'
import importances from '../importances'
import statuses from '../statuses'

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  titleModal: {
    color:"primary"
  },
  wrap : {
    marginTop:"20px",
    marginLeft:"20px"
  },
  margin:{
    marginLeft:"10px"
  },
  modalWrap: {
    
    display: 'flex',
    flexDirection: 'column',
    alignContent:"center",
    alignItems: 'center',
  },
  modalWrapPpl: {
    display: 'flex',
    flexDirection: 'column',
    alignContent:"center",
    alignItems: 'center',
    width:"100%"
  }

}));

const Dashboard = () => {

  
  const classes = useStyles()
  const token = localStorage.getItem("jwtToken")
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openPpl, setOpenPpl] = useState(false)

  const [bloodtype,setBloodtype] = useState('O+')
  const [importance,setImportance] = useState('High')

  const [bloodtypeEdit,setBloodtypeEdit] = useState('O+')
  const [importanceEdit,setImportanceEdit] = useState('High')

  const [city,setCity] = React.useState()
  const [clicked,setClicked] = useState()
  
  const [status,setStatus] = useState(false)
  const [donations, setDonations] = useState([])
  const [donation, setDonation] = useState({
    owner:localStorage.getItem("jwtToken"),
    city:"",
    id:"",
    bloodType:"",
    importance:"",
    isCompleted:Boolean
  })
  const handleChangeCity = (event) => {
    setCity(event.target.value)
    setDonation({...donation, city:event.target.value})
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenEdit = (clickedId) => {
    setOpenEdit(true);
    setDonation({...donation,id:clickedId})
    
  };

 

  const handleCloseEdit = () => {
    setOpenEdit(false)
  };

  const handleCloseEditDel = () => {
    setOpenEdit(false)
  };

  const handleOpenPpl = (clickedId) => {
    setOpenPpl(true);
    setClicked(clickedId)
  };

  const handleClosePpl = () => {
    setOpenPpl(false)
  };


  const handleChangeBlood = (event) => {
    setBloodtype(event.target.value);
    setDonation({...donation, bloodType:event.target.value})

  };

  const handleChangeImp = (event) => {
    setImportance(event.target.value);
    setDonation({...donation, importance:event.target.value})
  };

  const handleChangeEditBlood = (event) => {
    setBloodtypeEdit(event.target.value);
    setDonation({...donation, bloodType:event.target.value})
  };

  const handleChangeImpEditImp = (event) => {
    setImportanceEdit(event.target.value);
    setDonation({...donation, importance:event.target.value})
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value)
    if(event.target.value === 'Completed'){
      setDonation({...donation, isCompleted:true})
    }
    else
      setDonation({...donation, isCompleted:false})

  }

  const handleSubmit = e => {
    const jwtToken = localStorage.getItem("jwtToken");
    e.preventDefault()
    fetch('http://localhost:4000/centers/donation', {
      method: 'POST',
      body: JSON.stringify({ donation }),
      headers: { 'Content-Type': 'application/json', 'Authorization':jwtToken },
    })
      .then(setDonation({donation})).then(handleClose)
  }

  const handleDelete = e => {
    e.preventDefault()
    fetch('http://localhost:4000/centers/donation', {
      method: 'DELETE',
      body: JSON.stringify({ donation }),
      headers: { 'Content-Type': 'application/json' },
    }).then(setDonation({donation})).then(handleCloseEdit)
  }

  const handleSubmitEdit = e => {
    
    e.preventDefault()
    fetch('http://localhost:4000/centers/donation', {
      method: 'PUT',
      body: JSON.stringify({ donation }),
      headers: { 'Content-Type': 'application/json' },
    }).then(setDonation({donation})).then(handleCloseEdit)
  }

  async function fetchData(){
    const res = await fetch("http://localhost:4000/centers/donations")
    res
      .json()
      .then(res => setDonations(res));
      
  }
  
  useEffect(() => {
    fetchData();
  },[donation])
  
  const bodyPpl = (
    <div>
      <Typography color="primary">Interested Donors</Typography>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID of potential Donor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {donations.map((donation) => (donation.id == clicked) ? (
            <TableRow key={donation._id} id={donation._id}>
              <TableCell>{donation.peopleInterested}</TableCell>
            </TableRow>
          ) : (<h1></h1>))}
        </TableBody>
      </Table>
    </div>
  )

  return (
    <React.Fragment>
      <div className={classes.wrap}>
      <Title>Recent Donations</Title>
      <Button onClick={handleOpen} variant="contained" size="medium" color="secondary">Add Donation  
        <AddIcon />
     
      </Button>
     

      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            
            <TableCell><strong>BloodType</strong></TableCell>
            <TableCell><strong>Importance</strong></TableCell>
            <TableCell><strong>Posted at</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
            <TableCell><strong>City</strong></TableCell>
            <TableCell align="right"><strong>Interested ppl</strong></TableCell>
            <TableCell><strong>Edit</strong></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {donations.map((donation) => (
            <TableRow key={donation._id} id={donation._id}>
              <TableCell>{donation.bloodType}</TableCell>
              <TableCell>{donation.importance}</TableCell>
              <TableCell>{donation.postedAt}</TableCell>
              <TableCell>{
                donation.isCompleted ? <CheckBoxIcon color="primary"/> : <HighlightOffIcon color="secondary"/>
              }</TableCell>
              <TableCell>{donation.city}</TableCell>
              <TableCell align="right"><Button onClick={() => handleOpenPpl(donation._id)} variant="outlined" color="secondary"><VisibilityIcon></VisibilityIcon></Button></TableCell>
              <TableCell><Button onClick={() => handleOpenEdit(donation._id)} variant="outlined" color="secondary"><EditIcon></EditIcon></Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more donations
        </Link>
      </div>
      </div>
      <div className={classes.modalWrap}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <DialogContent>
            <AddDonation handleChangeCity={handleChangeCity} handleSubmit={handleSubmit} handleChangeImp={handleChangeImp
            } handleChangeBlood={handleChangeBlood} donation={donation} importances={importances} bloodtypes={bloodtypes}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={handleSubmit} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      

      <div className={classes.modalWrap}>
        <Dialog
          open={openEdit}
          onClose={handleCloseEdit}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <DialogContent>
            <EditDonation donation={donation}
            
            statuses = {statuses}
             handleChangeEditBlood={handleChangeEditBlood}
             handleChangeStatus={handleChangeStatus}
             handleChangeImpEditImp={handleChangeImpEditImp}
             bloodtypes={bloodtypes}
             importances={importances}
             />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDelete} color="secondary">
              Delete Donation
            </Button>
            
            <Button type="Submit" onClick={handleSubmitEdit} color="primary">
              Confirm change
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div className={classes.modalWrapPpl}>
        <Dialog
          open={openPpl}
          onClose={handleClosePpl}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <DialogContent>
            {bodyPpl}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosePpl} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      

      
    </React.Fragment>
  );
}

export default Dashboard;