import React from "react";
import IndexPageStyle from '../styles/pages/index.module.css'

const InputSection = () => {
    return (
        <section>
            <input type="text" />
        </section>
    )
}

const HeroSection = () => {
    return (
        <section className={IndexPageStyle.section__intro}>
            <h1>Automatic Track New Following from Twitter Acount</h1>
        </section>
    )
}

const IndexPage = () => {
    return (
        <div className={IndexPageStyle.container}>
            <HeroSection />
        </div>
    )
}

export default IndexPage;