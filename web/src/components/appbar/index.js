import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BaseAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ListItemText from "@material-ui/core/ListItemText";
// import Divider from "@material-ui/core/Divider";
import AppsIcon from "@material-ui/icons/Apps";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: -theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: 16,
  },
  button: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
  },
}));


const AppBar = ({ title = "", transparent, onBack, routes }) => {
  const styles = useStyles();
  const [anchorElement, setAnchorElement] = useState(null);
  const open = Boolean(anchorElement);
  let history = useHistory();

  const onMenu = (event) => {
    setAnchorElement(event.currentTarget);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  const onClose = () => {
    setAnchorElement(null);
  };

  const navigate = (to) => {
    history.push(to);
    onClose();
  }; 
  return (
    <div className={styles.root}>
      <BaseAppBar
        elevation={transparent ? 0 : 6}
        style={{
          backgroundColor: transparent
            ? "transparent"
            : "rgba(255,255,255,0.98)",
        }}
        position="fixed"
      >
        <Toolbar>
          <Typography variant="h5" className={styles.title}>
            {title}
          </Typography>

          <Fragment>
            {" "}
            <IconButton
              edge="end"
              color="primary"
              aria-label="menu"
              onClick={onMenu}
              className={styles.menuButton}
            >
              <AppsIcon style={{ fontSize: 48 }} />
            </IconButton>
            <Menu
              id="appbar"
              keepMounted
              open={open}
              onClose={onClose}
              anchorEl={anchorElement}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {routes.map((item, key) => (
                <MenuItem key={key} onClick={() => navigate(item.path)}>
                  <item.icon color="primary" className={styles.icon} />
                  <ListItemText primary={item.name} />
                </MenuItem>
              ))}
            </Menu>
          </Fragment>
        </Toolbar>
      </BaseAppBar>
    </div>
  );
};

AppBar.defaultProps = {};

export default AppBar;

/*
import Button from "./button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
Boton de volver|inicio renderizado con una condición especifica de next que cuando no estuviera en Home, renderizada el boton en Voler sino en Inicio
          {Boolean(onBack) && (
            <Button
              fullWidth={false}
              variant="text"
              color="primary"
              aria-label="back"
              onClick={onBack}
              className={styles.button}
              startIcon={<ArrowBackIcon style={{ fontSize: 40 }} />}
            >
              {"Inicio" || "Volver"}
            </Button>
          )}

 */