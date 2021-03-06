import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",

    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(56),
      height: theme.spacing(35),
    },
  },
}));
export default function SimplePaper({ children }) {
  // console.log(children)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper style={{ alignItems: "center", display: "flex" }} elevation={3}>
        {children}{" "}
      </Paper>
    </div>
  );
}
