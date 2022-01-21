import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <header>Header</header>
        <main>{children}</main>
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
