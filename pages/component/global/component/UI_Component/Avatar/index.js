import Link from "next/link";
import React from "react";
import AvatarStyle from './avatar.module.css';

export const AvatarLink = ({ src, className, href = '/profile' }) => {

    return (
        <Link href={href} className={className}>
            <Avatar  src={src} />
        </Link>
    )
}

const Avatar = ({ src, className }) => {
    return (
        <img src={src} alt="user_profile" className={`${className} ${AvatarStyle.img}`} />
    )
}

export default Avatar;
