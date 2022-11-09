import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import IndexPageStyle from './style/index.module.css'

const HeroSection = () => {
    return (
        <section className={IndexPageStyle.section__intro}>
            <h1>Automatic Track New Following from Twitter Acount</h1>
        </section>
    )
}

const IndexPage = () => {
    const isLogin = useSelector(state => state.auth.isLogin)
    const router = useRouter()


    return (
        <div className={IndexPageStyle.container}>
            <HeroSection />
        </div>
    )
}

export default IndexPage;