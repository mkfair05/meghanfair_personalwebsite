import React from 'react';
import {
  AppBar, Toolbar, Typography, makeStyles, CssBaseline, Link
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  header: {
    backgroundColor: '#3c3c3c'
  },
  headerIcons: {
    display: 'inline-flex',
    justifyContent: 'space-evenly',
    position: 'relative',
  },
  headerItems: {
    display: 'flex',
    justifyContent: 'space-between'
  },
}));

export default function BackToTop(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.header} position='static'>
        <Toolbar className={classes.headerItems}>
          <Typography variant="h6">Meghan Fair</Typography>
          
          <div className={classes.headerIcons}>
            <Link href="https://www.linkedin.com/in/meghan-fair/" color="inherit" target="_blank" rel="noopener">
              <IconButton
                aria-label="LinkedIn"
                edge="none"
                color="inherit"
                >
                <LinkedInIcon />
              </IconButton>
            </Link>
            <Link href="https://www.github.com/mkfair05" color="inherit" target="_blank" rel="noopener">
              <IconButton
                aria-label="Github"
                edge="none"
                color="inherit"
                >
                <GitHubIcon />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
