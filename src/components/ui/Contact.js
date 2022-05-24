import React from 'react'
import { ContactData } from './ContactData'
import { Form } from './Form'

export const Contact = () => {
  return (
    <div className="container">
        <h1 >Ways To Contact Me...</h1>
        <div className="banner_img_cont">
          <img src= "./assets/contactme.SVG" className="d-inline-block align-right" alt=""/>
        </div>
        <Form/>
        <ContactData/>
    </div>
  )
}
