import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import EditIcon from "@material-ui/icons/Edit";

import ProfileTabItems from "./profileTabOptions";
import "./profile.style.css";
import * as img from "../../../images/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <Grid container direction="column" alignItems="center">
              <Grid item xs={12} sm={12}>
                <div className="profileImgContainer">
                  <img
                    alt="profileImage"
                    src={img.ProfileImg}
                    className="profileImg"
                  />
                </div>
                <Typography variant="overline" component="h2">
                  Nombre del Usuario
                </Typography>
              </Grid>
              <Grid item xs={9} sm={12}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<EditIcon />}
                >
                  Editar perfil
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} className="profileInfoContainer">
                <h3>Oficio</h3>
                <h3>Ubicacion</h3>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={9}>
            <ProfileTabItems />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Profile;
