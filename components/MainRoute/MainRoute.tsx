import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from '../rt-theme'
import { Router } from './data'
import GlobalScrollbarStyle from './GlobalScrollbarStyle'


const MainRoute = () => {
  const [platform, setPlatform] = useState()
  const [store, setStore] = useState()

  return (
    <React.Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        />
      </Helmet>
      <ThemeProvider>            
            <React.Fragment>
              <GlobalScrollbarStyle />
              <Router />
            </React.Fragment>         
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MainRoute
