import * as React from 'react';
import { PageProps } from 'gatsby';
import Navbar from './Navbar';


const Layout = ({children}: PageProps) => {
  return(
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout;