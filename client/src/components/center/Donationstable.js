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
import MenuItem from '@material-ui/core/MenuItem';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Title from './Title';
import { TextField, Typography } from '@material-ui/core';

const bloodtypes = [
  {
    bloodtype: 'A+',
    id:1
  },
  {
    bloodtype: 'A-',
    id:2
  },
  {
    bloodtype: 'O+',
    id:3
  },
  {
    bloodtype: 'O-',
    id:4
  },
  {
    bloodtype: 'B+',
    id:5
  },
  {
    bloodtype: 'B-',
    id:6
  },
  {
    bloodtype: 'AB+',
    id:7
  },
  {
    bloodtype: 'AB-',
    id:8
  },
  
];
const importances = [
  {
    id:9,
    importance:"High"
  },
  {
    id:10,
    importance:"Mid",
  },
  {
    id:11,
    importance:"Low"
  }
];

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  paper : {
    
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
  menu: {
    width:"100%",
    marginBottom:"10px",
    marginTop:"10px"
  },
  modalWrapPpl: {
    display: 'flex',
    flexDirection: 'column',
    alignContent:"center",
    alignItems: 'center',
    width:"100%"
  }

}));

export default function Dashboard() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openPpl, setOpenPpl] = useState(false);
  const [bloodtype,setBloodtype] = useState('O+')
  const [importance,setImportance] = useState('High')
  const [bloodtypeEdit,setBloodtypeEdit] = useState('O+')
  const [importanceEdit,setImportanceEdit] = useState('High')
  const [donations, setDonations] = useState([])
  const [donation, setDonation] = useState({
    id:"",
    bloodType:"",
    importance:""
  })

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenEdit = (clickedId) => {
    setOpenEdit(true);
    setDonation({...donation,id:clickedId})
    console.log(clickedId);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false)
  };

  const handleOpenPpl = () => {
    setOpenPpl(true);
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

  const handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:4000/centers/donation', {
      method: 'POST',
      body: JSON.stringify({ donation }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => console.log(res))
  }

  const handleSubmitEdit = e => {
    e.preventDefault()
    fetch('http://localhost:4000/centers/donation', {
      method: 'PUT',
      body: JSON.stringify({ donation }),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => console.log(res))
  }

  async function fetchData(){
    const res = await fetch("http://localhost:4000/centers/donations")
    res
      .json()
      .then(res => setDonations(res));
      
  }
  useEffect(() => {
    fetchData();
  },[]);
  const body = (
    <div onSubmit={handleSubmit} className={classes.body}>
      <Typography color="primary">Add donation</Typography>
      <form noValidate>
      <TextField
           className={classes.menu}
           select
           label="Select blood type"
           value={bloodtype}
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
            value={importance}
            onChange={handleChangeImp}
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
        Select the bloodtype and the importance of the donation you want to create
      </p>
    </div>
  );

  const bodyEdit = (
    <div className={classes.body}>
      <Typography color="primary">Edit donation</Typography>
      <form >
      <TextField
            className={classes.menu}
            select
            label="Select blood type"
            name="bloodType"
            value={bloodtypeEdit}
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
             value={importanceEdit}
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
  );

  const bodyPpl = (
    <div>
      <Typography color="primary">Interested Donors</Typography>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            
            <TableCell>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {donations.map((donation) => (
            <TableRow key={donation.id}>
              <TableCell>{donation. peopleInterested}</TableCell>
              <TableCell>{donation. peopleInterested}</TableCell>
              <TableCell>{donation. peopleInterested}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <React.Fragment>
      <div className={classes.wrap}>
      <Title>Recent Donations</Title>
      <Button onClick={handleOpen} variant="contained" size="medium" color="secondary">Add Donation  <Fab size="small" color="primary" aria-label="add" className={classes.margin}>
        <AddIcon />
        </Fab>
      </Button>
     

      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>BloodType</TableCell>
            <TableCell>Importance</TableCell>
            <TableCell>Posted at</TableCell>
            <TableCell align="right">Interested ppl</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {donations.map((donation) => (
            <TableRow key={donation._id} id={donation._id}>
              <TableCell>{donation._id}</TableCell>
              <TableCell>{donation.bloodType}</TableCell>
              <TableCell>{donation.importance}</TableCell>
              <TableCell>{donation.postedAt}</TableCell>
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
            {body}
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
            {bodyEdit}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseEdit} color="primary">
              Cancel
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