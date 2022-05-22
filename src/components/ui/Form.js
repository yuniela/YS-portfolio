import React from 'react'

export const Form = () => {
  return (
        <div className="col-md-6 d-flex flex-column align-items-center p-2 formulario">
            <div className="col-md-12">
                <div className="col-md-12">
                    <div className="well well-sm">
                        <form className="form-horizontal" method="post">
                            <fieldset>
                                <legend className="text-center header"></legend>
                                <div className="form-group ">
                                    <div className="col-md-12 wrapper">
                                        <input id="lname" name="name" type="text" placeholder="Full Name" className="form-control"/>
                                        <i className="fa fa-user bigicon"></i>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12 wrapper">
                                        <input id="email" name="email" type="text" placeholder="Email Address" className="form-control"/>
                                        <i className="fa fa-solid fa-envelope bigicon"></i>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12 wrapper">
                                        <input id="phone" name="phone" type="text" placeholder="Phone" className="form-control"/>
                                        <i className="fa fa-phone-square bigicon"></i>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12 wrapper-text">
                                        <textarea className="form-control" id="message" name="message" placeholder="Enter your message here. I will get back to you within 2 business days." rows="7"></textarea>
                                        <i className="fa fa-solid fa-pen-to-square bigicon"></i>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12 text-center">
                                        <button type="submit" className="btn btn-primary btn-lg mt-3">Submit</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}
