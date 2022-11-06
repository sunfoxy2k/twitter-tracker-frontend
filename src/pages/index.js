import React, { useEffect } from "react";
import IndexPageStyle from '../styles/pages/index.module.css'

const HeroSection = () => {
    return (
        <section className={IndexPageStyle.section__intro}>
            <h1>Automatic Track New Following from Twitter Acount</h1>
        </section>
    )
}

const IndexPage = () => {
    useEffect(() => {
        
    }, [])

    return (
        <div className={IndexPageStyle.container}>
            <HeroSection />
        </div>
    )
}

export default IndexPage;