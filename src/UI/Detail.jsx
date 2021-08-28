import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import CardSun from './CardSun';
import CardMoon from './CardMoon';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    display: 'flex',
    justifyContent: 'center'
  },
  column: {
    flexBasis: '33.33%',
    display: 'flex',
    alignItems: 'center',
  },
  column2: {
    flexBasis: '33.33%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    borderBottom: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
}));

const Detail = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion square={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <h6>{props.date}</h6>
          </div>
          <div className={classes.column}>
            <h6>{`${props.max}°/${props.min}°`}</h6>
          </div>
          <div className={classes.column}>
            <img src={props.icon} className="rounded" alt=""></img>
            <h6>{props.text}</h6>
          </div>
          <div className={classes.column2}>
            <div className="col-sm-3 d-flex justify-content-evenly align-items-baseline">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-droplet" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
                <path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" />
              </svg>
              <h6>{`${props.chance}%`}</h6>
            </div>

          </div>
          <div className={classes.column2}>
            <div className="col-sm-4 d-flex justify-content-evenly align-items-baseline">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
                <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
              </svg>
              <h6>{`${props.windy}km/h`}</h6>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className="row">
          <div className="col-sm-6 d-flex justify-content-center">
            <CardSun
              day={props.day}
              astro={props.astro}
            />
          </div>
          <div className="col-sm-6 d-flex justify-content-center">
            <CardMoon
              day={props.day}
              astro={props.astro}
            />
          </div>
        </AccordionDetails>
        <Divider />
      </Accordion>
    </div>
  );
}

export default Detail;
