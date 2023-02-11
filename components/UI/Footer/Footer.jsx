import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-style-2 ptb--20 bg-color-white">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-12">
                <div className="inner text-center">
                  <div className="footer-widget">
                    <div className="logo">
                      <a href="/">
                        <Image
                          src="/assets/images/logo/logo1.svg"
                          alt="Ride with us"
                          width={120}
                          height={120}
                        />
                      </a>
                    </div>
                    <p className="description mt-4">
                      Driven by our vision to build & inspire an engaged x-treme
                      sports community
                    </p>
                    <ul className="social-icon social-default">
                      <li>
                        <a href="https://www.facebook.com/ridewithus2023">
                          <i className="feather-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/ride_withus_/">
                          <i className="feather-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="rbt-separator-mid mt-4">
                    <div className="container">
                      <hr className="rbt-separator m-0" />
                    </div>
                  </div>
                  {/* Start Copyright Area  */}
                  <div className="copyright-area copyright-style-1 ptb--20">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                          <p className="rbt-link-hover text-center text-lg-start">
                            Copyright © 2023 <a href="/">Ride with us</a> All
                            Rights Reserved
                          </p>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                          <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                            <li>
                              <a href="/privacy-policy">Privacy policy</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Copyright Area  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
