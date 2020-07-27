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


const LastedPost = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
        <Grid item xs md={8}>
          <Typography variant="h4" component="h4">
            Lo ultimo en el mercadito... 
          </Typography>
        </Grid>
        <Grid item md={8}>

        </Grid>
      </Grid>
    </>
  );
};
export default LastedPost;
