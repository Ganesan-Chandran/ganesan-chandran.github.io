import "./css/Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="section-heading">
        <h2>Contact Me</h2>
        <div className="line-dec"></div>
      </div>
      <div className="row">
        <div className="col-md-4 mailto-left" data-aos="fade-right" data-aos-once={true}>
          <div className="row">
            <div className="col-md-2">
              <i className="fa fa-envelope fa-2x" style={{ paddingRight: "10px", color: "orange" }}></i>
            </div>
            <div className="col-md-10">
              <a href="mailto:ganesanchandran@hotmail.com" className="mailto" >ganesanchandran@hotmail.com</a>
            </div>
          </div>
        </div>
        <div className="col-md-8" style={{ paddingLeft: "50px" }} data-aos="fade-left" data-aos-once={true}>
          <div className="right-content">
            <div className="container">
              <div id="contact">
                <div className="row">
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your name..."
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Your email..."
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <input
                        name="subject"
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject..."
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <textarea
                        name="message"
                        rows="6"
                        className="form-control"
                        id="message"
                        placeholder="Your message..."
                        required=""
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="button">
                        Send Message
                      </button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;