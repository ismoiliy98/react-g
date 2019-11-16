import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import 'utils/fonts'
import styles from './App.scss'

const App = () => {
  return (
    <HelmetProvider>
      <div className={styles.App}>
        <Helmet>
          <title>React-G</title>
        </Helmet>
        <span className={styles.Greeting}>Welcome to React-G!</span>
      </div>
    </HelmetProvider>
  )
}

export default App
