import React from "react"
import { Link } from "gatsby"
import { Container, ThemeProvider, AppBar, Toolbar, Box } from "@material-ui/core"
import { createMuiTheme } from '@material-ui/core/styles'
import { Helmet } from "react-helmet"
import DataProvider from "../components/DataProvider"
import Editor from "../components/Editor"
import styled from "styled-components"

import LOGO from '../images/logo.png';

const Logo = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 0;
  max-width: 220px;
`

const BoxContainer = styled(Container)`
  padding-left: 0 !important;
  padding-right: 0 !important;
`

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fb8521',
    },
  },
});


const IndexPage = () => (
  <DataProvider>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <BoxContainer maxWidth="sm" >
        <Box minHeight="100vh" height="100%">
          <AppBar position="fixed">
            <Toolbar>
              <Logo src={LOGO} />
            </Toolbar>
          </AppBar>
          <Editor />
        </Box>
      </BoxContainer>
    </ThemeProvider>
  </DataProvider>
)

export default IndexPage
