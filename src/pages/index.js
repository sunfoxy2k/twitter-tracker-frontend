import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import IndexPageStyle from '../styles/pages/index.module.css'

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

    useEffect(() => {
        if(isLogin) {
            router.push('/app')            
        }        
    }, [])

    return (
        <div className={IndexPageStyle.container}>
            <HeroSection />
        </div>
    )
}

export default IndexPage;