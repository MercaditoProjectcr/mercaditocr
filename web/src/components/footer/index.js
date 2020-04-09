import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "./footer.style";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://www.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.a}
            >
              Mercadito cr
            </a>
            , Made it for good things
          </span>
        </p>
      </div>
    </footer>
  );
}
