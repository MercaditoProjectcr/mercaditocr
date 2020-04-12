import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import NameIcon from "@material-ui/icons/AccountCircle";
import PhoneIcon from "@material-ui/icons/ContactPhone";
import EmailIcon from "@material-ui/icons/AlternateEmail";
import NickNameIcon from "@material-ui/icons/AssignmentInd";
import LocationIcon from "@material-ui/icons/LocationOn";
import Button from "@material-ui/core/Button";

import EditIcon from "@material-ui/icons/Edit";

import * as img from "../../../images/";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

const ProfileInformation = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} sm={8}>
          <Grid container direction="column">
            <Grid item xs={12} sm={12}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Usuario"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <NickNameIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Nombre"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <NameIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Apellidos"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <NameIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Teléfono"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Ubicación"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container direction="column">
            <Grid item xs={12} sm={12} alignItems="center">
              <div className="profileImgContainer">
                <img
                  alt="profileImage"
                  src={img.ProfileImg}
                  className="profileImg"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} alignItems="center">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<EditIcon />}
              >
                Editar imagen
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default ProfileInformation;
