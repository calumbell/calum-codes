import * as React from 'react';
import { PageProps } from 'gatsby';
import Navbar from './Navbar';
import '../styles/Layout.scss';

const Layout = ({children}: PageProps) => {
  return(
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout;