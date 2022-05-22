import React from 'react'

export const ContactData = () => {
  return (
    <div className="container dataContact align-items-center p-6">
        <div className= "row md-justify-content-center">
            <div className="col-lg-4 col-md-4 mb-30">
                <div className="contact-item">
                    <div className="ct-item-icon float-left ml-30 mr-20">
                        <i className="fa fa-solid fa-envelope bigicon github"></i>
                        <a 
                            styles = {{textDecoration: 'none'}} 
                            className="btn-animation letters" 
                            href='https://mail.google.com/'
                        >yunielasolorzano@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className= "col-lg-4 col-md-4 mb-30">
                <div className="contact-item">
                    <div className="ct-item-icon float-left ml-30 mr-20">
                    <i className="fa fa-solid fa-phone-square bigicon phone"></i>
                    <span styles = {{textDecoration: 'none'}} className="btn-animation letters">+593959171160</span>
                    </div>
                </div>
            </div>
            <div className= "col-lg-4 col-md-6 mb-30 mb-lg-0">
                <div className="contact-item">
                    <div className="ct-item-icon float-left ml-30 mr-20">
                    <i className="fa fa-brands fa-linkedin bigicon linkedin"></i>
                    <a styles = {{textDecoration: 'none'}} className="btn-animation letters" href="www.linkedin.com/in/yuniela-solorzano-burgos-652607196">Yuniela Solórzano</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
                <div className="contact-item">
                    <div className="ct-item-icon float-left ml-30 mr-20">
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
                <div className="contact-item">
                    <div className="ct-item-icon float-left ml-30 mr-20">
                    <i className="fa-brands fa-github-square bigicon github"></i>
                    <a styles = {{textDecoration: 'none'}} className="btn-animation letters" href="https://github.com/yuniela">yuniela</a>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}
