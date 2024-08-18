import React from 'react';

import MainProvider from 'providers/main'
import AppRoutes from 'routes'

const App = () => {
  return (
    <MainProvider>
        <AppRoutes />
    </MainProvider>
  )
}

export default App
