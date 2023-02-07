import Image from "next/image";
import React from "react";

const ScrollableNavbar = () => {
  return (
    <>
      {/* Start Header Area */}
      <header className="rbt-header rbt-header-10">
        <div className="rbt-sticky-placeholder" />
        <div className="rbt-header-wrapper  header-sticky">
          <div className="container">
            <div className="mainbar-row rbt-navigation-end align-items-center">
              <div className="header-left">
                <div className="logo">
                  <a href="/">
                    <Image
                      src="/assets/images/logo/logo3.svg"
                      alt="Education Logo Images"
                      width={"140"}
                      height={"120"}
                    />
                  </a>
                </div>
              </div>
              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    <li className="with-megamenu has-menu-child-item position-static">
                      <a href="/">Αρχική</a>
                    </li>
                    <li className="has-dropdown has-menu-child-item">
                      <a href="/#events">Εκδηλώσεις</a>
                    </li>
                    <li className="with-megamenu has-menu-child-item">
                      <a href="/#activities">Δραστηριότητες</a>
                    </li>
                    <li className="with-megamenu has-menu-child-item position-static">
                      <a href="/about">Σχετικά με μας</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <div className="rbt-btn-wrapper d-none d-xl-block">
                  <a
                    className="rbt-btn btn-gradient btn-sm hover-transform-none"
                    href="#"
                  >
                    <span data-text="Join Now">Επικοινώνησε</span>
                  </a>
                </div>
                {/* Start Mobile-Menu-Bar */}
                <div className="mobile-menu-bar d-block d-xl-none">
                  <div className="hamberger">
                    <button className="hamberger-button rbt-round-btn">
                      <i className="feather-menu" />
                    </button>
                  </div>
                </div>
                {/* Start Mobile-Menu-Bar */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu Section */}
      <div className="popup-mobile-menu">
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <a href="/">
                  <Image
                    src="/assets/images/logo/logo3.svg"
                    alt="Ride with us logo"
                    width={"160"}
                    height={"70"}
                  />
                </a>
              </div>
              <div className="rbt-btn-close">
                <button className="close-button rbt-round-btn">
                  <i className="feather-x" />
                </button>
              </div>
            </div>
            <p className="description">
              Driven by our vision to build & inspire an engaged x-treme sports
              community
            </p>
            <ul className="navbar-top-left rbt-information-list justify-content-start">
              <li>
                <a href="mailto:ridewithus2023@gmail.com">
                  <i className="feather-mail" />
                  ridewithus2023@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:697 156 1249">
                  <i className="feather-phone" />
                  697 156 1249
                </a>
              </li>
            </ul>
          </div>
          <nav className="mainmenu-nav">
            <ul className="mainmenu">
              <li className="with-megamenu position-static">
                <a href="/">Αρχική</a>
              </li>
              <li className="">
                <a href="/#events">Εκδηλώσεις</a>
              </li>
              <li className="">
                <a href="/#activities">Δραστηριότητες</a>
              </li>
              <li className="">
                <a href="/about">Σχετικά με μας</a>
              </li>
            </ul>
          </nav>
          <div className="mobile-menu-bottom">
            <div className="rbt-btn-wrapper mb--20">
              <a
                className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                href="/#contact"
              >
                <span>Επικοινώνησε</span>
              </a>
            </div>
            <div className="social-share-wrapper">
              <span className="rbt-short-title d-block">Find With Us</span>
              <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollableNavbar;
