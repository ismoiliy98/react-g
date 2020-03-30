import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import '../assets/tailwind.scss'
import { Header } from './Header'

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>React-G</title>
      </Helmet>
      <Header />
      <div className="h-screen bg-green-600 flex justify-center items-center p-4 flex-col">
        <h1 data-test="greeting" className="text-white text-4xl text-center">
          Welcome to React-G!
        </h1>
      </div>
    </HelmetProvider>
  )
}

export default App
