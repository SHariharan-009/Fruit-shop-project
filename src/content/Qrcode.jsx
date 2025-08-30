import React from 'react'
import QRCode from "react-qr-code";

const Qrcode = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="text-xl font-bold">Shop QR code</h1>
            <QRCode
                value="https://ramajayampalamuthirsolai.com"
                size={100}
                bgColor="white"
                fgColor="black"
                level="H"
                includeMargin={true}
            />
        </div>
    )
}
export default Qrcode