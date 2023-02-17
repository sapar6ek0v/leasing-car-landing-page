import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../styles/GlobalStyles';
import theme from '../../styles/theme';
import Navbar from './Navbar';
import { ContentWrapper } from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <ContentWrapper>{children}</ContentWrapper>
      </ThemeProvider>
    </>
  );
};

export default Layout;
