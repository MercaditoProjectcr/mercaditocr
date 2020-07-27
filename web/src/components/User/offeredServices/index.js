import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Select from "@material-ui/core/Select";

import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Snackbar from "@material-ui/core/Snackbar";
//'success', 'warning', 'error', 'info'
import SnackBarContent from "../../snackbar";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Clear";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WebIcon from "@material-ui/icons/Language";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import * as img from "../../../images";
import * as cons from "../../../const";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const OfferdServices = () => {
  const classes = useStyles();
  const [message, setMessage] = useState(null);
  const [snackVariant, setsnackVariant] = useState(null);
  const [open, setOpen] = useState(false);
  // const [isEdit, setIsEdit] = useState(false);
  const [productImage, setProductImage] = useState([]);

  const [state, setState] = useState({
    express: true,
    datafono: true,
    onlinePayment: true,
  });

  const categories = cons.categories;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
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
      if (cons.permitedFormatFile.includes(e.target.files[0].type)) {
        if (e.target.files[0].size <= 6291456) {
          const file = e.target.files[0];
          console.log(file);
          let imageDataUrl = await readFile(file);
          if (productImage.length >= 5) {
            chargeSnack("error", `Máximo 5 imagenes por producto`);
          } else {
            productImage.push(imageDataUrl);
            chargeSnack("success", "Imagen cargada con éxito");
          }
        } else {
          chargeSnack(
            "error",
            `No se permiten archivos mayores a 6MB, intente de nuevo`
          );
        }
      } else {
        chargeSnack("error", `Formato no permitido, solo png y jpeg`);
      }
    } else {
      chargeSnack("error", "Intente de nuevo...");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit perrito");
  };
  //console.log(productImage);
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
      <Grid container direction="column">
        <Grid item sm={12}>
          <Typography variant="h5" component="h2">
            Agregar producto/servicio
          </Typography>
        </Grid>
        <form className={classes.root} onSubmit={handleSubmit}>
          <Grid item xs={12} sm={12}>
            <Grid container direction="row">
              <Grid item sm={8} xs={12}>
                <Grid container direction="column" alignItems="left">
                  <Grid item xs={12} sm={12}>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="grouped-native-select">
                        Seleccione una categoria
                      </InputLabel>
                      <Select native defaultValue="" id="grouped-native-select">
                        {categories.map((item, key) => {
                          return (
                            <optgroup key={key} label={item.name}>
                              {item.SubCategories.map((sub, key2) => {
                                return (
                                  <option key={key2} value={sub.name}>
                                    {sub.name}
                                  </option>
                                );
                              })}
                            </optgroup>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={10} sm={9}>
                    <TextField
                      id="productName"
                      label="Nombre"
                      type="text"
                      required
                      style={{ margin: 8 }}
                      helperText="de su servicio o producto"
                      fullWidth
                      margin="normal"
                      inputProps={{
                        maxLength: 50,
                      }}
                    />
                  </Grid>
                  <Grid item xs={10} sm={9}>
                    <TextField
                      id="productDescription"
                      label="Descripción"
                      type="text"
                      required
                      style={{ margin: 8 }}
                      helperText="breve descripción de su producto o servicio"
                      fullWidth
                      multiline
                      rows={3}
                      margin="normal"
                      inputProps={{
                        maxLength: 255,
                      }}
                    />
                  </Grid>
                  <Grid item xs={10} sm={9}>
                    <FormGroup
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">
                        Facilidades al usuario
                      </FormLabel>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.express}
                            onChange={handleChange}
                            name="express"
                            color="primary"
                          />
                        }
                        label="Express"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.datafono}
                            onChange={handleChange}
                            name="datafono"
                            color="primary"
                          />
                        }
                        label="Datafono"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.onlinePayment}
                            onChange={handleChange}
                            name="onlinePayment"
                            color="primary"
                          />
                        }
                        label="Pagos en linea"
                      />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={10} sm={9}>
                    <TextField
                      id="facebookURL"
                      label="Facebook"
                      type="url"
                      style={{ margin: 8 }}
                      fullWidth
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FacebookIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={10} sm={9}>
                    <TextField
                      id="instagramURL"
                      label="Instagram"
                      type="url"
                      style={{ margin: 8 }}
                      fullWidth
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <InstagramIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={10} sm={9}>
                    <TextField
                      id="webURL"
                      label="Web"
                      type="url"
                      style={{ margin: 8 }}
                      fullWidth
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <WebIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={10} sm={9}>
                    <TextField
                      id="whatsApp"
                      label="whatsApp"
                      type="number"
                      style={{ margin: 8 }}
                      fullWidth
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <WhatsAppIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <div className="profileImgContainer">
                      <img
                        alt="productExample"
                        src={img.UploadImg}
                        className="profileImg"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} className="image-upload">
                    <input
                      id="profileImgInput"
                      type="file"
                      onChange={onFileChange}
                      accept=".jpg,.jpeg, .JPG, .png"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row">
                      {productImage.map((img, key) => {
                        console.log(img, key); 
                        return (
                          <Grid item xs={6}>
                            <div className="profileImgContainer">
                              <img
                                alt={`productImage${key +1}`}
                                src={img}
                                className="profileImg"
                              />
                            </div>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Tooltip title="guardar">
                  <IconButton type="submit">
                    <SaveIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="cancelar">
                  <IconButton>
                    <CancelIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </React.Fragment>
  );
};
export default OfferdServices;
