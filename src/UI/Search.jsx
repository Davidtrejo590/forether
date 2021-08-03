import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      color: 'white',
      backgroundColor: '#335f79',
      borderRadius: '30px',
      align: 'center',
      textAlign: 'center',
      '& input': {
        textAlign: 'center',
      },
    },
    iconButton: {
      padding: 10,
    }
  }),
);

const InputSearch = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search By City"
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon style={{ color: 'white' }} />
      </IconButton>
    </div>
  );
}

export default InputSearch;
