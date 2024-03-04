'use client'
import Script from 'next/script'

 
export default function Zenbooker() {

    return <>
        <link href="https://cdn.zenbooker.com/widget/latest/zenbooker.css" rel="stylesheet" precedence="default"></link>
        <Script src="https://cdn.zenbooker.com/widget/latest/zenbooker.js" ></Script>
    </>
}