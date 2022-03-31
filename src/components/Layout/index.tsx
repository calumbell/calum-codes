import * as React from 'react';
import { PageProps } from 'gatsby';
import { Navbar } from '../';
import '../../styles/index.scss';

const Layout = ({children}: PageProps) => {
  return(
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout;