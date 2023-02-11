import React from 'react';
import Footer from '../components/UI/Footer/Footer';
import ScrollableNavbar from '../components/UI/ScrollableNavbar/ScrollableNavbar';

const Page404 = () => {
  return (
    <>
      <ScrollableNavbar />
      <div className="rbt-error-area bg-gradient-11 rbt-section-gap">
        <div className="error-area">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-10">
                <h1 className="title">404!</h1>
                <h3 className="sub-title">Η σελίδα δεν βρέθηκε</h3>
                <p>Η σελίδα που ψάχνεις δεν βρέθηκε</p>
                <a className="rbt-btn btn-gradient icon-hover" href="/">
                  <span className="btn-text">Πίσω στην αρχική</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page404;
