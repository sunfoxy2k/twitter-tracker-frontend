import React, { useEffect } from "react";
import MainLayout from "./Main";
import HeaderLayout from "./Header";
import LayoutStyle from "./layout.module.css"
import FooterNote from "./Footer/Note";
import FooterMenu from "./Footer/Menu";
import { getAuthUser } from "../auth";

import { Inter } from '@next/font/google'
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/router";

const inter = Inter({ subsets: ['latin'] })

const Layout = ({ children }) => {
  const router = useRouter()
  const path = router.pathname
  const isLogin = useSelector(state => state.auth.isLogin)

  function isProtectedRoute (path) {
    return path.includes('/app')
  }

  function isLandingPage(path) {
    return path == '/' || path == ''
  }

  useEffect(() => {
    if (isProtectedRoute(path) &&  !!!(isLogin)) {
      router.push('/login')
      return
    }

    if (isLandingPage(path) && isLogin) {
      router.replace('/app')
    }
  }, [path])

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