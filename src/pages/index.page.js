import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import style from './style/index-page.module.css'

const HeroSection = () => {
    return (
        <section className={style.section__intro}>
            <h1>Automatic Track New Following from Twitter Acount</h1>
        </section>
    )
}

const IndexPage = () => {

    return (
        <div className={style.container}>
            <HeroSection />
        </div>
    )
}

export default IndexPage;