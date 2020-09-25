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
    title: 'Jose Ch.',
    image: img.Jose,
    text:
      'Developer',
    action: 'Ver perfil',
  },
  {
    title: 'Rafa S.',
    image: img.Rafa,
    text:
      'Developer',
    action: 'Ver perfil',
  },
  {
    title: 'Eduardo D.',
    image: img.Eduardo,
    text:'Developer',
    action: 'Ver perfil',
  },
];
const Team = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center" spacing={3}  className="homeFeature">
        <Grid item xs={10} md={8}>
          <Typography variant="h4" component="h4">
            Conoce al equipo detras de Mercadito.cr
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container direction="row" spacing={3}>
              {cardInfo.map((item, index) => {
                return <Grid key={index} item xs={12} md={4}><FeatureCard content={item}  /></Grid> ;
              })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Team;
