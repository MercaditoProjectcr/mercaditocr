import React, { useState } from "react";
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
import Snackbar from "@material-ui/core/Snackbar";
//'success', 'warning', 'error', 'info'
import SnackBarContent from "../../snackbar";
import EditIcon from "@material-ui/icons/Edit";

import * as img from "../../../images/";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

const permitedFormatFile = [
  'image/jpg',
  'image/jpeg',
  'image/png'
];
const ProfileInformation = () => {
  const classes = useStyles();
  const [message, setMessage] = useState(null);
  const [snackVariant, setsnackVariant] = useState(null);
  const [open, setOpen] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [profileImg, setProfileImg] = useState(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  };

  const chargeSnack = (variant, message) => {
    setsnackVariant(variant);
    setMessage(message);
    setOpen(true);
  };
  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      if(permitedFormatFile.includes(e.target.files[0].type)){
        if(e.target.files[0].size <= 6291456){
          const file = e.target.files[0];
          let imageDataUrl = await readFile(file);
          setProfileImg(imageDataUrl);
          chargeSnack(
            "success", 
            "Imagen cargada con éxito"
          );
          setIsEdit(false); 
        }
        else{
          chargeSnack(
            "error",
            `No se permiten archivos mayores a 2MB, intente de nuevo`
          );
          setProfileImg(null);
        }
        
      }
      else{
          chargeSnack(
            "error",
            `No se permite ${e.target.files[0].type} intente de nuevo`
          );
          setProfileImg(null);
      }
    } else {
      chargeSnack("error", "Intente de nuevo...");
    }
  };

  return (
    <div>
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
                {profileImg === null ? (
                  <img
                    alt="profileImage"
                    src={img.ProfileImg}
                    className="profileImg"
                  />
                ) : (
                  <img
                    alt="profileImage"
                    src={profileImg}
                    className="profileImg"
                  />
                )}
              </div>
            </Grid>
            <Grid item xs={12} sm={12} alignItems="center">
              {!isEdit ? (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<EditIcon />}
                  onClick={() => setIsEdit(true)}
                >
                  Editar imagen
                </Button>
              ) : (
                <input type="file" onChange={onFileChange} accept=".jpg,.jpeg, .JPG, .png"/>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default ProfileInformation;
