import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  myClassName: {
    backgroundColor: "#335f79",
    position: "relative",
    "&:hover": {
      backgroundColor: "#003758"
    }
  }
}));

const Icon = (props) => {
  const classes = useStyles();

  return (
    <div>
      <IconButton color="inherit" className={classes.myClassName}>
        {props.children}
      </IconButton>
    </div>
  );
}

export default Icon;