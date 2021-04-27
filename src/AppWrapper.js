import React from "react"
import GlobalStyle from "./styles/globalStyle"
import theme from "./styles/defaultTheme"
import App from "./App"
import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router } from "react-router-dom"

const AppWrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  )
}

export default AppWrapper
