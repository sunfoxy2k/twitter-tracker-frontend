import React, { useEffect } from "react";
import MainLayout from "./Main";
import HeaderLayout from "./Header";
import LayoutStyle from "./layout.module.css"
import FooterNote from "./Footer/Note";
import FooterMenu from "./Footer/Menu";
import { getAuthUser } from "../auth";

import { Inter } from '@next/font/google'
import { useDispatch } from "react-redux";
const inter = Inter({ subsets: ['latin'] })

const Layout = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    getAuthUser(dispatch)
  }, [])

  return (
    <div className={`${LayoutStyle.container} ${inter.className}`}>
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