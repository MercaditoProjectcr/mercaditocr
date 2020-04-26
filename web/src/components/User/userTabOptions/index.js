import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Tooltip from '@material-ui/core/Tooltip';

import PersonPinIcon from "@material-ui/icons/PersonPin";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import PostAddIcon from "@material-ui/icons/PostAdd";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ProfileInformation from "../profile/profileInformation";
import OfferedServices from "../offeredServices";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    textAlign: 'left'
  },
}));

export default function ProfileTabItems() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab
            icon={<Tooltip title="Informacón personal"><PersonPinIcon /></Tooltip>}
            aria-label="Informacón personal"
            {...a11yProps(1)}
          />
          <Tab
            icon={<Tooltip title="Gestion de servicios"><PostAddIcon /></Tooltip>}
            aria-label="Gestion de servicios"
            {...a11yProps(2)}
          />
          <Tab
            icon={<Tooltip title="Detalle de servicios"><ShoppingBasket /></Tooltip>}
            aria-label="Detalle de servicios"
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProfileInformation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OfferedServices />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h1>Hello from list of services</h1>
      </TabPanel>
    </div>
  );
}
