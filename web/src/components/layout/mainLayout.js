import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./mainStyle"; 
import routes from "../../routes/routes";

import AppBar from "../appbar/appbar"; 
import Footer from "../footer/footer";

const useStyles = makeStyles(styles);

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/" to="/home" />
  </Switch>
);
const MainLayout = () => {
  const classes = useStyles();
  return(
    <div className={classes.wrapper}>
        <div className={classes.mainPanel}>
             <AppBar routes={routes}/>
             <div className={classes.content}>
                {switchRoutes}
             </div>
             
             <Footer/> 
        </div>
    </div>
  )
};
export default MainLayout;
