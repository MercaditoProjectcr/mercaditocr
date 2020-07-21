import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FeatureCard from '../cards/featurecard';
import * as img from '../../images';
import './home.style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const cardInfo = [
  {
    title: 'Buscar por categorias',
    image: img.Search,
    text:
      'lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel',
    action: 'Explorar',
  },
  {
    title: 'Mira lo que hay cerca tuyo',
    image: img.FindNear,
    text:
      'lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel',
    action: 'Ver',
  },
  {
    title: 'Contacta al vendedor',
    image: img.Contact,
    text:
      'lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel',
    action: 'Ir',
  },
];
const Features = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center" spacing={3} className="homeFeature">
        <Grid item xs md={8}>
          <Typography variant="h4" component="h4">
            ¿Que ofrecemos?
          </Typography>
        </Grid>
        <Grid item md={8}>
          <Grid container direction="row" spacing={3}>
              {cardInfo.map((item, index) => {
                return <Grid item md={4}><FeatureCard content={item} /></Grid> ;
              })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Features;
