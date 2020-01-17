import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '@material-ui/core/styles'
import { appTheme } from 'utils/appTheme.js'
import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core'
import 'utils/fonts.js'
import classes from './App.scss'

const App = () => {
  return (
    <HelmetProvider>
      <CssBaseline />
      <Helmet>
        <title>React-G</title>
      </Helmet>
      <ThemeProvider theme={appTheme}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">React-G</Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.App}>
          <Typography variant="h3" align="center" data-test="greeting">
            Welcome to React-G!
          </Typography>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
