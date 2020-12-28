import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
    return (
        <section className="contact py-5">
            <Title title="Contact us" />
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="https://getform.io/f/97be0e46-4f1b-4f24-ba27-4b3789ba4824" method="POST">
                        {/* NAME */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="Your name" />
                        </div>
                        {/* EMAIL */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" name="email" id="email" placeholder="Your email address" />
                        </div>
                        {/* MESSAGE */}
                        <div className="form-group">
                            <label htmlFor="email">Message</label>
                            <textarea className="form-control" name="message" id="message" rows="5" placeholder="Message" />
                        </div>
                        {/* SUBMIT */}
                        <button type="submit" className="btn btn-yellow btn-block mt-5">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
