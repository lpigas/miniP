import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { TOP_BLOCK } from "../../../../helpers/constants/constantsaboutleftmenu";
import { BOTTOM_BLOCK } from "../../../../helpers/constants/constantsaboutleftmenu";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const style = {
  background: "#eceff1",
  padding: "5px",
  border: "1px solid black",
  minWidth: "12vh",
  height: "4vh",
};

export default function TemporaryDrawer({ onClick }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {TOP_BLOCK.map((text, index) => (
          <ListItem button key={text} onClick={() => onClick(text)}>
            {text === "Blogs" ? (
              <Link
                style={{
                  display: "flex",
                  width: "100%",
                  textDecoration: "none",
                  color: "black",
                }}
                to={`../blog`}
              >
                {text}
              </Link>
            ) : (
              <Link
                style={{
                  display: "flex",
                  width: "100%",
                  textDecoration: "none",
                  color: "black",
                }}
                to={`./${text.toLowerCase()}`}
              >
                {text}
              </Link>
            )}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {BOTTOM_BLOCK.map((text, index) => (
          <ListItem button key={text} onClick={() => onClick(text)}>
            {text === "Home" ? (
              <Link
                style={{
                  display: "flex",
                  width: "100%",
                  textDecoration: "none",
                  color: "black",
                }}
                to="../home"
              >
                {text}
              </Link>
            ) : (
              <Link
                primary={text}
                style={{
                  display: "flex",
                  width: "100%",
                  textDecoration: "none",
                  color: "black",
                }}
                to={`./${text.toLowerCase()}`}
              >
                {text}
              </Link>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["bottom", "left", "right", "top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer("left", true)}
            style={anchor === "left" ? style : { display: "none" }}
          >
            {"<=" + anchor + " MENU"}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
