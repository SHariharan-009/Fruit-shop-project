import React from 'react'
import QRCode from "react-qr-code";

const Qrcode = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 mr-10 mt-6 md:mt-0 w-[100px] h-[100px] md:w-[220px] md:h-[220px]">
            <h1 className="text-[15px] md:text-xl font-bold">Shop QR code</h1>
            <QRCode
                value="http://shriramajayampalamuthirsolai.netlify.app"
                // size={100}
                bgColor="white"
                fgColor="black"
                level="H"
                includeMargin={true}
            />
        </div>
    )
}
export default Qrcode