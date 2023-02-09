import React from "react";
import ExportedImage from "next-image-export-optimizer";
import logoImage from './telegram_bot_qr.svg'

const TelegramBotQrImg = ({ className }) => {
  return (
    <ExportedImage src={logoImage} alt="logo-img" className={`${LogoStyle.logo} ${className}`} placeholder="empty" unoptimized />
  )
}
export default TelegramBotQrImg;

export const TelegramBotQr = ({ className, href = "/" }) => {
  return (
    <TelegramBotQr />
  )
}