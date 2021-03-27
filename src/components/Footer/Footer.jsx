import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  Container, makeStyles, Typography, Link, Grid,
} from '@material-ui/core';

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    contributors: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
  ));

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container>
          <Grid container md={6} justify="center" spacing={5}>
            <Typography className={classes.contributors}>
              Contributors:
            </Typography>
            <Grid item>
              <Link href="https://github.com/Velidoss">
                <GitHubIcon />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://github.com/va-z">
                <GitHubIcon />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://github.com/arumirinka">
                <GitHubIcon />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://github.com/reagentjs">
                <GitHubIcon />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
