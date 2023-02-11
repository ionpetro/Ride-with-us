import React from 'react';

const About = () => {
  return (
    <div>
      <>
        {/* Start breadcrumb Area */}
        <div className="rbt-breadcrumb-default bg-gradient-11  ptb--100 ptb_md--50 ptb_sm--30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h2 className="title">Σχετικά με μας</h2>
                  <ul className="page-list">
                    <li className="rbt-breadcrumb-item">
                      <a href="/">Αρχική</a>
                    </li>
                    <li>
                      <div className="icon-right">
                        <i className="feather-chevron-right" />
                      </div>
                    </li>
                    <li className="rbt-breadcrumb-item active">
                      Σχετικά με μας
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrumb Area */}
        <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="thumbnail image-1">
                  <img
                    data-parallax='{"x": 0, "y": -20}'
                    src="/assets/images/about/logo.jpg"
                    alt="Education Images"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inner pl--50 pl_sm--0 pl_md--0">
                  <div className="section-title text-start">
                    <span className="subtitle bg-secondary-opacity">
                      Σχετικα με μας
                    </span>
                    <h2 className="title">Μάθε για την Ride with us</h2>
                  </div>
                  <p className="description mt--30">
                    Οργάνωση μονοήμερων & 2ήμερων εκδρομών. Μεταφορά με πολυτελή
                    9θέσια van. Δυνατότητα επιλογής σημείου έναρξης. Αναχωρήσεις
                    καθημερινά από Αθήνα για χιονοδρομικά κέντρα Καλαβρύτων &
                    Παρνασσού και άλλων προορισμών.
                  </p>
                  <div className="about-btn mt--40">
                    <a
                      className="rbt-btn btn-gradient hover-icon-reverse"
                      href="https://www.instagram.com/ride_withus_/"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Περισσότερα</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default About;
