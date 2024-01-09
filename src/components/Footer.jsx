import React from 'react'

export default function Footer(){
    const date = new Date
    const year = date.getFullYear()
    return (
        <div className='web-footer'>
            <p className='mb-0'>©MyShop. All Rights Reserved.{year}</p>
        </div>
    )
}