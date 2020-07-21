import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
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

const Welcome = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" className="welcomeContainer">
        <Grid container direction="column" justify="center" alignItems="center" className="welcomeElements">
          <Grid item xs md={8}>
            <Typography variant="h1" component="h2">
              Mercadito.cr
            </Typography>
            <Typography variant="h5">
              Impulsa tu negocio en la nueva era de la virtualización...
            </Typography>
          </Grid>
          <Grid item md={8} className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Encuentra algo de tu interés"
              inputProps={{ 'aria-label': 'search in mercadito.cr' }}
              autoFocus={true}
              color="primary"
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Grid>
          <Grid item md={8}>
             <Button
                fullWidth
                variant="outlined"
                color="primary"
              >
                Conoce más
              </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Welcome;
