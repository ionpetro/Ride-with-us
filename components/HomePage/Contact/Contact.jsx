import React from "react";

const Contact = () => {
  return (
    <div
      className="rbt-countdown-area bg_image contact-image bg_image_fixed rbt-section-gap"
      data-black-overlay={5}
    >
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="inner">
              <div className="section-title text-start">
                <span className="subtitle bg-white-opacity">Επικοινωνησε</span>
                <h2 className="title color-white">
                  Επικοινώνησε με την ride with us
                </h2>
                <p className="description has-medium-font-size mt--20 mb--0 color-white opacity-7">
                  Στείλε μας το μήνυμα σου και θα επικοινωνήσουμε μαζί σου το
                  συντομότερο δυνατό
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rbt-contact-form contact-form-style-1 w-100">
              <div className="section-title text-start"></div>
              <h3 className="title mb--40">Γράψε μας</h3>
              <form id="contact-form" className="w-100">
                <div className="form-group">
                  <input name="con_name" type="text" />
                  <label>Όνομα</label>
                  <span className="focus-border" />
                </div>
                <div className="form-group">
                  <input name="con_email" type="email" />
                  <label>Email</label>
                  <span className="focus-border" />
                </div>
                <div className="form-group">
                  <input type="text" />
                  <label>Τηλέφωνο</label>
                  <span className="focus-border" />
                </div>
                <div className="form-group">
                  <input type="text" />
                  <label>Μήνυμα</label>
                  <span className="focus-border" />
                </div>
                <div className="form-submit-group mt--40">
                  <button
                    type="submit"
                    className="rbt-btn btn-gradient hover-icon-reverse w-100"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Αποστολή</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
