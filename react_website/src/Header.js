import React from 'react';
import {
  AppBar, Toolbar, Typography, CssBaseline, Link
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Styles from './Styles'

export default function BackToTop(props) {
  const styles = Styles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={styles.header} position='static'>
        <Toolbar className={styles.headerItems}>
          <Typography variant="h6">Meghan Fair</Typography>
          
          <div className={styles.headerIcons}>
            <Link href="https://www.linkedin.com/in/meghan-fair/" color="inherit" target="_blank" rel="noopener">
              <IconButton
                aria-label="LinkedIn"
                color="inherit"
                >
                <LinkedInIcon />
              </IconButton>
            </Link>
            <Link href="https://www.github.com/mkfair05" color="inherit" target="_blank" rel="noopener">
              <IconButton
                aria-label="Github"
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
