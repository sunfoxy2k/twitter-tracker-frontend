import Link from "next/link";
import HeaderStyle from './header.module.css'
import { LogoLink } from "@/modules/UI_Component/Logo";
import { IoMenu } from 'react-icons/io5'
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/modules/UI_Component/Modal/slice";
import Modal from "@/modules/UI_Component/Modal";
import React, { useRef, useEffect, useState } from "react";
import { logout as logoutAction } from "@/store/auth.reducer";
import { useRouter } from "next/router";
import { CgProfile } from 'react-icons/cg'
import { BiNews } from 'react-icons/bi'
import { Auth } from "aws-amplify";
import {persistor} from '@/store/index'

const MenuItem = ({ href, content, className }) => {
    return (
        <li className={className}>
            <Link href={href} className={HeaderStyle.button}>
                {content}
            </Link>
        </li>
    )
}

const AuthHeader = (currentUser) => {
    const dispatch = useDispatch()
    const router = useRouter()

    function logout() {
        dispatch(logoutAction())
        Auth.signOut()
        persistor.purge()
        router.push('/')
    }

    return (
        <>
            <li><Link href="/app/subscription" className={HeaderStyle.profile}><BiNews /> Subscription</Link></li>
            <li><Link href="/app/user" className={HeaderStyle.profile}><CgProfile /> {currentUser}</Link></li>
            <li><button onClick={logout} className={`text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}>Logout</button></li>
        </>
    )
}


const MenuList = () => {

    
    const userName = useSelector(state => state.auth.userName)

    return (
        <nav className={HeaderStyle.menu_list}>
            <ul>
                {
                    userName ? AuthHeader(userName) : <MenuItem href='/app' content='Login' />
                }
            </ul>
        </nav>
    )
}

const HeaderRight = () => {
    const MODAL_ID = 'MENU_NAV';
    const dispatch = useDispatch()

    const isLogin = useSelector(state => state.auth.isLogin);

    return (
        <div className={HeaderStyle.right}>
            <MenuList  />
            {isLogin ? <IoMenu className={HeaderStyle.menu_bar} onClick={() => dispatch(openModal(MODAL_ID))} /> : <MenuItem href='/app' content='Login' className={HeaderStyle.menu_bar} />}
            <Modal className={HeaderStyle.menu_modal} closeClassName={HeaderStyle.close_button} modal_id={MODAL_ID}>
                <MenuList />
            </Modal>
        </div>
    )
}

const HeaderLayout = ({ className }) => {
    const ref = useRef()
    const [height, set_height] = useState()

    useEffect(() => {
        set_height(ref.current.offsetHeight)
    }, [])

    const isLogin = useSelector(state => state.auth.isLogin)

    const href = isLogin ? '/app' : '/'

    return (
        <div className={`${HeaderStyle.container} ${className}`}>
            <header className={HeaderStyle.header} ref={ref}>
                <LogoLink className={HeaderStyle.logo} href={href} />
                <HeaderRight />
            </header>
            <div className={HeaderStyle.offset} style={{ 'height': height }} />
        </div>
    )
}

export default HeaderLayout
