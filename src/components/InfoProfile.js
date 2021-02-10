import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

export default function InfoProfile({ name, username }) {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={3}>
        <Typography variant="body1" gutterBottom>
          Username:
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="body1" gutterBottom>
          {username}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body1" gutterBottom>
          Name:
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="body1" gutterBottom>
          {name}
        </Typography>
      </Grid>
    </Grid>
  );
}
