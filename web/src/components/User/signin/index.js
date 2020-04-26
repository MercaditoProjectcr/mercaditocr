import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";

import SnackBarContent from "../../snackbar";
import * as img from "../../../images";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${img.StoreImg})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signin = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState(null);
  const [snackVariant, setsnackVariant] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const chargeSnack = (variant, message) => {
    setsnackVariant(variant);
    setMessage(message);
    setOpen(true);
  };

  /*const validate = (email) => {
    const expression = cons.expression;
    return expression.test(String(email).toLowerCase());
  };*/
  const handleSubmit = (e) => {
    e.preventDefault();
    chargeSnack("success", "Exitoso");
  };

  return (
    <React.Fragment>
        <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <SnackBarContent
          onClose={handleClose}
          variant={snackVariant}
          message={message}
        />
      </Snackbar>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesión
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                value={email || ""}
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                type="email"
                onChange={(event) => {
                  event.preventDefault();
                  setEmail(event.target.value);
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                value={password || ""}
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => {
                  event.preventDefault();
                  setPassword(event.target.value);
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordar"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Iniciar
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/" variant="body2">
                    ¿Olvidó su clave?
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Signin;

/*
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://example.com/">
        Mercadito C.R
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

import Box from '@material-ui/core/Box';
<Grid item>
  <Link to="/signup" variant="body2">
    {"Don't have an account? Sign Up"}
  </Link>
</Grid>
*/
