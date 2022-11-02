import React from "react";
import MainLayout from "./Main";
import HeaderLayout from "./Header";
import LayoutStyle from "./layout.module.css"
import FooterNote from "./Footer/Note";
import FooterMenu from "./Footer/Menu";

const Layout = ({ children }) => {
  return (
    <div className={LayoutStyle.container}>
      <HeaderLayout className={LayoutStyle.header} />
      <MainLayout className={LayoutStyle.main}>
        {children}
      </MainLayout>
      <FooterNote className={LayoutStyle.footer__note} />
      <FooterMenu className={LayoutStyle.footer__menu} />
    </div>
  )
}

export default Layout