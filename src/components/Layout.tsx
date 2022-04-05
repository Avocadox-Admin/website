import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SideDrawer from './SideDrawer';

const Layout = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div>
      <Navbar drawerHandler={setShowDrawer} />
      <main>{children}</main>
      <Footer />
      <SideDrawer showDrawer={showDrawer} drawerHandler={setShowDrawer} />
    </div>
  );
};

export default Layout;
