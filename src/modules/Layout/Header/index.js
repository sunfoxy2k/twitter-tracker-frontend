import Link from "next/link";
import HeaderStyle from './header.module.css'
import { LogoLink } from "../../UI_Component/Logo";
import { IoMenu } from 'react-icons/io5'
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../UI_Component/Modal/slice";
import Modal from "../../UI_Component/Modal";
import React, { useRef, useEffect, useState } from "react";
import { logout as logoutAuth } from "../../auth";
import { useRouter } from "next/router";

const MenuItem = ({ href, content, className }) => {
    return (
        <li className={className}>
            <Link href={href}>
                {content}
            </Link>
        </li>
    )
}

const AuthHeader = (currentUser) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const logout = () => {
        logoutAuth(dispatch)
        router.push('/')
    }

    return (
        <>
            <li>{currentUser}</li>
            <li><button onClick={logout}>Logout</button></li>
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

    return (
        <div className={HeaderStyle.right}>
            <MenuList />
            <IoMenu className={HeaderStyle.menu_bar} onClick={() => dispatch(openModal(MODAL_ID))} />
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

    return (
        <div className={`${HeaderStyle.container} ${className}`}>
            <header className={HeaderStyle.header} ref={ref}>
                <LogoLink className={HeaderStyle.logo} />
                <HeaderRight />
            </header>
            <div className={HeaderStyle.offset} style={{ 'height': height }} />
        </div>
    )
}

export default HeaderLayout
