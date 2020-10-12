import React from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme)=>{
    

});

const cards = [
    {
        id:1,
        address:"hay zayd",
        phone:"05364892384",
    },
    {
        id:2,
        address:"hay zayd",
        phone:"05364892384",
    },
    {
        id:3,
        address:"hay zayd",
        phone:"05364892384",
    },
    {
        id:4,
        address:"hay zayd",
        phone:"05364892384",
    },
    {
        id:5,
        address:"hay zayd",
        phone:"05364892384",
    },
    {
        id:6,
        address:"hay zayd",
        phone:"05364892384",
    },
];

function ListDonations(){
    const classes = useStyles();
    return(
        <div>
            <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.address}
                    </Typography>
                    <Typography>
                      {card.phone}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="small" color="primary">
                      Donate
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </div>
    )
}
export default ListDonations;