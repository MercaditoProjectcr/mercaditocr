import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
      <Container maxWidth="xl" className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <Grid container direction="column">
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
              <Grid item xs={12} sm={12} className="profileInfoContainer">
                <h4>Oficio</h4>
                <h4>Ubicacion</h4>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={9} className="tabContainer">
            <ProfileTabItems />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Profile;
