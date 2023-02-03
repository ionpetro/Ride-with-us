import React from "react";

const HomePage = () => {
  return (
    <div className="rbt-header-sticky">
      <header className="rbt-header rbt-header-10">
        <div className="rbt-sticky-placeholder"></div>
        {/*Start Header Top  */}
        <div className="rbt-header-top rbt-header-top-1 header-space-betwween bg-not-transparent bg-color-darker top-expended-activation">
          <div className="container-fluid">
            <div className="top-expended-wrapper">
              <div className="top-expended-inner rbt-header-sec align-items-center ">
                <div className="rbt-header-sec-col rbt-header-left d-none d-xl-block">
                  <div className="rbt-header-content">
                    {/*Start Header Information List  */}
                    <div className="header-info">
                      <ul className="rbt-information-list">
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>100k{" "}
                            <span className="d-none d-xxl-block">
                              Followers
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-square"></i>500k{" "}
                            <span className="d-none d-xxl-block">
                              Followers
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="feather-phone"></i>+1-202-555-0174
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*End Header Information List  */}
                  </div>
                </div>
                <div className="rbt-header-sec-col rbt-header-center">
                  <div className="rbt-header-content justify-content-start justify-content-xl-center">
                    <div className="header-info">
                      <div className="rbt-header-top-news">
                        <div className="inner">
                          <div className="content">
                            <span className="rbt-badge variation-02 bg-color-primary color-white radius-round">
                              Hot
                            </span>
                            <span className="news-text">
                              <img
                                src="assets/images/icons/hand-emojji.svg"
                                alt="Hand Emojji Images"
                              />{" "}
                              Intro price. Get Histudy for Big Sale -95% off.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rbt-header-sec-col rbt-header-right mt_md--10 mt_sm--10">
                  <div className="rbt-header-content justify-content-start justify-content-lg-end">
                    <div className="header-info d-none d-xl-block">
                      <ul className="social-share-transparent">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="rbt-separator d-none d-xl-block"></div>

                    <div className="header-info">
                      <ul className="rbt-dropdown-menu switcher-language">
                        <li className="has-child-menu">
                          <a href="#">
                            <img
                              className="left-image"
                              src="assets/images/icons/en-us.png"
                              alt="Language Images"
                            />
                            <span className="menu-item">English</span>

                            <i className="right-icon feather-chevron-down"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">
                                <img
                                  className="left-image"
                                  src="assets/images/icons/fr.png"
                                  alt="Language Images"
                                />
                                <span className="menu-item">Français</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  className="left-image"
                                  src="assets/images/icons/de.png"
                                  alt="Language Images"
                                />
                                <span className="menu-item">Deutsch</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div className="header-info">
                      <ul className="rbt-dropdown-menu currency-menu">
                        <li className="has-child-menu">
                          <a href="#">
                            <span className="menu-item">USD</span>
                            <i className="right-icon feather-chevron-down"></i>
                          </a>
                          <ul className="sub-menu hover-reverse">
                            <li>
                              <a href="#">
                                <span className="menu-item">EUR</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="menu-item">GBP</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-info">
                <div className="top-bar-expended d-block d-lg-none">
                  <button className="topbar-expend-button rbt-round-btn">
                    <i className="feather-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Top  */}
        <div className="rbt-header-wrapper header-space-betwween header-sticky">
          <div className="container-fluid">
            <div className="mainbar-row rbt-navigation-center align-items-center">
              <div className="header-left rbt-header-content">
                <div className="header-info">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src="assets/images/logo/logo.png"
                        alt="Education Logo Images"
                      />
                    </a>
                  </div>
                </div>
                <div className="header-info">
                  <div className="rbt-category-menu-wrapper">
                    <div className="rbt-category-btn rbt-side-offcanvas-activation">
                      <div className="rbt-offcanvas-trigger md-size icon">
                        <span className="d-none d-xl-block">
                          <i className="feather-grid"></i>
                        </span>
                        <i
                          title="Category"
                          className="feather-grid d-block d-xl-none"
                        ></i>
                      </div>
                      <span className="category-text d-none d-xl-block">
                        Category
                      </span>
                    </div>

                    <div className="category-dropdown-menu d-none d-xl-block">
                      <div className="category-menu-item">
                        <div className="rbt-vertical-nav">
                          <ul className="rbt-vertical-nav-list-wrapper vertical-nav-menu">
                            <li className="vertical-nav-item active">
                              <a href="#tab1">Course School</a>
                            </li>
                            <li className="vertical-nav-item">
                              <a href="#tab2">Online School</a>
                            </li>
                            <li className="vertical-nav-item">
                              <a href="#tab3">kindergarten</a>
                            </li>
                            <li className="vertical-nav-item">
                              <a href="#tab4">Classic LMS</a>
                            </li>
                          </ul>
                        </div>
                        <div className="rbt-vertical-nav-content">
                          {/*Start One Item  */}
                          <div
                            className="rbt-vertical-inner tab-content"
                            id="tab1"
                            style={{ display: "block" }}
                          >
                            <div className="rbt-vertical-single">
                              <div className="row">
                                <div className="col-lg-6 col-sm-6 col-6">
                                  <div className="vartical-nav-content-menu">
                                    <h3 className="rbt-short-title">
                                      Course Title
                                    </h3>
                                    <ul className="rbt-vertical-nav-list-wrapper">
                                      <li>
                                        <a href="#">Web Design</a>
                                      </li>
                                      <li>
                                        <a href="#">Art</a>
                                      </li>
                                      <li>
                                        <a href="#">Figma</a>
                                      </li>
                                      <li>
                                        <a href="#">Adobe</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-6">
                                  <div className="vartical-nav-content-menu">
                                    <h3 className="rbt-short-title">
                                      Course Title
                                    </h3>
                                    <ul className="rbt-vertical-nav-list-wrapper">
                                      <li>
                                        <a href="#">Photo</a>
                                      </li>
                                      <li>
                                        <a href="#">English</a>
                                      </li>
                                      <li>
                                        <a href="#">Math</a>
                                      </li>
                                      <li>
                                        <a href="#">Read</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*End One Item  */}
                          {/*Start One Item  */}
                          <div
                            className="rbt-vertical-inner tab-content"
                            id="tab2"
                          >
                            <div className="rbt-vertical-single">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="vartical-nav-content-menu">
                                    <h3 className="rbt-short-title">
                                      Course Title
                                    </h3>
                                    <ul className="rbt-vertical-nav-list-wrapper">
                                      <li>
                                        <a href="#">Photo</a>
                                      </li>
                                      <li>
                                        <a href="#">English</a>
                                      </li>
                                      <li>
                                        <a href="#">Math</a>
                                      </li>
                                      <li>
                                        <a href="#">Read</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="vartical-nav-content-menu">
                                    <h3 className="rbt-short-title">
                                      Course Title
                                    </h3>
                                    <ul className="rbt-vertical-nav-list-wrapper">
                                      <li>
                                        <a href="#">Web Design</a>
                                      </li>
                                      <li>
                                        <a href="#">Art</a>
                                      </li>
                                      <li>
                                        <a href="#">Figma</a>
                                      </li>
                                      <li>
                                        <a href="#">Adobe</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*End One Item  */}
                          {/*Start One Item  */}
                          <div
                            className="rbt-vertical-inner tab-content"
                            id="tab3"
                          >
                            <div className="rbt-vertical-single">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="vartical-nav-content-menu">
                                    <h3 className="rbt-short-title">
                                      Course Title
                                    </h3>
                                    <ul className="rbt-vertical-nav-list-wrapper">
                                      <li>
                                        <a href="#">Photo</a>
                                      </li>
                                      <li>
                                        <a href="#">English</a>
                                      </li>
                                      <li>
                                        <a href="#">Math</a>
                                      </li>
                                    </ul>
                                    <div className="read-more-btn">
                                      <a className="rbt-btn-link" href="#">
                                        Learn More
                                        <i className="feather-arrow-right"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*End One Item  */}
                          <div
                            className="rbt-vertical-inner tab-content"
                            id="tab4"
                          >
                            <div className="rbt-vertical-single">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="vartical-nav-content-menu">
                                    <h3 className="rbt-short-title">
                                      Course Title
                                    </h3>
                                    <ul className="rbt-vertical-nav-list-wrapper">
                                      <li>
                                        <a href="#">Photo</a>
                                      </li>
                                      <li>
                                        <a href="#">English</a>
                                      </li>
                                      <li>
                                        <a href="#">Math</a>
                                      </li>
                                      <li>
                                        <a href="#">Read</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    <li className="with-megamenu has-menu-child-item position-static">
                      <a href="#">
                        Home <i className="feather-chevron-down"></i>
                      </a>
                      {/*Start Mega Menu  */}
                      <div className="rbt-megamenu menu-skin-dark">
                        <div className="wrapper">
                          <div className="row row--15 home-plesentation-wrapper single-dropdown-menu-presentation">
                            {/*Start Single Demo  */}
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="01-main-demo.html">
                                      <img
                                        src="assets/images/splash/demo/h1.jpg"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="01-main-demo.html">
                                        Home Demo{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End Single Demo  */}
                            {/*Start Single Demo  */}
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="12-marketplace.html">
                                      <img
                                        src="assets/images/splash/demo/h12.jpg"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="12-marketplace.html">
                                        Marketplace{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End Single Demo  */}
                            {/*Start Single Demo  */}
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="04-kindergarten.html">
                                      <img
                                        src="assets/images/splash/demo/h4.jpg"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="04-kindergarten.html">
                                        kindergarten{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="13-university-classic.html">
                                      <img
                                        src="assets/images/splash/demo/h13.jpg"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="13-university-classic.html">
                                        University Classic{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End Single Demo  */}
                            {/*Start Single Demo  */}
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="14-home-elegant.html">
                                      <img
                                        src="assets/images/splash/demo/h14.jpg"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="14-home-elegant.html">
                                        Home Elegant{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*Start Single Demo  */}
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="09-gym-coaching.html">
                                      <img
                                        src="assets/images/splash/demo/h9.jpg"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="09-gym-coaching.html">
                                        Gym Coaching{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End Single Demo  */}
                            {/*Start Single Demo  */}
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="03-online-school.html">
                                      <img
                                        src="assets/images/splash/demo/h3.jpg"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="03-online-school.html">
                                        Online School{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End Single Demo  */}
                            {/*Start Single Demo  */}
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="06-university-status.html">
                                      <img
                                        src="assets/images/splash/demo/h6.jpg"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="06-university-status.html">
                                        University Status{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End Single Demo  */}
                            {/*Start Single Demo  */}
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="15-home-technology.html">
                                      <img
                                        src="assets/images/splash/demo/h15.jpg"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="15-home-technology.html">
                                        Home Technology{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End Single Demo  */}
                            {/*Start Single Demo  */}
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="07-instructor-portfolio.html">
                                      <img
                                        src="assets/images/splash/demo/h7.jpg"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="07-instructor-portfolio.html">
                                        Instructor Portfolio{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="08-language-academy.html">
                                      <img
                                        src="assets/images/splash/demo/h8.jpg"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="08-language-academy.html">
                                        Language Academy{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End Single Demo  */}
                            {/*Start Single Demo  */}
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="11-single-course.html">
                                      <img
                                        src="assets/images/splash/demo/h11.jpg"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="11-single-course.html">
                                        Single Course{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End Single Demo  */}
                            {/*Start Single Demo  */}
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="10-online-course.html">
                                      <img
                                        src="assets/images/splash/demo/h10.jpg"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="10-online-course.html">
                                        Online Course{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End Single Demo  */}
                            {/*Start Single Demo  */}
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="05-classic-lms.html">
                                      <img
                                        src="assets/images/splash/demo/h5.jpg"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="05-classic-lms.html">
                                        Classic Lms{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End Single Demo  */}
                            {/*Start Single Demo  */}
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="02-course-school.html">
                                      <img
                                        src="assets/images/splash/demo/h2.jpg"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="02-course-school.html">
                                        Course School{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End Single Demo  */}
                            {/*Start Single Demo  */}
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="#">
                                      <img
                                        src="assets/images/splash/demo/coming-soon-1.png"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="#">
                                        Coming Soon{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="#">
                                      <img
                                        src="assets/images/splash/demo/coming-soon-2.png"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="#">
                                        Coming Soon 2{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End Single Demo  */}
                            {/*Start Single Demo  */}
                            <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                              <div className="demo-single">
                                <div className="inner">
                                  <div className="thumbnail">
                                    <a href="#">
                                      <img
                                        src="assets/images/splash/demo/coming-soon-3.png"
                                        alt="Demo Images"
                                      />
                                    </a>
                                  </div>
                                  <div className="content">
                                    <h4 className="title">
                                      <a href="#">
                                        Coming Soon 3{" "}
                                        <span className="btn-icon">
                                          <i className="feather-arrow-right"></i>
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End Single Demo  */}
                          </div>

                          <div className="load-demo-btn text-center">
                            <a className="rbt-btn-link color-white" href="#">
                              Scroll to view more{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-down-up"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*End Mega Menu  */}
                    </li>

                    <li className="with-megamenu has-menu-child-item">
                      <a href="#">
                        Courses <i className="feather-chevron-down"></i>
                      </a>
                      {/*Start Mega Menu  */}
                      <div className="rbt-megamenu grid-item-2">
                        <div className="wrapper">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="mega-top-banner">
                                <div className="content">
                                  <h4 className="title">Developer hub</h4>
                                  <p className="description">
                                    Start building fast, with code samples, key
                                    resources and more.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row row--15">
                            <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                              <h3 className="rbt-short-title">Course Layout</h3>
                              <ul className="mega-menu-item">
                                <li>
                                  <a href="course-filter-one-toggle.html">
                                    Filter One Toggle
                                  </a>
                                </li>
                                <li>
                                  <a href="course-filter-one-open.html">
                                    Filter One Open
                                  </a>
                                </li>
                                <li>
                                  <a href="course-filter-two-toggle.html">
                                    Filter Two Toggle
                                  </a>
                                </li>
                                <li>
                                  <a href="course-filter-two-open.html">
                                    Filter Two Open
                                  </a>
                                </li>
                                <li>
                                  <a href="course-with-tab.html">
                                    Course With Tab
                                  </a>
                                </li>
                                <li>
                                  <a href="course-with-tab-two.html">
                                    Course With Tab Two
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                              <h3 className="rbt-short-title">Course Layout</h3>
                              <ul className="mega-menu-item">
                                <li>
                                  <a href="course-card-2.html">
                                    Course Card Two
                                  </a>
                                </li>
                                <li>
                                  <a href="course-card-3.html">
                                    Course Card Three
                                  </a>
                                </li>
                                <li>
                                  <a href="course-masonry.html">
                                    Course Masonry
                                  </a>
                                </li>
                                <li>
                                  <a href="course-with-sidebar.html">
                                    Course With Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="course-details.html">
                                    Course Details
                                  </a>
                                </li>
                                <li>
                                  <a href="course-details-2.html">
                                    Course Details Two
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <ul className="nav-quick-access">
                                <li>
                                  <a href="#">
                                    <i className="feather-folder-minus"></i>{" "}
                                    Quick Start Guide
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="feather-folder-minus"></i> For
                                    Open Source
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="feather-folder-minus"></i> API
                                    Status
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="feather-folder-minus"></i>{" "}
                                    Support
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Mega Menu  */}
                    </li>

                    <li className="has-dropdown has-menu-child-item">
                      <a href="#">
                        Dashboard
                        <i className="feather-chevron-down"></i>
                      </a>
                      <ul className="submenu">
                        <li className="has-dropdown">
                          <a href="#">Instructor Dashboard</a>
                          <ul className="submenu">
                            <li>
                              <a href="instructor-dashboard.html">Dashboard</a>
                            </li>
                            <li>
                              <a href="instructor-profile.html">Profile</a>
                            </li>
                            <li>
                              <a href="instructor-enrolled-courses.html">
                                Enrolled Courses
                              </a>
                            </li>
                            <li>
                              <a href="instructor-wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="instructor-reviews.html">Reviews</a>
                            </li>
                            <li>
                              <a href="instructor-my-quiz-attempts.html">
                                My Quiz Attempts
                              </a>
                            </li>
                            <li>
                              <a href="instructor-order-history.html">
                                Order History
                              </a>
                            </li>
                            <li>
                              <a href="instructor-course.html">My Course</a>
                            </li>
                            <li>
                              <a href="instructor-announcements.html">
                                Announcements
                              </a>
                            </li>
                            <li>
                              <a href="instructor-quiz-attempts.html">
                                Quiz Attempts
                              </a>
                            </li>
                            <li>
                              <a href="instructor-assignments.html">
                                Assignments
                              </a>
                            </li>
                            <li>
                              <a href="instructor-settings.html">Settings</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="#">Student Dashboard</a>
                          <ul className="submenu">
                            <li>
                              <a href="student-dashboard.html">Dashboard</a>
                            </li>
                            <li>
                              <a href="student-profile.html">Profile</a>
                            </li>
                            <li>
                              <a href="student-enrolled-courses.html">
                                Enrolled Courses
                              </a>
                            </li>
                            <li>
                              <a href="student-wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="student-reviews.html">Reviews</a>
                            </li>
                            <li>
                              <a href="student-my-quiz-attempts.html">
                                My Quiz Attempts
                              </a>
                            </li>
                            <li>
                              <a href="student-order-history.html">
                                Order History
                              </a>
                            </li>
                            <li>
                              <a href="student-settings.html">Settings</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li className="with-megamenu has-menu-child-item position-static">
                      <a href="#">
                        Pages <i className="feather-chevron-down"></i>
                      </a>
                      {/*Start Mega Menu  */}
                      <div className="rbt-megamenu grid-item-4">
                        <div className="wrapper">
                          <div className="row row--15">
                            <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                              <h3 className="rbt-short-title">Get Started</h3>
                              <ul className="mega-menu-item">
                                <li>
                                  <a href="about-us-01.html">About Us</a>
                                </li>
                                <li>
                                  <a href="about-us-02.html">About Us 02</a>
                                </li>
                                <li>
                                  <a href="event-grid.html">Event Grid</a>
                                </li>
                                <li>
                                  <a href="event-list.html">Event List</a>
                                </li>
                                <li>
                                  <a href="event-sidebar.html">Event Sidebar</a>
                                </li>
                                <li>
                                  <a href="event-details.html">Event Details</a>
                                </li>
                                <li>
                                  <a href="academy-gallery.html">
                                    Academy Gallery
                                  </a>
                                </li>
                                <li>
                                  <a href="admission-guide.html">
                                    Admission Guide
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                              <h3 className="rbt-short-title">Get Started</h3>
                              <ul className="mega-menu-item">
                                <li>
                                  <a href="profile.html">Profile</a>
                                </li>
                                <li>
                                  <a href="contact.html">Contact Us</a>
                                </li>
                                <li>
                                  <a href="become-a-teacher.html">
                                    Become a Teacher
                                  </a>
                                </li>
                                <li>
                                  <a href="instructor.html">Instructor</a>
                                </li>
                                <li>
                                  <a href="faqs.html">FAQS</a>
                                </li>
                                <li>
                                  <a href="privacy-policy.html">
                                    Privacy Policy
                                  </a>
                                </li>
                                <li>
                                  <a href="404.html">404 Page</a>
                                </li>
                                <li>
                                  <a href="maintenance.html">Maintenance</a>
                                </li>
                              </ul>
                            </div>

                            <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                              <h3 className="rbt-short-title">Shop Pages</h3>
                              <ul className="mega-menu-item">
                                <li>
                                  <a href="shop.html">
                                    Shop{" "}
                                    <span className="rbt-badge-card">
                                      Sale Anything
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="single-product.html">
                                    Single Product
                                  </a>
                                </li>
                                <li>
                                  <a href="cart.html">Cart Page</a>
                                </li>
                                <li>
                                  <a href="checkout.html">Checkout</a>
                                </li>
                                <li>
                                  <a href="wishlist.html">Wishlist Page</a>
                                </li>
                                <li>
                                  <a href="my-account.html">My Acount</a>
                                </li>
                                <li>
                                  <a href="login.html">Login & Register</a>
                                </li>
                                <li>
                                  <a href="subscription.html">Subscription</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                              <div className="mega-category-item">
                                {/*Start Single Category  */}
                                <div className="nav-category-item">
                                  <div className="thumbnail">
                                    <div className="image">
                                      <img
                                        src="assets/images/course/category-2.png"
                                        alt="Course images"
                                      />
                                    </div>
                                    <a href="course-filter-one-toggle.html">
                                      <span>Online Education</span>
                                      <i className="feather-chevron-right"></i>
                                    </a>
                                  </div>
                                </div>
                                {/*End Single Category  */}

                                {/*Start Single Category  */}
                                <div className="nav-category-item">
                                  <div className="thumbnail">
                                    <div className="image">
                                      <img
                                        src="assets/images/course/category-1.png"
                                        alt="Course images"
                                      />
                                    </div>
                                    <a href="course-filter-one-toggle.html">
                                      <span>Language Club</span>
                                      <i className="feather-chevron-right"></i>
                                    </a>
                                  </div>
                                </div>
                                {/*End Single Category  */}

                                {/*Start Single Category  */}
                                <div className="nav-category-item">
                                  <div className="thumbnail">
                                    <div className="image">
                                      <img
                                        src="assets/images/course/category-4.png"
                                        alt="Course images"
                                      />
                                    </div>
                                    <a href="course-filter-one-toggle.html">
                                      <span>University Status</span>
                                      <i className="feather-chevron-right"></i>
                                    </a>
                                  </div>
                                </div>
                                {/*End Single Category  */}

                                {/*Start Single Category  */}
                                <div className="nav-category-item">
                                  <div className="thumbnail">
                                    <a href="course-filter-one-toggle.html">
                                      <span>Course School</span>
                                      <i className="feather-chevron-right"></i>
                                    </a>
                                  </div>
                                </div>
                                {/*End Single Category  */}

                                {/*Start Single Category  */}
                                <div className="nav-category-item">
                                  <div className="thumbnail">
                                    <div className="image">
                                      <img
                                        src="assets/images/course/category-9.png"
                                        alt="Course images"
                                      />
                                    </div>
                                    <a href="course-filter-one-toggle.html">
                                      <span>Academy</span>
                                      <i className="feather-chevron-right"></i>
                                    </a>
                                  </div>
                                </div>
                                {/*End Single Category  */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Mega Menu  */}
                    </li>

                    <li className="with-megamenu has-menu-child-item position-static">
                      <a href="#">
                        Elements <i className="feather-chevron-down"></i>
                      </a>
                      {/*Start Mega Menu  */}
                      <div className="rbt-megamenu grid-item-3">
                        <div className="wrapper">
                          <div className="row row--15 single-dropdown-menu-presentation">
                            <div className="col-lg-4 col-xxl-4 single-mega-item">
                              <ul className="mega-menu-item">
                                <li>
                                  <a href="style-guide.html">
                                    Style Guide{" "}
                                    <span className="rbt-badge-card">Hot</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="accordion.html">Accordion</a>
                                </li>
                                <li>
                                  <a href="advancetab.html">Advance Tab</a>
                                </li>
                                <li>
                                  <a href="brand.html">Brand</a>
                                </li>
                                <li>
                                  <a href="button.html">Button</a>
                                </li>
                                <li>
                                  <a href="badge.html">Badge</a>
                                </li>
                                <li>
                                  <a href="card.html">Card</a>
                                </li>
                                <li>
                                  <a href="call-to-action.html">
                                    Call To Action
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="col-lg-4 col-xxl-4 single-mega-item">
                              <ul className="mega-menu-item">
                                <li>
                                  <a href="counterup.html">Counter</a>
                                </li>
                                <li>
                                  <a href="category.html">Categories</a>
                                </li>
                                <li>
                                  <a href="header.html">Header Style</a>
                                </li>
                                <li>
                                  <a href="newsletter.html">Newsletter</a>
                                </li>
                                <li>
                                  <a href="team.html">Team</a>
                                </li>
                                <li>
                                  <a href="social.html">Social</a>
                                </li>
                                <li>
                                  <a href="list-style.html">List Style</a>
                                </li>
                                <li>
                                  <a href="gallery.html">Gallery</a>
                                </li>
                              </ul>
                            </div>

                            <div className="col-lg-4 col-xxl-4 single-mega-item">
                              <ul className="mega-menu-item">
                                <li>
                                  <a href="pricing.html">Pricing</a>
                                </li>
                                <li>
                                  <a href="progressbar.html">Progressbar</a>
                                </li>
                                <li>
                                  <a href="testimonial.html">Testimonial</a>
                                </li>
                                <li>
                                  <a href="service.html">Service</a>
                                </li>
                                <li>
                                  <a href="split.html">Split Area</a>
                                </li>
                                <li>
                                  <a href="search.html">Search Style</a>
                                </li>
                                <li>
                                  <a href="instagram.html">Instagram Style</a>
                                </li>
                                <li>
                                  <a href="#">& More Coming</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="btn-wrapper">
                                <a
                                  className="rbt-btn btn-gradient hover-icon-reverse square btn-xl w-100 text-center mt--30 hover-transform-none"
                                  href="#"
                                >
                                  <span className="icon-reverse-wrapper">
                                    <span className="btn-text">
                                      Visit Histudy Template
                                    </span>
                                    <span className="btn-icon">
                                      <i className="feather-arrow-right"></i>
                                    </span>
                                    <span className="btn-icon">
                                      <i className="feather-arrow-right"></i>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Mega Menu  */}
                    </li>

                    <li className="with-megamenu has-menu-child-item position-static">
                      <a href="#">
                        Blog <i className="feather-chevron-down"></i>
                      </a>
                      {/*Start Mega Menu  */}
                      <div className="rbt-megamenu grid-item-3">
                        <div className="wrapper">
                          <div className="row row--15">
                            <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                              <h3 className="rbt-short-title">Blog Styles</h3>
                              <ul className="mega-menu-item">
                                <li>
                                  <a href="blog-list.html">Blog List</a>
                                </li>
                                <li>
                                  <a href="blog.html">Blog Grid</a>
                                </li>
                                <li>
                                  <a href="blog-grid-minimal.html">
                                    Blog Grid Minimal
                                  </a>
                                </li>
                                <li>
                                  <a href="blog-with-sidebar.html">
                                    Blog With Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="blog-details.html">Blog Details</a>
                                </li>
                                <li>
                                  <a href="post-format-standard.html">
                                    Post Format Standard
                                  </a>
                                </li>
                                <li>
                                  <a href="post-format-gallery.html">
                                    Post Format Gallery
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                              <h3 className="rbt-short-title">Get Started</h3>
                              <ul className="mega-menu-item">
                                <li>
                                  <a href="post-format-quote.html">
                                    Post Format Quote
                                  </a>
                                </li>
                                <li>
                                  <a href="post-format-audio.html">
                                    Post Format Audio
                                  </a>
                                </li>
                                <li>
                                  <a href="post-format-video.html">
                                    Post Format Video
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    Media Under Title{" "}
                                    <span className="rbt-badge-card">
                                      Coming
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    Sticky Sidebar{" "}
                                    <span className="rbt-badge-card">
                                      Coming
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    Auto Masonry{" "}
                                    <span className="rbt-badge-card">
                                      Coming
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    Meta Overlaid{" "}
                                    <span className="rbt-badge-card">
                                      Coming
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                              <div className="rbt-ads-wrapper">
                                <a className="d-block" href="#">
                                  <img
                                    src="assets/images/service/mobile-cat.jpg"
                                    alt="Education Images"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Mega Menu  */}
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="header-right">
                {/*Navbar Icons */}
                <ul className="quick-access">
                  <li className="access-icon">
                    <a className="search-trigger-active rbt-round-btn" href="#">
                      <i className="feather-search"></i>
                    </a>
                  </li>

                  <li className="access-icon rbt-mini-cart">
                    <a
                      className="rbt-cart-sidenav-activation rbt-round-btn"
                      href="#"
                    >
                      <i className="feather-shopping-cart"></i>
                      <span className="rbt-cart-count">4</span>
                    </a>
                  </li>

                  <li className="account-access rbt-user-wrapper d-none d-xl-block">
                    <a href="#">
                      <i className="feather-user"></i>Admin
                    </a>
                    <div className="rbt-user-menu-list-wrapper">
                      <div className="inner">
                        <div className="rbt-admin-profile">
                          <div className="admin-thumbnail">
                            <img
                              src="assets/images/team/avatar.jpg"
                              alt="User Images"
                            />
                          </div>
                          <div className="admin-info">
                            <span className="name">Nipa Bali</span>
                            <a
                              className="rbt-btn-link color-primary"
                              href="profile.html"
                            >
                              View Profile
                            </a>
                          </div>
                        </div>
                        <ul className="user-list-wrapper">
                          <li>
                            <a href="instructor-dashboard.html">
                              <i className="feather-home"></i>
                              <span>My Dashboard</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="feather-bookmark"></i>
                              <span>Bookmark</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-enrolled-courses.html">
                              <i className="feather-shopping-bag"></i>
                              <span>Enrolled Courses</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-wishlist.html">
                              <i className="feather-heart"></i>
                              <span>Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-reviews.html">
                              <i className="feather-star"></i>
                              <span>Reviews</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-my-quiz-attempts.html">
                              <i className="feather-list"></i>
                              <span>My Quiz Attempts</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-order-history.html">
                              <i className="feather-clock"></i>
                              <span>Order History</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-quiz-attempts.html">
                              <i className="feather-message-square"></i>
                              <span>Question & Answer</span>
                            </a>
                          </li>
                        </ul>
                        <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          <li>
                            <a href="#">
                              <i className="feather-book-open"></i>
                              <span>Getting Started</span>
                            </a>
                          </li>
                        </ul>
                        <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          <li>
                            <a href="instructor-settings.html">
                              <i className="feather-settings"></i>
                              <span>Settings</span>
                            </a>
                          </li>
                          <li>
                            <a href="index.html">
                              <i className="feather-log-out"></i>
                              <span>Logout</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="access-icon rbt-user-wrapper d-block d-xl-none">
                    <a className="rbt-round-btn" href="#">
                      <i className="feather-user"></i>
                    </a>
                    <div className="rbt-user-menu-list-wrapper">
                      <div className="inner">
                        <div className="rbt-admin-profile">
                          <div className="admin-thumbnail">
                            <img
                              src="assets/images/team/avatar.jpg"
                              alt="User Images"
                            />
                          </div>
                          <div className="admin-info">
                            <span className="name">Nipa Bali</span>
                            <a
                              className="rbt-btn-link color-primary"
                              href="profile.html"
                            >
                              View Profile
                            </a>
                          </div>
                        </div>
                        <ul className="user-list-wrapper">
                          <li>
                            <a href="instructor-dashboard.html">
                              <i className="feather-home"></i>
                              <span>My Dashboard</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="feather-bookmark"></i>
                              <span>Bookmark</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-enrolled-courses.html">
                              <i className="feather-shopping-bag"></i>
                              <span>Enrolled Courses</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-wishlist.html">
                              <i className="feather-heart"></i>
                              <span>Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-reviews.html">
                              <i className="feather-star"></i>
                              <span>Reviews</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-my-quiz-attempts.html">
                              <i className="feather-list"></i>
                              <span>My Quiz Attempts</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-order-history.html">
                              <i className="feather-clock"></i>
                              <span>Order History</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-quiz-attempts.html">
                              <i className="feather-message-square"></i>
                              <span>Question & Answer</span>
                            </a>
                          </li>
                        </ul>
                        <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          <li>
                            <a href="#">
                              <i className="feather-book-open"></i>
                              <span>Getting Started</span>
                            </a>
                          </li>
                        </ul>
                        <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          <li>
                            <a href="instructor-settings.html">
                              <i className="feather-settings"></i>
                              <span>Settings</span>
                            </a>
                          </li>
                          <li>
                            <a href="index.html">
                              <i className="feather-log-out"></i>
                              <span>Logout</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="rbt-btn-wrapper d-none d-xl-block">
                  <a
                    className="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
                    href="#"
                  >
                    <span data-text="Enroll Now">Enroll Now</span>
                  </a>
                </div>

                {/*Start Mobile-Menu-Bar */}
                <div className="mobile-menu-bar d-block d-xl-none">
                  <div className="hamberger">
                    <button className="hamberger-button rbt-round-btn">
                      <i className="feather-menu"></i>
                    </button>
                  </div>
                </div>
                {/*Start Mobile-Menu-Bar */}
              </div>
            </div>
          </div>
          {/*Start Search Dropdown  */}
          <div className="rbt-search-dropdown">
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                    />
                    <div className="submit-btn">
                      <a className="rbt-btn btn-gradient btn-md" href="#">
                        Search
                      </a>
                    </div>
                  </form>
                </div>
              </div>

              <div className="rbt-separator-mid">
                <hr className="rbt-separator m-0" />
              </div>

              <div className="row g-4 pt--30 pb--60">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h5 className="rbt-title-style-2">Our Top Course</h5>
                  </div>
                </div>

                {/*Start Single Card  */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="rbt-card variation-01 rbt-hover">
                    <div className="rbt-card-img">
                      <a href="course-details.html">
                        <img
                          src="assets/images/course/course-online-01.jpg"
                          alt="Card image"
                        />
                      </a>
                    </div>
                    <div className="rbt-card-body">
                      <h5 className="rbt-card-title">
                        <a href="course-details.html">React Js</a>
                      </h5>
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rating-count"> (15 Reviews)</span>
                      </div>
                      <div className="rbt-card-bottom">
                        <div className="rbt-price">
                          <span className="current-price">$15</span>
                          <span className="off-price">$25</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Single Card  */}

                {/*Start Single Card  */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="rbt-card variation-01 rbt-hover">
                    <div className="rbt-card-img">
                      <a href="course-details.html">
                        <img
                          src="assets/images/course/course-online-02.jpg"
                          alt="Card image"
                        />
                      </a>
                    </div>
                    <div className="rbt-card-body">
                      <h5 className="rbt-card-title">
                        <a href="course-details.html">Java Program</a>
                      </h5>
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rating-count"> (15 Reviews)</span>
                      </div>
                      <div className="rbt-card-bottom">
                        <div className="rbt-price">
                          <span className="current-price">$10</span>
                          <span className="off-price">$40</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Single Card  */}

                {/*Start Single Card  */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="rbt-card variation-01 rbt-hover">
                    <div className="rbt-card-img">
                      <a href="course-details.html">
                        <img
                          src="assets/images/course/course-online-03.jpg"
                          alt="Card image"
                        />
                      </a>
                    </div>
                    <div className="rbt-card-body">
                      <h5 className="rbt-card-title">
                        <a href="course-details.html">Web Design</a>
                      </h5>
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rating-count"> (15 Reviews)</span>
                      </div>
                      <div className="rbt-card-bottom">
                        <div className="rbt-price">
                          <span className="current-price">$10</span>
                          <span className="off-price">$20</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Single Card  */}

                {/*Start Single Card  */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="rbt-card variation-01 rbt-hover">
                    <div className="rbt-card-img">
                      <a href="course-details.html">
                        <img
                          src="assets/images/course/course-online-04.jpg"
                          alt="Card image"
                        />
                      </a>
                    </div>
                    <div className="rbt-card-body">
                      <h5 className="rbt-card-title">
                        <a href="course-details.html">Web Design</a>
                      </h5>
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rating-count"> (15 Reviews)</span>
                      </div>
                      <div className="rbt-card-bottom">
                        <div className="rbt-price">
                          <span className="current-price">$20</span>
                          <span className="off-price">$40</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Single Card  */}
              </div>
            </div>
          </div>
          {/*End Search Dropdown  */}
        </div>
        {/*Start Side Vav */}
        <div className="rbt-offcanvas-side-menu rbt-category-sidemenu">
          <div className="inner-wrapper">
            <div className="inner-top">
              <div className="inner-title">
                <h4 className="title">Course Category</h4>
              </div>
              <div className="rbt-btn-close">
                <button className="rbt-close-offcanvas rbt-round-btn">
                  <i className="feather-x"></i>
                </button>
              </div>
            </div>
            <nav className="side-nav w-100">
              <ul className="rbt-vertical-nav-list-wrapper vertical-nav-menu">
                <li className="vertical-nav-item">
                  <a href="#">Course School</a>
                  <div className="vartical-nav-content-menu-wrapper">
                    <div className="vartical-nav-content-menu">
                      <h3 className="rbt-short-title">Course Title</h3>
                      <ul className="rbt-vertical-nav-list-wrapper">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">Art</a>
                        </li>
                        <li>
                          <a href="#">Figma</a>
                        </li>
                        <li>
                          <a href="#">Adobe</a>
                        </li>
                      </ul>
                    </div>
                    <div className="vartical-nav-content-menu">
                      <h3 className="rbt-short-title">Course Title</h3>
                      <ul className="rbt-vertical-nav-list-wrapper">
                        <li>
                          <a href="#">Photo</a>
                        </li>
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">Math</a>
                        </li>
                        <li>
                          <a href="#">Read</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="vertical-nav-item">
                  <a href="#">Online School</a>
                  <div className="vartical-nav-content-menu-wrapper">
                    <div className="vartical-nav-content-menu">
                      <h3 className="rbt-short-title">Course Title</h3>
                      <ul className="rbt-vertical-nav-list-wrapper">
                        <li>
                          <a href="#">Photo</a>
                        </li>
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">Math</a>
                        </li>
                        <li>
                          <a href="#">Read</a>
                        </li>
                      </ul>
                    </div>
                    <div className="vartical-nav-content-menu">
                      <h3 className="rbt-short-title">Course Title</h3>
                      <ul className="rbt-vertical-nav-list-wrapper">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">Art</a>
                        </li>
                        <li>
                          <a href="#">Figma</a>
                        </li>
                        <li>
                          <a href="#">Adobe</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="vertical-nav-item">
                  <a href="#">kindergarten</a>
                  <div className="vartical-nav-content-menu-wrapper">
                    <div className="vartical-nav-content-menu">
                      <h3 className="rbt-short-title">Course Title</h3>
                      <ul className="rbt-vertical-nav-list-wrapper">
                        <li>
                          <a href="#">Photo</a>
                        </li>
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">Math</a>
                        </li>
                        <li>
                          <a href="#">Read</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="vertical-nav-item">
                  <a href="#">Classic LMS</a>
                  <div className="vartical-nav-content-menu-wrapper">
                    <div className="vartical-nav-content-menu">
                      <h3 className="rbt-short-title">Course Title</h3>
                      <ul className="rbt-vertical-nav-list-wrapper">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">Art</a>
                        </li>
                        <li>
                          <a href="#">Figma</a>
                        </li>
                        <li>
                          <a href="#">Adobe</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="read-more-btn">
                <div className="rbt-btn-wrapper mt--20">
                  <a
                    className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                    href="#"
                  >
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </nav>
            <div className="rbt-offcanvas-footer"></div>
          </div>
        </div>
        {/*End Side Vav */}
        <a className="rbt-close_side_menu"></a>
      </header>
      {/*Mobile Menu Section */}
      <div className="popup-mobile-menu">
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="assets/images/logo/logo.png"
                    alt="Education Logo Images"
                  />
                </a>
              </div>
              <div className="rbt-btn-close">
                <button className="close-button rbt-round-btn">
                  <i className="feather-x"></i>
                </button>
              </div>
            </div>
            <p className="description">
              Histudy is a education website template. You can customize all.
            </p>
            <ul className="navbar-top-left rbt-information-list justify-content-start">
              <li>
                <a href="mailto:hello@example.com">
                  <i className="feather-mail"></i>example@gmail.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="feather-phone"></i>(302) 555-0107
                </a>
              </li>
            </ul>
          </div>

          <nav className="mainmenu-nav">
            <ul className="mainmenu">
              <li className="with-megamenu has-menu-child-item position-static">
                <a href="#">
                  Home <i className="feather-chevron-down"></i>
                </a>
                {/*Start Mega Menu  */}
                <div className="rbt-megamenu menu-skin-dark">
                  <div className="wrapper">
                    <div className="row row--15 home-plesentation-wrapper single-dropdown-menu-presentation">
                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="01-main-demo.html">
                                <img
                                  src="assets/images/splash/demo/h1.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="01-main-demo.html">
                                  Home Demo{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}

                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="12-marketplace.html">
                                <img
                                  src="assets/images/splash/demo/h12.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="12-marketplace.html">
                                  Marketplace{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}
                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="04-kindergarten.html">
                                <img
                                  src="assets/images/splash/demo/h4.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="04-kindergarten.html">
                                  kindergarten{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}
                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="13-university-classic.html">
                                <img
                                  src="assets/images/splash/demo/h13.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="13-university-classic.html">
                                  University Classic{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}

                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="14-home-elegant.html">
                                <img
                                  src="assets/images/splash/demo/h14.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="14-home-elegant.html">
                                  Home Elegant{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}

                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="09-gym-coaching.html">
                                <img
                                  src="assets/images/splash/demo/h9.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="09-gym-coaching.html">
                                  Gym Coaching{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}

                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="03-online-school.html">
                                <img
                                  src="assets/images/splash/demo/h3.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="03-online-school.html">
                                  Online School{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}

                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="06-university-status.html">
                                <img
                                  src="assets/images/splash/demo/h6.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="06-university-status.html">
                                  University Status{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}

                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="15-home-technology.html">
                                <img
                                  src="assets/images/splash/demo/h15.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="15-home-technology.html">
                                  Home Technology{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}

                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="07-instructor-portfolio.html">
                                <img
                                  src="assets/images/splash/demo/h7.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="07-instructor-portfolio.html">
                                  Instructor Portfolio{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}

                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="08-language-academy.html">
                                <img
                                  src="assets/images/splash/demo/h8.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="08-language-academy.html">
                                  Language Academy{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}

                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="11-single-course.html">
                                <img
                                  src="assets/images/splash/demo/h11.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="11-single-course.html">
                                  Single Course{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}

                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="10-online-course.html">
                                <img
                                  src="assets/images/splash/demo/h10.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="10-online-course.html">
                                  Online Course{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}

                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="05-classic-lms.html">
                                <img
                                  src="assets/images/splash/demo/h5.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="05-classic-lms.html">
                                  Classic Lms{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}

                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="02-course-school.html">
                                <img
                                  src="assets/images/splash/demo/h2.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="02-course-school.html">
                                  Course School{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}

                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="#">
                                <img
                                  src="assets/images/splash/demo/coming-soon-1.png"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="#">
                                  Coming Soon{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}

                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="#">
                                <img
                                  src="assets/images/splash/demo/coming-soon-2.png"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="#">
                                  Coming Soon 2{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}

                      {/*Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="#">
                                <img
                                  src="assets/images/splash/demo/coming-soon-3.png"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="#">
                                  Coming Soon 3{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Demo  */}
                    </div>

                    <div className="load-demo-btn text-center">
                      <a className="rbt-btn-link color-white" href="#">
                        Scroll to view more{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-down-up"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                {/*End Mega Menu  */}
              </li>

              <li className="with-megamenu has-menu-child-item">
                <a href="#">
                  Courses <i className="feather-chevron-down"></i>
                </a>
                {/*Start Mega Menu  */}
                <div className="rbt-megamenu grid-item-2">
                  <div className="wrapper">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mega-top-banner">
                          <div className="content">
                            <h4 className="title">Developer hub</h4>
                            <p className="description">
                              Start building fast, with code samples, key
                              resources and more.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row row--15">
                      <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                        <h3 className="rbt-short-title">Course Layout</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="course-filter-one-toggle.html">
                              Filter One Toggle
                            </a>
                          </li>
                          <li>
                            <a href="course-filter-one-open.html">
                              Filter One Open
                            </a>
                          </li>
                          <li>
                            <a href="course-filter-two-toggle.html">
                              Filter Two Toggle
                            </a>
                          </li>
                          <li>
                            <a href="course-filter-two-open.html">
                              Filter Two Open
                            </a>
                          </li>
                          <li>
                            <a href="course-with-tab.html">Course With Tab</a>
                          </li>
                          <li>
                            <a href="course-with-tab-two.html">
                              Course With Tab Two
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                        <h3 className="rbt-short-title">Course Layout</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="course-card-2.html">Course Card Two</a>
                          </li>
                          <li>
                            <a href="course-card-3.html">Course Card Three</a>
                          </li>
                          <li>
                            <a href="course-masonry.html">Course Masonry</a>
                          </li>
                          <li>
                            <a href="course-with-sidebar.html">
                              Course With Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="course-details.html">Course Details</a>
                          </li>
                          <li>
                            <a href="course-details-2.html">
                              Course Details Two
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="nav-quick-access">
                          <li>
                            <a href="#">
                              <i className="feather-folder-minus"></i> Quick
                              Start Guide
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="feather-folder-minus"></i> For Open
                              Source
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="feather-folder-minus"></i> API
                              Status
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="feather-folder-minus"></i> Support
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Mega Menu  */}
              </li>

              <li className="has-dropdown has-menu-child-item">
                <a href="#">
                  Dashboard
                  <i className="feather-chevron-down"></i>
                </a>
                <ul className="submenu">
                  <li className="has-dropdown">
                    <a href="#">Instructor Dashboard</a>
                    <ul className="submenu">
                      <li>
                        <a href="instructor-dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="instructor-profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="instructor-enrolled-courses.html">
                          Enrolled Courses
                        </a>
                      </li>
                      <li>
                        <a href="instructor-wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="instructor-reviews.html">Reviews</a>
                      </li>
                      <li>
                        <a href="instructor-my-quiz-attempts.html">
                          My Quiz Attempts
                        </a>
                      </li>
                      <li>
                        <a href="instructor-order-history.html">
                          Order History
                        </a>
                      </li>
                      <li>
                        <a href="instructor-course.html">My Course</a>
                      </li>
                      <li>
                        <a href="instructor-announcements.html">
                          Announcements
                        </a>
                      </li>
                      <li>
                        <a href="instructor-quiz-attempts.html">
                          Quiz Attempts
                        </a>
                      </li>
                      <li>
                        <a href="instructor-assignments.html">Assignments</a>
                      </li>
                      <li>
                        <a href="instructor-settings.html">Settings</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="#">Student Dashboard</a>
                    <ul className="submenu">
                      <li>
                        <a href="student-dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="student-profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="student-enrolled-courses.html">
                          Enrolled Courses
                        </a>
                      </li>
                      <li>
                        <a href="student-wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="student-reviews.html">Reviews</a>
                      </li>
                      <li>
                        <a href="student-my-quiz-attempts.html">
                          My Quiz Attempts
                        </a>
                      </li>
                      <li>
                        <a href="student-order-history.html">Order History</a>
                      </li>
                      <li>
                        <a href="student-settings.html">Settings</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="with-megamenu has-menu-child-item position-static">
                <a href="#">
                  Pages <i className="feather-chevron-down"></i>
                </a>
                {/*Start Mega Menu  */}
                <div className="rbt-megamenu grid-item-4">
                  <div className="wrapper">
                    <div className="row row--15">
                      <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                        <h3 className="rbt-short-title">Get Started</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="about-us-01.html">About Us</a>
                          </li>
                          <li>
                            <a href="about-us-02.html">About Us 02</a>
                          </li>
                          <li>
                            <a href="event-grid.html">Event Grid</a>
                          </li>
                          <li>
                            <a href="event-list.html">Event List</a>
                          </li>
                          <li>
                            <a href="event-sidebar.html">Event Sidebar</a>
                          </li>
                          <li>
                            <a href="event-details.html">Event Details</a>
                          </li>
                          <li>
                            <a href="academy-gallery.html">Academy Gallery</a>
                          </li>
                          <li>
                            <a href="admission-guide.html">Admission Guide</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                        <h3 className="rbt-short-title">Get Started</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="profile.html">Profile</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="become-a-teacher.html">Become a Teacher</a>
                          </li>
                          <li>
                            <a href="instructor.html">Instructor</a>
                          </li>
                          <li>
                            <a href="faqs.html">FAQS</a>
                          </li>
                          <li>
                            <a href="privacy-policy.html">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="404.html">404 Page</a>
                          </li>
                          <li>
                            <a href="maintenance.html">Maintenance</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                        <h3 className="rbt-short-title">Shop Pages</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="shop.html">
                              Shop{" "}
                              <span className="rbt-badge-card">
                                Sale Anything
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product.html">Single Product</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart Page</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist Page</a>
                          </li>
                          <li>
                            <a href="my-account.html">My Acount</a>
                          </li>
                          <li>
                            <a href="login.html">Login & Register</a>
                          </li>
                          <li>
                            <a href="subscription.html">Subscription</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                        <div className="mega-category-item">
                          {/*Start Single Category  */}
                          <div className="nav-category-item">
                            <div className="thumbnail">
                              <div className="image">
                                <img
                                  src="assets/images/course/category-2.png"
                                  alt="Course images"
                                />
                              </div>
                              <a href="course-filter-one-toggle.html">
                                <span>Online Education</span>
                                <i className="feather-chevron-right"></i>
                              </a>
                            </div>
                          </div>
                          {/*End Single Category  */}

                          {/*Start Single Category  */}
                          <div className="nav-category-item">
                            <div className="thumbnail">
                              <div className="image">
                                <img
                                  src="assets/images/course/category-1.png"
                                  alt="Course images"
                                />
                              </div>
                              <a href="course-filter-one-toggle.html">
                                <span>Language Club</span>
                                <i className="feather-chevron-right"></i>
                              </a>
                            </div>
                          </div>
                          {/*End Single Category  */}

                          {/*Start Single Category  */}
                          <div className="nav-category-item">
                            <div className="thumbnail">
                              <div className="image">
                                <img
                                  src="assets/images/course/category-4.png"
                                  alt="Course images"
                                />
                              </div>
                              <a href="course-filter-one-toggle.html">
                                <span>University Status</span>
                                <i className="feather-chevron-right"></i>
                              </a>
                            </div>
                          </div>
                          {/*End Single Category  */}

                          {/*Start Single Category  */}
                          <div className="nav-category-item">
                            <div className="thumbnail">
                              <a href="course-filter-one-toggle.html">
                                <span>Course School</span>
                                <i className="feather-chevron-right"></i>
                              </a>
                            </div>
                          </div>
                          {/*End Single Category  */}

                          {/*Start Single Category  */}
                          <div className="nav-category-item">
                            <div className="thumbnail">
                              <div className="image">
                                <img
                                  src="assets/images/course/category-9.png"
                                  alt="Course images"
                                />
                              </div>
                              <a href="course-filter-one-toggle.html">
                                <span>Academy</span>
                                <i className="feather-chevron-right"></i>
                              </a>
                            </div>
                          </div>
                          {/*End Single Category  */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Mega Menu  */}
              </li>

              <li className="with-megamenu has-menu-child-item position-static">
                <a href="#">
                  Elements <i className="feather-chevron-down"></i>
                </a>
                {/*Start Mega Menu  */}
                <div className="rbt-megamenu grid-item-3">
                  <div className="wrapper">
                    <div className="row row--15 single-dropdown-menu-presentation">
                      <div className="col-lg-4 col-xxl-4 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                            <a href="style-guide.html">
                              Style Guide{" "}
                              <span className="rbt-badge-card">Hot</span>
                            </a>
                          </li>
                          <li>
                            <a href="accordion.html">Accordion</a>
                          </li>
                          <li>
                            <a href="advancetab.html">Advance Tab</a>
                          </li>
                          <li>
                            <a href="brand.html">Brand</a>
                          </li>
                          <li>
                            <a href="button.html">Button</a>
                          </li>
                          <li>
                            <a href="badge.html">Badge</a>
                          </li>
                          <li>
                            <a href="card.html">Card</a>
                          </li>
                          <li>
                            <a href="call-to-action.html">Call To Action</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-4 col-xxl-4 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                            <a href="counterup.html">Counter</a>
                          </li>
                          <li>
                            <a href="category.html">Categories</a>
                          </li>
                          <li>
                            <a href="header.html">Header Style</a>
                          </li>
                          <li>
                            <a href="newsletter.html">Newsletter</a>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="social.html">Social</a>
                          </li>
                          <li>
                            <a href="list-style.html">List Style</a>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-4 col-xxl-4 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                            <a href="pricing.html">Pricing</a>
                          </li>
                          <li>
                            <a href="progressbar.html">Progressbar</a>
                          </li>
                          <li>
                            <a href="testimonial.html">Testimonial</a>
                          </li>
                          <li>
                            <a href="service.html">Service</a>
                          </li>
                          <li>
                            <a href="split.html">Split Area</a>
                          </li>
                          <li>
                            <a href="search.html">Search Style</a>
                          </li>
                          <li>
                            <a href="instagram.html">Instagram Style</a>
                          </li>
                          <li>
                            <a href="#">& More Coming</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="btn-wrapper">
                          <a
                            className="rbt-btn btn-gradient hover-icon-reverse square btn-xl w-100 text-center mt--30 hover-transform-none"
                            href="#"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">
                                Visit Histudy Template
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Mega Menu  */}
              </li>

              <li className="with-megamenu has-menu-child-item position-static">
                <a href="#">
                  Blog <i className="feather-chevron-down"></i>
                </a>
                {/*Start Mega Menu  */}
                <div className="rbt-megamenu grid-item-3">
                  <div className="wrapper">
                    <div className="row row--15">
                      <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                        <h3 className="rbt-short-title">Blog Styles</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="blog-list.html">Blog List</a>
                          </li>
                          <li>
                            <a href="blog.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-grid-minimal.html">
                              Blog Grid Minimal
                            </a>
                          </li>
                          <li>
                            <a href="blog-with-sidebar.html">
                              Blog With Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="post-format-standard.html">
                              Post Format Standard
                            </a>
                          </li>
                          <li>
                            <a href="post-format-gallery.html">
                              Post Format Gallery
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                        <h3 className="rbt-short-title">Get Started</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="post-format-quote.html">
                              Post Format Quote
                            </a>
                          </li>
                          <li>
                            <a href="post-format-audio.html">
                              Post Format Audio
                            </a>
                          </li>
                          <li>
                            <a href="post-format-video.html">
                              Post Format Video
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Media Under Title{" "}
                              <span className="rbt-badge-card">Coming</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Sticky Sidebar{" "}
                              <span className="rbt-badge-card">Coming</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Auto Masonry{" "}
                              <span className="rbt-badge-card">Coming</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Meta Overlaid{" "}
                              <span className="rbt-badge-card">Coming</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                        <div className="rbt-ads-wrapper">
                          <a className="d-block" href="#">
                            <img
                              src="assets/images/service/mobile-cat.jpg"
                              alt="Education Images"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Mega Menu  */}
              </li>
            </ul>
          </nav>

          <div className="mobile-menu-bottom">
            <div className="rbt-btn-wrapper mb--20">
              <a
                className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                href="#"
              >
                <span>Enroll Now</span>
              </a>
            </div>

            <div className="social-share-wrapper">
              <span className="rbt-short-title d-block">Find With Us</span>
              <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="feather-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <i className="feather-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="feather-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkdin.com/">
                    <i className="feather-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*Start Side Vav */}
      <div className="rbt-cart-side-menu">
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="title">
                <h4 className="title mb--0">Your shopping cart</h4>
              </div>
              <div className="rbt-btn-close" id="btn_sideNavClose">
                <button className="minicart-close-button rbt-round-btn">
                  <i className="feather-x"></i>
                </button>
              </div>
            </div>
          </div>
          <nav className="side-nav w-100">
            <ul className="rbt-minicart-wrapper">
              <li className="minicart-item">
                <div className="thumbnail">
                  <a href="#">
                    <img
                      src="assets/images/product/1.jpg"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    <a href="single-product.html">Miracle Morning</a>
                  </h6>

                  <span className="quantity">
                    1 * <span className="price">$22</span>
                  </span>
                </div>
                <div className="close-btn">
                  <button className="rbt-round-btn">
                    <i className="feather-x"></i>
                  </button>
                </div>
              </li>

              <li className="minicart-item">
                <div className="thumbnail">
                  <a href="#">
                    <img
                      src="assets/images/product/7.jpg"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    <a href="single-product.html">Happy Strong</a>
                  </h6>

                  <span className="quantity">
                    1 * <span className="price">$30</span>
                  </span>
                </div>
                <div className="close-btn">
                  <button className="rbt-round-btn">
                    <i className="feather-x"></i>
                  </button>
                </div>
              </li>

              <li className="minicart-item">
                <div className="thumbnail">
                  <a href="#">
                    <img
                      src="assets/images/product/3.jpg"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    <a href="single-product.html">Rich Dad Poor Dad</a>
                  </h6>

                  <span className="quantity">
                    1 * <span className="price">$50</span>
                  </span>
                </div>
                <div className="close-btn">
                  <button className="rbt-round-btn">
                    <i className="feather-x"></i>
                  </button>
                </div>
              </li>

              <li className="minicart-item">
                <div className="thumbnail">
                  <a href="#">
                    <img
                      src="assets/images/product/4.jpg"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    <a href="single-product.html">Momentum Theorem</a>
                  </h6>

                  <span className="quantity">
                    1 * <span className="price">$50</span>
                  </span>
                </div>
                <div className="close-btn">
                  <button className="rbt-round-btn">
                    <i className="feather-x"></i>
                  </button>
                </div>
              </li>
            </ul>
          </nav>

          <div className="rbt-minicart-footer">
            <hr className="mb--0" />
            <div className="rbt-cart-subttotal">
              <p className="subtotal">
                <strong>Subtotal:</strong>
              </p>
              <p className="price">$121</p>
            </div>
            <hr className="mb--0" />
            <div className="rbt-minicart-bottom mt--20">
              <div className="view-cart-btn">
                <a
                  className="rbt-btn btn-border icon-hover w-100 text-center"
                  href="#"
                >
                  <span className="btn-text">View Cart</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </a>
              </div>
              <div className="checkout-btn mt--20">
                <a
                  className="rbt-btn btn-gradient icon-hover w-100 text-center"
                  href="#"
                >
                  <span className="btn-text">Checkout</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Side Vav */}
      <a className="close_side_menu" href="javascript:void(0);"></a>

      <main className="rbt-main-wrapper">
        {/*Start Banner Area */}
        <div className="rbt-banner-area rbt-banner-1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 pb--120 pt--70">
                <div className="content">
                  <div className="inner">
                    <div className="rbt-new-badge rbt-new-badge-one">
                      <span className="rbt-new-badge-icon">🏆</span> The Leader
                      in Online Learning
                    </div>

                    <h1 className="title">
                      Build The Skills <br /> To Drive Your Career.
                    </h1>
                    <p className="description">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                      <strong>Velit officia consequat.</strong>
                    </p>
                    <div className="slider-btn">
                      <a
                        className="rbt-btn btn-gradient hover-icon-reverse"
                        href="#"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">View Course</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="shape-wrapper" id="scene">
                    <img
                      src="assets/images/banner/banner-01.png"
                      alt="Hero Image"
                    />
                    <div className="hero-bg-shape-1 layer" data-depth="0.4">
                      <img
                        src="assets/images/shape/shape-01.png"
                        alt="Hero Image Background Shape"
                      />
                    </div>
                    <div className="hero-bg-shape-2 layer" data-depth="0.4">
                      <img
                        src="assets/images/shape/shape-02.png"
                        alt="Hero Image Background Shape"
                      />
                    </div>
                  </div>

                  <div className="banner-card pb--60 mb--50 swiper rbt-dot-bottom-center banner-swiper-active">
                    <div className="swiper-wrapper">
                      {/*Start Single Card  */}
                      <div className="swiper-slide">
                        <div className="rbt-card variation-01 rbt-hover">
                          <div className="rbt-card-img">
                            <a href="course-details.html">
                              <img
                                src="assets/images/course/course-01.jpg"
                                alt="Card image"
                              />
                              <div className="rbt-badge-3 bg-white">
                                <span>-40%</span>
                                <span>Off</span>
                              </div>
                            </a>
                          </div>
                          <div className="rbt-card-body">
                            <ul className="rbt-meta">
                              <li>
                                <i className="feather-book"></i>12 Lessons
                              </li>
                              <li>
                                <i className="feather-users"></i>50 Students
                              </li>
                            </ul>
                            <h4 className="rbt-card-title">
                              <a href="course-details.html">React</a>
                            </h4>
                            <p className="rbt-card-text">
                              It is a long established fact that a reader will
                              be distracted.
                            </p>
                            <div className="rbt-review">
                              <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <span className="rating-count">
                                {" "}
                                (15 Reviews)
                              </span>
                            </div>
                            <div className="rbt-card-bottom">
                              <div className="rbt-price">
                                <span className="current-price">$70</span>
                                <span className="off-price">$120</span>
                              </div>
                              <a
                                className="rbt-btn-link"
                                href="course-details.html"
                              >
                                Learn More
                                <i className="feather-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Card  */}

                      {/*Start Single Card  */}
                      <div className="swiper-slide">
                        <div className="rbt-card variation-01 rbt-hover">
                          <div className="rbt-card-img">
                            <a href="course-details.html">
                              <img
                                src="assets/images/course/classic-lms-01.jpg"
                                alt="Card image"
                              />
                              <div className="rbt-badge-3 bg-white">
                                <span>-40%</span>
                                <span>Off</span>
                              </div>
                            </a>
                          </div>
                          <div className="rbt-card-body">
                            <ul className="rbt-meta">
                              <li>
                                <i className="feather-book"></i>12 Lessons
                              </li>
                              <li>
                                <i className="feather-users"></i>50 Students
                              </li>
                            </ul>
                            <h4 className="rbt-card-title">
                              <a href="course-details.html">React</a>
                            </h4>
                            <p className="rbt-card-text">
                              It is a long established fact that a reader will
                              be distracted.
                            </p>
                            <div className="rbt-review">
                              <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <span className="rating-count">
                                {" "}
                                (15 Reviews)
                              </span>
                            </div>
                            <div className="rbt-card-bottom">
                              <div className="rbt-price">
                                <span className="current-price">$70</span>
                                <span className="off-price">$120</span>
                              </div>
                              <a
                                className="rbt-btn-link"
                                href="course-details.html"
                              >
                                Learn More
                                <i className="feather-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Card  */}

                      {/*Start Single Card  */}
                      <div className="swiper-slide">
                        <div className="rbt-card variation-01 rbt-hover">
                          <div className="rbt-card-img">
                            <a href="course-details.html">
                              <img
                                src="assets/images/course/course-online-02.jpg"
                                alt="Card image"
                              />
                              <div className="rbt-badge-3 bg-white">
                                <span>-40%</span>
                                <span>Off</span>
                              </div>
                            </a>
                          </div>
                          <div className="rbt-card-body">
                            <ul className="rbt-meta">
                              <li>
                                <i className="feather-book"></i>12 Lessons
                              </li>
                              <li>
                                <i className="feather-users"></i>50 Students
                              </li>
                            </ul>
                            <h4 className="rbt-card-title">
                              <a href="course-details.html">React</a>
                            </h4>
                            <p className="rbt-card-text">
                              It is a long established fact that a reader will
                              be distracted.
                            </p>
                            <div className="rbt-review">
                              <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <span className="rating-count">
                                {" "}
                                (15 Reviews)
                              </span>
                            </div>
                            <div className="rbt-card-bottom">
                              <div className="rbt-price">
                                <span className="current-price">$70</span>
                                <span className="off-price">$120</span>
                              </div>
                              <a
                                className="rbt-btn-link"
                                href="course-details.html"
                              >
                                Learn More
                                <i className="feather-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Single Card  */}
                    </div>
                    <div className="rbt-swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Banner Area */}

        <div className="rbt-categories-area bg-color-white rbt-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    CATEGORIES
                  </span>
                  <h2 className="title">
                    Explore Top Courses Caterories <br /> That Change Yourself
                  </h2>
                </div>
              </div>
            </div>
            <div className="row g-5 mt--20">
              {/*Start Category Box Layout  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <a
                  className="rbt-cat-box rbt-cat-box-1 text-center"
                  href="course-filter-one-toggle.html"
                >
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/category/web-design.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">Web Design</h5>
                      <div className="read-more-btn">
                        <span className="rbt-btn-link">
                          25 Courses<i className="feather-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/*End Category Box Layout  */}

              {/*Start Category Box Layout  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <a
                  className="rbt-cat-box rbt-cat-box-1 text-center"
                  href="course-filter-one-toggle.html"
                >
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/category/design.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">Graphic Design</h5>
                      <div className="read-more-btn">
                        <span className="rbt-btn-link">
                          30 Courses<i className="feather-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/*End Category Box Layout  */}

              {/*Start Category Box Layout  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <a
                  className="rbt-cat-box rbt-cat-box-1 text-center"
                  href="course-filter-one-toggle.html"
                >
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/category/personal.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">Personal Development</h5>
                      <div className="read-more-btn">
                        <span className="rbt-btn-link">
                          20 Courses<i className="feather-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/*End Category Box Layout  */}

              {/*Start Category Box Layout  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <a
                  className="rbt-cat-box rbt-cat-box-1 text-center"
                  href="course-filter-one-toggle.html"
                >
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/category/server.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">IT and Software</h5>
                      <div className="read-more-btn">
                        <span className="rbt-btn-link">
                          15 Courses<i className="feather-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/*End Category Box Layout  */}

              {/*Start Category Box Layout  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <a
                  className="rbt-cat-box rbt-cat-box-1 text-center"
                  href="course-filter-one-toggle.html"
                >
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/category/pantone.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">Sales Marketing</h5>
                      <div className="read-more-btn">
                        <span className="rbt-btn-link">
                          15 Courses<i className="feather-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/*End Category Box Layout  */}

              {/*Start Category Box Layout  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <a
                  className="rbt-cat-box rbt-cat-box-1 text-center"
                  href="course-filter-one-toggle.html"
                >
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/category/paint-palette.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">Art & Humanities</h5>
                      <div className="read-more-btn">
                        <span className="rbt-btn-link">
                          15 Courses<i className="feather-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/*End Category Box Layout  */}

              {/*Start Category Box Layout  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <a
                  className="rbt-cat-box rbt-cat-box-1 text-center"
                  href="course-filter-one-toggle.html"
                >
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/category/smartphone.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">Mobile Application</h5>
                      <div className="read-more-btn">
                        <span className="rbt-btn-link">
                          15 Courses<i className="feather-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/*End Category Box Layout  */}

              {/*Start Category Box Layout  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <a
                  className="rbt-cat-box rbt-cat-box-1 text-center"
                  href="course-filter-one-toggle.html"
                >
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/category/infographic.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title">Finance & Accounting</h5>
                      <div className="read-more-btn">
                        <span className="rbt-btn-link">
                          15 Courses<i className="feather-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/*End Category Box Layout  */}
            </div>
          </div>
        </div>

        {/*Start Course Area */}
        <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-secondary-opacity">
                    Top Popular Course
                  </span>
                  <h2 className="title">
                    Histudy Course student <br /> can join with us.
                  </h2>
                </div>
              </div>
            </div>
            {/*Start Card Area */}
            <div className="row g-5">
              {/*Start Single Course  */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rbt-card variation-01 rbt-hover">
                  <div className="rbt-card-img">
                    <a href="course-details.html">
                      <img
                        src="assets/images/course/course-01.jpg"
                        alt="Card image"
                      />
                      <div className="rbt-badge-3 bg-white">
                        <span>-50%</span>
                        <span>Off</span>
                      </div>
                    </a>
                  </div>
                  <div className="rbt-card-body">
                    <div className="rbt-card-top">
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rating-count"> (15 Reviews)</span>
                      </div>
                      <div className="rbt-bookmark-btn">
                        <a className="rbt-round-btn" title="Bookmark" href="#">
                          <i className="feather-bookmark"></i>
                        </a>
                      </div>
                    </div>

                    <h4 className="rbt-card-title">
                      <a href="course-details.html">React Front To Back</a>
                    </h4>
                    <ul className="rbt-meta">
                      <li>
                        <i className="feather-book"></i>20 Lessons
                      </li>
                      <li>
                        <i className="feather-users"></i>40 Students
                      </li>
                    </ul>
                    <p className="rbt-card-text">
                      React Js long fact that a reader will be distracted by the
                      readable.
                    </p>
                    <div className="rbt-author-meta mb--20">
                      <div className="rbt-avater">
                        <a href="#">
                          <img
                            src="assets/images/client/avater-01.png"
                            alt="Sophia Jaymes"
                          />
                        </a>
                      </div>
                      <div className="rbt-author-info">
                        By <a href="profile.html">Patrick</a> In{" "}
                        <a href="#">Languages</a>
                      </div>
                    </div>

                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">$60</span>
                        <span className="off-price">$120</span>
                      </div>
                      <a className="rbt-btn-link" href="course-details.html">
                        Learn More<i className="feather-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Course  */}

              {/*Start Single Course  */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rbt-card variation-01 rbt-hover">
                  <div className="rbt-card-img">
                    <a href="course-details.html">
                      <img
                        src="assets/images/course/course-02.jpg"
                        alt="Card image"
                      />
                      <div className="rbt-badge-3 bg-white">
                        <span>-40%</span>
                        <span>Off</span>
                      </div>
                    </a>
                  </div>
                  <div className="rbt-card-body">
                    <div className="rbt-card-top">
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rating-count"> (15 Reviews)</span>
                      </div>
                      <div className="rbt-bookmark-btn">
                        <a className="rbt-round-btn" title="Bookmark" href="#">
                          <i className="feather-bookmark"></i>
                        </a>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <a href="course-details.html">PHP Beginner + Advanced</a>
                    </h4>
                    <ul className="rbt-meta">
                      <li>
                        <i className="feather-book"></i>12 Lessons
                      </li>
                      <li>
                        <i className="feather-users"></i>50 Students
                      </li>
                    </ul>
                    <p className="rbt-card-text">
                      It is a long established fact that a reader will be
                      distracted by the readable.
                    </p>
                    <div className="rbt-author-meta mb--20">
                      <div className="rbt-avater">
                        <a href="#">
                          <img
                            src="assets/images/client/avatar-02.png"
                            alt="Sophia Jaymes"
                          />
                        </a>
                      </div>
                      <div className="rbt-author-info">
                        By <a href="profile.html">Angela</a> In{" "}
                        <a href="#">Development</a>
                      </div>
                    </div>
                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">$60</span>
                        <span className="off-price">$120</span>
                      </div>
                      <a
                        className="rbt-btn-link left-icon"
                        href="course-details.html"
                      >
                        <i className="feather-shopping-cart"></i> Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Course  */}

              {/*Start Single Course  */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rbt-card variation-01 rbt-hover">
                  <div className="rbt-card-img">
                    <a href="course-details.html">
                      <img
                        src="assets/images/course/course-03.jpg"
                        alt="Card image"
                      />
                      <div className="rbt-badge-3 bg-white">
                        <span>-40%</span>
                        <span>Off</span>
                      </div>
                    </a>
                  </div>
                  <div className="rbt-card-body">
                    <div className="rbt-card-top">
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rating-count"> (5 Reviews)</span>
                      </div>
                      <div className="rbt-bookmark-btn">
                        <a className="rbt-round-btn" title="Bookmark" href="#">
                          <i className="feather-bookmark"></i>
                        </a>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <a href="course-details.html">Angular Zero to Mastery</a>
                    </h4>
                    <ul className="rbt-meta">
                      <li>
                        <i className="feather-book"></i>8 Lessons
                      </li>
                      <li>
                        <i className="feather-users"></i>30 Students
                      </li>
                    </ul>
                    <p className="rbt-card-text">
                      Angular Js long fact that a reader will be distracted by
                      the readable.
                    </p>

                    <div className="rbt-author-meta mb--20">
                      <div className="rbt-avater">
                        <a href="#">
                          <img
                            src="assets/images/client/avatar-03.png"
                            alt="Sophia Jaymes"
                          />
                        </a>
                      </div>
                      <div className="rbt-author-info">
                        By <a href="profile.html">Slaughter</a> In{" "}
                        <a href="#">Languages</a>
                      </div>
                    </div>
                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">$80</span>
                        <span className="off-price">$100</span>
                      </div>
                      <a className="rbt-btn-link" href="course-details.html">
                        Learn More<i className="feather-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Course  */}
            </div>
            {/*End Card Area */}

            <div className="row">
              <div className="col-lg-12">
                <div className="load-more-btn mt--60 text-center">
                  <a
                    className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
                    href="#"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Load More Course (40)</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Course Area */}

        {/*Start About Area  */}
        <div className="rbt-about-area bg-color-white rbt-section-gapTop pb_md--80 pb_sm--80 about-style-1">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="thumbnail-wrapper">
                  <div className="thumbnail image-1">
                    <img
                      data-parallax='{"x": 0, "y": -20}'
                      src="assets/images/about/about-01.png"
                      alt="Education Images"
                    />
                  </div>
                  <div className="thumbnail image-2 d-none d-xl-block">
                    <img
                      data-parallax='{"x": 0, "y": 60}'
                      src="assets/images/about/about-02.png"
                      alt="Education Images"
                    />
                  </div>
                  <div className="thumbnail image-3 d-none d-md-block">
                    <img
                      data-parallax='{"x": 0, "y": 80}'
                      src="assets/images/about/about-03.png"
                      alt="Education Images"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inner pl--50 pl_sm--0 pl_md--0">
                  <div className="section-title text-start">
                    <span className="subtitle bg-coral-opacity">
                      Know About Us
                    </span>
                    <h2 className="title">
                      Know About Histudy <br /> Learning Platform
                    </h2>
                  </div>

                  <p className="description mt--30">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>

                  {/*Start Feature List  */}

                  <div className="rbt-feature-wrapper mt--20 ml_dec_20">
                    <div className="rbt-feature feature-style-2 rbt-radius">
                      <div className="icon bg-pink-opacity">
                        <i className="feather-heart"></i>
                      </div>
                      <div className="feature-content">
                        <h6 className="feature-title">Flexible Classes</h6>
                        <p className="feature-description">
                          It is a long established fact that a reader will be
                          distracted by this on readable content of when looking
                          at its layout.
                        </p>
                      </div>
                    </div>

                    <div className="rbt-feature feature-style-2 rbt-radius">
                      <div className="icon bg-primary-opacity">
                        <i className="feather-book"></i>
                      </div>
                      <div className="feature-content">
                        <h6 className="feature-title">Learn From Anywhere</h6>
                        <p className="feature-description">
                          Sed distinctio repudiandae eos recusandae laborum
                          eaque non eius iure suscipit laborum eaque non eius
                          iure suscipit.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/*End Feature List  */}
                  <div className="about-btn mt--40">
                    <a
                      className="rbt-btn btn-gradient hover-icon-reverse"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">More About Us</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End About Area  */}

        {/*Start Call To Action  */}
        <div className="rbt-callto-action-area mt_dec--half">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="rbt-callto-action callto-action-default bg-color-white rbt-radius shadow-1">
                  <div className="row align-items-center">
                    <div className="col-lg-12 col-xl-5">
                      <div className="inner">
                        <div className="rbt-category mb--20">
                          <a href="#">New Collection</a>
                        </div>
                        <h4 className="title mb--15">
                          Online Courses from Histudy
                        </h4>
                        <p className="mb--15">
                          Top instructors from around the world
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-7">
                      <div className="video-popup-wrapper mt_lg--10 mt_md--20 mt_sm--20">
                        <img
                          className="w-100 rbt-radius"
                          src="assets/images/others/video-01.jpg"
                          alt="Video Images"
                        />
                        <a
                          className="rbt-btn rounded-player-2 sm-size popup-video position-to-top with-animation"
                          href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                        >
                          <span className="play-icon"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="rbt-callto-action callto-action-default bg-color-white rbt-radius shadow-1">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="inner">
                        <div className="rbt-category mb--20">
                          <a href="#">Top Teacher</a>
                        </div>
                        <h4 className="title mb--10">
                          Free Online Courses from Histudy School To Education
                        </h4>
                        <p className="mb--15">
                          Top instructors from around the world
                        </p>
                        <div className="read-more-btn">
                          <a
                            className="rbt-btn rbt-switch-btn btn-gradient btn-sm"
                            href="#"
                          >
                            <span data-text="Join Now">Join Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Call To Action  */}

        {/*Start Counterup Area  */}
        <div className="rbt-counterup-area bg-color-extra2 rbt-section-gapBottom default-callto-action-overlap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    Why Choose Us
                  </span>
                  <h2 className="title">
                    Creating A Community Of <br /> Life Long Learners.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row g-5 hanger-line">
              {/*Start Single Counter  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                  <div className="top-circle-shape"></div>
                  <div className="inner">
                    <div className="rbt-round-icon">
                      <img
                        src="assets/images/icons/counter-01.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h3 className="counter">
                        <span className="odometer" data-count="500">
                          00
                        </span>
                      </h3>
                      <span className="subtitle">Learners &amp; counting</span>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Counter  */}

              {/*Start Single Counter  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--60 mt_md--30 mt_sm--30 mt_mobile--60">
                <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                  <div className="top-circle-shape"></div>
                  <div className="inner">
                    <div className="rbt-round-icon">
                      <img
                        src="assets/images/icons/counter-02.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h3 className="counter">
                        <span className="odometer" data-count="800">
                          00
                        </span>
                      </h3>
                      <span className="subtitle">Courses & Video</span>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Counter  */}

              {/*Start Single Counter  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--60 mt_sm--60">
                <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                  <div className="top-circle-shape"></div>
                  <div className="inner">
                    <div className="rbt-round-icon">
                      <img
                        src="assets/images/icons/counter-03.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h3 className="counter">
                        <span className="odometer" data-count="1000">
                          00
                        </span>
                      </h3>
                      <span className="subtitle">Certified Students</span>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Counter  */}

              {/*Start Single Counter  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--60 mt_md--60 mt_sm--60">
                <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                  <div className="top-circle-shape"></div>
                  <div className="inner">
                    <div className="rbt-round-icon">
                      <img
                        src="assets/images/icons/counter-04.png"
                        alt="Icons Images"
                      />
                    </div>
                    <div className="content">
                      <h3 className="counter">
                        <span className="odometer" data-count="100">
                          00
                        </span>
                      </h3>
                      <span className="subtitle">Registered Enrolls</span>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Counter  */}
            </div>
          </div>
        </div>
        {/*End Counterup Area  */}

        {/*Start Testimonial Area   */}
        <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--10">
                    <span className="subtitle bg-primary-opacity">
                      EDUCATION FOR EVERYONE
                    </span>
                    <h2 className="title">
                      People like histudy education. <br /> No joking - here’s
                      the proof!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-animation-wrapper no-overlay mt--50">
            <div className="scroll-animation scroll-right-left">
              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-odd">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/facebook.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        After the launch, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-01.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Martha Maldonado, <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}

              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-odd">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/google.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Histudy education, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-02.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Michael D., <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}

              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-odd">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/yelp.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Our educational, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-03.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Valerie J., <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}

              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-odd">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/facebook.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        People says about, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-04.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Hannah R., <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}
              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-odd">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/bing.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Like this histudy, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-05.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Pearl B. Hill, <span>Marketing</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}

              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-odd">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/facebook.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Educational template, vulputate at sapien sit amet,
                        auctor iaculis lorem. In vel hend rerit nisi. Vestibulum
                        eget risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-01.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Mandy F. Wood, <span>SR Designer</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}

              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-odd">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/hubs.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Online leaning, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-07.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Mildred W. Diaz, <span>Executive</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}

              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-odd">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/bing.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Remote learning, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-08.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Christopher, <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}

              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-odd">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/yelp.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        University managemnet, vulputate at sapien sit amet,
                        auctor iaculis lorem. In vel hend rerit nisi. Vestibulum
                        eget risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-06.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Fatima, <span>Child</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}
            </div>
          </div>

          <div className="scroll-animation-wrapper no-overlay mt--30">
            <div className="scroll-animation scroll-left-right">
              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/facebook.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        After the launch, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-01.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Martha Maldonado, <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}

              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/google.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Histudy education, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-02.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Michael D., <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}

              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/yelp.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Our educational, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-03.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Valerie J., <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}

              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/bing.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        People says about, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-04.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Hannah R., <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}
              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/hubs.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Like this histudy, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-05.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Pearl B. Hill, <span>Marketing</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}

              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/yelp.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Educational template, vulputate at sapien sit amet,
                        auctor iaculis lorem. In vel hend rerit nisi. Vestibulum
                        eget risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-01.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Mandy F. Wood, <span>SR Designer</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}

              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/bing.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Online leaning, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-07.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Mildred W. Diaz, <span>Executive</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}

              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/facebook.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Remote learning, vulputate at sapien sit amet, auctor
                        iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                        risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-08.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Christopher, <span>CEO</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}

              {/*Start Single Testimonial  */}
              <div className="single-column-20 bg-theme-gradient-even">
                <div className="rbt-testimonial-box style-2">
                  <div className="inner">
                    <div className="icons">
                      <img
                        src="assets/images/icons/yelp.png"
                        alt="Clint Images"
                      />
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        University managemnet, vulputate at sapien sit amet,
                        auctor iaculis lorem. In vel hend rerit nisi. Vestibulum
                        eget risus velit.
                      </p>
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <img
                            src="assets/images/testimonial/client-06.png"
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">
                            Fatima, <span>Child</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Testimonial  */}
            </div>
          </div>
        </div>
        {/*End Testimonial Area   */}

        {/*Start Event Area  */}
        <div className="rbt-event-area rbt-section-gap bg-gradient-3">
          <div className="container">
            <div className="row mb--55">
              <div className="section-title text-center">
                <span className="subtitle bg-white-opacity">
                  STIMULATED TO TAKE PART IN?
                </span>
                <h2 className="title color-white">Upcoming Events</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="swiper event-activation-1 rbt-arrow-between rbt-dot-bottom-center pb--60 icon-bg-primary">
                  <div className="swiper-wrapper">
                    {/*Start Single Slide  */}
                    <div className="swiper-slide">
                      <div className="single-slide">
                        <div className="rbt-card event-grid-card variation-01 rbt-hover">
                          <div className="rbt-card-img">
                            <a href="event-details.html">
                              <img
                                src="assets/images/event/grid-type-02.jpg"
                                alt="Card image"
                              />
                              <div className="rbt-badge-3 bg-white">
                                <span>11 Mar</span>
                                <span>2022</span>
                              </div>
                            </a>
                          </div>
                          <div className="rbt-card-body">
                            <ul className="rbt-meta">
                              <li>
                                <i className="feather-map-pin"></i>Vancouver
                              </li>
                              <li>
                                <i className="feather-clock"></i>8:00 am - 5:00
                                pm
                              </li>
                            </ul>
                            <h4 className="rbt-card-title">
                              <a href="event-details.html">
                                Painting Art Contest 2020 for histudy Clud
                              </a>
                            </h4>

                            <div className="read-more-btn">
                              <a
                                className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                                href="event-details.html"
                              >
                                <span className="icon-reverse-wrapper">
                                  <span className="btn-text">Get Ticket</span>
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End Single Slide  */}
                    {/*Start Single Slide  */}
                    <div className="swiper-slide">
                      <div className="single-slide">
                        <div className="rbt-card event-grid-card variation-01 rbt-hover">
                          <div className="rbt-card-img">
                            <a href="event-details.html">
                              <img
                                src="assets/images/event/grid-type-04.jpg"
                                alt="Card image"
                              />
                              <div className="rbt-badge-3 bg-white">
                                <span>11 Jan</span>
                                <span>2023</span>
                              </div>
                            </a>
                          </div>
                          <div className="rbt-card-body">
                            <ul className="rbt-meta">
                              <li>
                                <i className="feather-map-pin"></i>IAC Building
                              </li>
                              <li>
                                <i className="feather-clock"></i>8:00 am - 5:00
                                pm
                              </li>
                            </ul>
                            <h4 className="rbt-card-title">
                              <a href="event-details.html">
                                Elegant Light Box Paper Cut Dioramas in UK
                              </a>
                            </h4>

                            <div className="read-more-btn">
                              <a
                                className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                                href="event-details.html"
                              >
                                <span className="icon-reverse-wrapper">
                                  <span className="btn-text">Get Ticket</span>
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End Single Slide  */}

                    {/*Start Single Slide  */}
                    <div className="swiper-slide">
                      <div className="single-slide">
                        <div className="rbt-card event-grid-card variation-01 rbt-hover">
                          <div className="rbt-card-img">
                            <a href="event-details.html">
                              <img
                                src="assets/images/event/grid-type-05.jpg"
                                alt="Card image"
                              />
                              <div className="rbt-badge-3 bg-white">
                                <span>11 Mar</span>
                                <span>2022</span>
                              </div>
                            </a>
                          </div>
                          <div className="rbt-card-body">
                            <ul className="rbt-meta">
                              <li>
                                <i className="feather-map-pin"></i>Vancouver
                              </li>
                              <li>
                                <i className="feather-clock"></i>8:00 am - 5:00
                                pm
                              </li>
                            </ul>
                            <h4 className="rbt-card-title">
                              <a href="event-details.html">
                                Most Effective Ways for Education's Problem
                              </a>
                            </h4>

                            <div className="read-more-btn">
                              <a
                                className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                                href="event-details.html"
                              >
                                <span className="icon-reverse-wrapper">
                                  <span className="btn-text">Get Ticket</span>
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End Single Slide  */}

                    {/*Start Single Slide  */}
                    <div className="swiper-slide">
                      <div className="single-slide">
                        <div className="rbt-card event-grid-card variation-01 rbt-hover">
                          <div className="rbt-card-img">
                            <a href="event-details.html">
                              <img
                                src="assets/images/event/grid-type-01.jpg"
                                alt="Card image"
                              />
                              <div className="rbt-badge-3 bg-white">
                                <span>11 Jan</span>
                                <span>2022</span>
                              </div>
                            </a>
                          </div>
                          <div className="rbt-card-body">
                            <ul className="rbt-meta">
                              <li>
                                <i className="feather-map-pin"></i>IAC Building
                              </li>
                              <li>
                                <i className="feather-clock"></i>8:00 am - 5:00
                                pm
                              </li>
                            </ul>
                            <h4 className="rbt-card-title">
                              <a href="event-details.html">
                                International Education Fair 2022
                              </a>
                            </h4>

                            <div className="read-more-btn">
                              <a
                                className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                                href="event-details.html"
                              >
                                <span className="icon-reverse-wrapper">
                                  <span className="btn-text">Get Ticket</span>
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End Single Slide  */}
                  </div>

                  <div className="rbt-swiper-arrow rbt-arrow-left">
                    <div className="custom-overfolow">
                      <i className="rbt-icon feather-arrow-left"></i>
                      <i className="rbt-icon-top feather-arrow-left"></i>
                    </div>
                  </div>

                  <div className="rbt-swiper-arrow rbt-arrow-right">
                    <div className="custom-overfolow">
                      <i className="rbt-icon feather-arrow-right"></i>
                      <i className="rbt-icon-top feather-arrow-right"></i>
                    </div>
                  </div>

                  <div className="rbt-swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*End Event Area  */}
        <div className="rbt-team-area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    Our Teacher
                  </span>
                  <h2 className="title">Whose Inspirations You</h2>
                </div>
              </div>
            </div>
            <div className="row g-5">
              <div className="col-lg-7">
                {/*Start Tab Content  */}
                <div
                  className="rbt-team-tab-content tab-content"
                  id="myTabContent"
                >
                  <div
                    className="tab-pane fade active show"
                    id="team-tab1"
                    role="tabpanel"
                    aria-labelledby="team-tab1-tab"
                  >
                    <div className="inner">
                      <div className="rbt-team-thumbnail">
                        <div className="thumb">
                          <img
                            src="assets/images/team/team-01.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                      <div className="rbt-team-details">
                        <div className="author-info">
                          <h4 className="title">Mames Mary</h4>
                          <span className="designation theme-gradient">
                            English Teacher
                          </span>
                          <span className="team-form">
                            <i className="feather-map-pin"></i>
                            <span className="location">CO Miego, AD,USA</span>
                          </span>
                        </div>
                        <p>
                          Histudy The standard chunk of Lorem Ipsum used since
                          the 1500s is reproduced below for those interested.
                        </p>
                        <ul className="social-icon social-default mt--20 justify-content-start">
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="feather-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com">
                              <i className="feather-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="feather-instagram"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className="rbt-information-list mt--25">
                          <li>
                            <a href="#">
                              <i className="feather-phone"></i>+1-202-555-0174
                            </a>
                          </li>
                          <li>
                            <a href="mailto:hello@example.com">
                              <i className="feather-mail"></i>example@gmail.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="team-tab2"
                    role="tabpanel"
                    aria-labelledby="team-tab2-tab"
                  >
                    <div className="inner">
                      <div className="rbt-team-thumbnail">
                        <div className="thumb">
                          <img
                            src="assets/images/team/team-02.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                      <div className="rbt-team-details">
                        <div className="author-info">
                          <h4 className="title">Robert Song</h4>
                          <span className="designation theme-gradient">
                            Math Teacher
                          </span>
                          <span className="team-form">
                            <i className="feather-map-pin"></i>
                            <span className="location">CO Miego, AD,USA</span>
                          </span>
                        </div>
                        <p>
                          Education The standard chunk of Lorem Ipsum used since
                          the 1500s is reproduced below for those interested.
                        </p>
                        <ul className="social-icon social-default mt--20 justify-content-start">
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="feather-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com">
                              <i className="feather-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="feather-instagram"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className="rbt-information-list mt--25">
                          <li>
                            <a href="#">
                              <i className="feather-phone"></i>+1-202-555-0174
                            </a>
                          </li>
                          <li>
                            <a href="mailto:hello@example.com">
                              <i className="feather-mail"></i>example@gmail.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="team-tab3"
                    role="tabpanel"
                    aria-labelledby="team-tab3-tab"
                  >
                    <div className="inner">
                      <div className="rbt-team-thumbnail">
                        <div className="thumb">
                          <img
                            src="assets/images/team/team-03.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                      <div className="rbt-team-details">
                        <div className="author-info">
                          <h4 className="title">William Susan</h4>
                          <span className="designation theme-gradient">
                            React Teacher
                          </span>
                          <span className="team-form">
                            <i className="feather-map-pin"></i>
                            <span className="location">CO Miego, AD,USA</span>
                          </span>
                        </div>
                        <p>
                          React The standard chunk of Lorem Ipsum used since the
                          1500s is reproduced below for those interested.
                        </p>
                        <ul className="social-icon social-default mt--20 justify-content-start">
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="feather-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com">
                              <i className="feather-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="feather-instagram"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className="rbt-information-list mt--25">
                          <li>
                            <a href="#">
                              <i className="feather-phone"></i>+1-202-555-0174
                            </a>
                          </li>
                          <li>
                            <a href="mailto:hello@example.com">
                              <i className="feather-mail"></i>example@gmail.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="team-tab4"
                    role="tabpanel"
                    aria-labelledby="team-tab4-tab"
                  >
                    <div className="inner">
                      <div className="rbt-team-thumbnail">
                        <div className="thumb">
                          <img
                            src="assets/images/team/team-04.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                      <div className="rbt-team-details">
                        <div className="author-info">
                          <h4 className="title">Soseph Sara</h4>
                          <span className="designation theme-gradient">
                            Web Teacher
                          </span>
                          <span className="team-form">
                            <i className="feather-map-pin"></i>
                            <span className="location">CO Miego, AD,USA</span>
                          </span>
                        </div>
                        <p>
                          Histudy The standard chunk of Lorem Ipsum used since
                          the 1500s is reproduced below for those interested.
                        </p>
                        <ul className="social-icon social-default mt--20 justify-content-start">
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="feather-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com">
                              <i className="feather-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="feather-instagram"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className="rbt-information-list mt--25">
                          <li>
                            <a href="#">
                              <i className="feather-phone"></i>+1-202-555-0174
                            </a>
                          </li>
                          <li>
                            <a href="mailto:hello@example.com">
                              <i className="feather-mail"></i>example@gmail.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="team-tab5"
                    role="tabpanel"
                    aria-labelledby="team-tab5-tab"
                  >
                    <div className="inner">
                      <div className="rbt-team-thumbnail">
                        <div className="thumb">
                          <img
                            src="assets/images/team/team-05.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                      <div className="rbt-team-details">
                        <div className="author-info">
                          <h4 className="title">Thomas Dal</h4>
                          <span className="designation theme-gradient">
                            Graphic Teacher
                          </span>
                          <span className="team-form">
                            <i className="feather-map-pin"></i>
                            <span className="location">CO Miego, AD,USA</span>
                          </span>
                        </div>
                        <p>
                          Histudy The standard chunk of Lorem Ipsum used since
                          the 1500s is reproduced below for those interested.
                        </p>
                        <ul className="social-icon social-default mt--20 justify-content-start">
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="feather-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com">
                              <i className="feather-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="feather-instagram"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className="rbt-information-list mt--25">
                          <li>
                            <a href="#">
                              <i className="feather-phone"></i>+1-202-555-0174
                            </a>
                          </li>
                          <li>
                            <a href="mailto:hello@example.com">
                              <i className="feather-mail"></i>example@gmail.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="team-tab6"
                    role="tabpanel"
                    aria-labelledby="team-tab6-tab"
                  >
                    <div className="inner">
                      <div className="rbt-team-thumbnail">
                        <div className="thumb">
                          <img
                            src="assets/images/team/team-06.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                      <div className="rbt-team-details">
                        <div className="author-info">
                          <h4 className="title">Christopher Lisa</h4>
                          <span className="designation theme-gradient">
                            English Teacher
                          </span>
                          <span className="team-form">
                            <i className="feather-map-pin"></i>
                            <span className="location">CO Miego, AD,USA</span>
                          </span>
                        </div>
                        <p>
                          Histudy The standard chunk of Lorem Ipsum used since
                          the 1500s is reproduced below for those interested.
                        </p>
                        <ul className="social-icon social-default mt--20 justify-content-start">
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="feather-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com">
                              <i className="feather-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="feather-instagram"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className="rbt-information-list mt--25">
                          <li>
                            <a href="#">
                              <i className="feather-phone"></i>+1-202-555-0174
                            </a>
                          </li>
                          <li>
                            <a href="mailto:hello@example.com">
                              <i className="feather-mail"></i>example@gmail.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="top-circle-shape"></div>
                </div>
                {/*End Tab Content  */}
              </div>

              <div className="col-lg-5">
                {/*Start Tab Nav  */}
                <ul
                  className="rbt-team-tab-thumb nav nav-tabs"
                  id="myTab"
                  role="tablist"
                >
                  <li>
                    <a
                      className="active"
                      id="team-tab1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#team-tab1"
                      role="tab"
                      aria-controls="team-tab1"
                      aria-selected="true"
                    >
                      <div className="rbt-team-thumbnail">
                        <div className="thumb">
                          <img
                            src="assets/images/team/team-01.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      id="team-tab2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#team-tab2"
                      role="tab"
                      aria-controls="team-tab2"
                      aria-selected="false"
                    >
                      <div className="rbt-team-thumbnail">
                        <div className="thumb">
                          <img
                            src="assets/images/team/team-02.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      id="team-tab3-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#team-tab3"
                      role="tab"
                      aria-controls="team-tab3"
                      aria-selected="false"
                    >
                      <div className="rbt-team-thumbnail">
                        <div className="thumb">
                          <img
                            src="assets/images/team/team-03.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      id="team-tab4-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#team-tab4"
                      role="tab"
                      aria-controls="team-tab4"
                      aria-selected="false"
                    >
                      <div className="rbt-team-thumbnail">
                        <div className="thumb">
                          <img
                            src="assets/images/team/team-04.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      id="team-tab5-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#team-tab5"
                      role="tab"
                      aria-controls="team-tab5"
                      aria-selected="false"
                    >
                      <div className="rbt-team-thumbnail">
                        <div className="thumb">
                          <img
                            src="assets/images/team/team-05.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      id="team-tab6-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#team-tab6"
                      role="tab"
                      aria-controls="team-tab6"
                      aria-selected="false"
                    >
                      <div className="rbt-team-thumbnail">
                        <div className="thumb">
                          <img
                            src="assets/images/team/team-06.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                {/*End Tab Content  */}
              </div>
            </div>
          </div>
        </div>

        {/*Start Blog Style */}
        <div className="rbt-rbt-blog-area rbt-section-gap bg-color-extra2">
          <div className="container">
            <div className="row g-5 align-items-center mb--30">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="section-title">
                  <span className="subtitle bg-pink-opacity">Blog Post</span>
                  <h2 className="title">Post Popular Post.</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="read-more-btn text-start text-md-end">
                  <a
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="blog.html"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">See All Articles</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/*Start Card Area */}
            <div className="row row--15">
              {/*Start Single Card  */}
              <div
                className="col-lg-6 col-md-12 col-sm-12 col-12 mt--30"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <div className="rbt-card variation-02 height-330 rbt-hover">
                  <div className="rbt-card-img">
                    <a href="blog-details.html">
                      <img
                        src="assets/images/blog/blog-card-01.jpg"
                        alt="Card image"
                      />{" "}
                    </a>
                  </div>
                  <div className="rbt-card-body">
                    <h3 className="rbt-card-title">
                      <a href="blog-details.html">React</a>
                    </h3>
                    <p className="rbt-card-text">
                      It is a long established fact that a reader.
                    </p>
                    <div className="rbt-card-bottom">
                      <a
                        className="transparent-button"
                        href="blog-details.html"
                      >
                        Learn More
                        <i>
                          <svg
                            width="17"
                            height="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g stroke="#27374D" fill="none" fill-rule="evenodd">
                              <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                              <path
                                stroke-linecap="square"
                                d="M.663 5.572h14.594"
                              />
                            </g>
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Card  */}
              <div
                className="col-lg-6 col-md-12 col-sm-12 col-12 mt--30"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                {/*Start Single Card  */}
                <div className="rbt-card card-list variation-02 rbt-hover">
                  <div className="rbt-card-img">
                    <a href="blog-details.html">
                      <img
                        src="assets/images/blog/blog-card-02.jpg"
                        alt="Card image"
                      />{" "}
                    </a>
                  </div>
                  <div className="rbt-card-body">
                    <h5 className="rbt-card-title">
                      <a href="blog-details.html">
                        Why Is Education So Famous?
                      </a>
                    </h5>
                    <div className="rbt-card-bottom">
                      <a
                        className="transparent-button"
                        href="blog-details.html"
                      >
                        Read Article
                        <i>
                          <svg
                            width="17"
                            height="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g stroke="#27374D" fill="none" fill-rule="evenodd">
                              <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                              <path
                                stroke-linecap="square"
                                d="M.663 5.572h14.594"
                              />
                            </g>
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
                {/*End Single Card  */}

                {/*Start Single Card  */}
                <div className="rbt-card card-list variation-02 rbt-hover mt--30">
                  <div className="rbt-card-img">
                    <a href="blog-details.html">
                      <img
                        src="assets/images/blog/blog-card-03.jpg"
                        alt="Card image"
                      />{" "}
                    </a>
                  </div>
                  <div className="rbt-card-body">
                    <h5 className="rbt-card-title">
                      <a href="blog-details.html">
                        Difficult Things About Education.
                      </a>
                    </h5>
                    <div className="rbt-card-bottom">
                      <a
                        className="transparent-button"
                        href="blog-details.html"
                      >
                        Read Article
                        <i>
                          <svg
                            width="17"
                            height="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g stroke="#27374D" fill="none" fill-rule="evenodd">
                              <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                              <path
                                stroke-linecap="square"
                                d="M.663 5.572h14.594"
                              />
                            </g>
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
                {/*End Single Card  */}

                {/*Start Single Card  */}
                <div className="rbt-card card-list variation-02 rbt-hover mt--30">
                  <div className="rbt-card-img">
                    <a href="blog-details.html">
                      <img
                        src="assets/images/blog/blog-card-04.jpg"
                        alt="Card image"
                      />{" "}
                    </a>
                  </div>
                  <div className="rbt-card-body">
                    <h5 className="rbt-card-title">
                      <a href="blog-details.html">
                        Education Is So Famous, But Why?
                      </a>
                    </h5>
                    <div className="rbt-card-bottom">
                      <a
                        className="transparent-button"
                        href="blog-details.html"
                      >
                        Read Article
                        <i>
                          <svg
                            width="17"
                            height="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g stroke="#27374D" fill="none" fill-rule="evenodd">
                              <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                              <path
                                stroke-linecap="square"
                                d="M.663 5.572h14.594"
                              />
                            </g>
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
                {/*End Single Card  */}
              </div>
            </div>
            {/*End Card Area */}
          </div>
        </div>
        {/*End Blog Style */}

        <div className="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap">
          <div className="container">
            <div className="row row--15 align-items-center">
              <div className="col-lg-12">
                <div className="inner text-center">
                  <div className="section-title text-center">
                    <span className="subtitle bg-white-opacity">
                      Get Latest Histudy Update
                    </span>
                    <h2 className="title color-white">
                      <strong>Subscribe</strong> Our Newsletter
                    </h2>
                    <p className="description color-white mt--20">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ipsam explicabo sit est eos earum reprehenderit inventore
                      nam autem corrupti rerum!
                    </p>
                  </div>
                  <form action="#" className="newsletter-form-1 mt--40">
                    <input type="email" placeholder="Enter Your E-Email" />
                    <button
                      type="submit"
                      className="rbt-btn btn-md btn-gradient hover-icon-reverse"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Subscribe</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </button>
                  </form>
                  <span className="note-text color-white mt--20">
                    No ads, No trails, No commitments
                  </span>

                  <div className="row row--15 mt--50">
                    {/*Start Single Counter */}
                    <div className="col-lg-3 offset-lg-3 col-md-6 col-sm-6 single-counter">
                      <div className="rbt-counterup rbt-hover-03 style-2 text-color-white">
                        <div className="inner">
                          <div className="content">
                            <h3 className="counter color-white">
                              <span className="odometer" data-count="500">
                                00
                              </span>
                            </h3>
                            <h5 className="title color-white">
                              Successfully Trained
                            </h5>
                            <span className="subtitle color-white">
                              Learners &amp; counting
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End Single Counter */}

                    {/*Start Single Counter */}
                    <div className="col-lg-3 col-md-6 col-sm-6 single-counter mt_mobile--30">
                      <div className="rbt-counterup rbt-hover-03 style-2 text-color-white">
                        <div className="inner">
                          <div className="content">
                            <h3 className="counter color-white">
                              <span className="odometer" data-count="100">
                                00
                              </span>
                            </h3>
                            <h5 className="title color-white">
                              Certification Students
                            </h5>
                            <span className="subtitle color-white">
                              Online Course
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End Single Counter */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Start Footer aera */}
        <footer className="rbt-footer footer-style-1">
          <div className="footer-top">
            <div className="container">
              <div className="row row--15 mt_dec--30">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                  <div className="footer-widget">
                    <div className="logo">
                      <a href="index.html">
                        <img
                          src="assets/images/logo/logo.png"
                          alt="Edu-cause"
                        />
                      </a>
                    </div>

                    <p className="description mt--20">
                      We’re always in search for talented and motivated people.
                      Don’t be shy introduce yourself!
                    </p>

                    <div className="contact-btn mt--30">
                      <a
                        className="rbt-btn hover-icon-reverse btn-border-gradient radius-round"
                        href="#"
                      >
                        <div className="icon-reverse-wrapper">
                          <span className="btn-text">Contact With Us</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="offset-lg-1 col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                  <div className="footer-widget">
                    <h5 className="ft-title">Useful Links</h5>
                    <ul className="ft-link">
                      <li>
                        <a href="12-marketplace.html">Marketplace</a>
                      </li>
                      <li>
                        <a href="04-kindergarten.html">kindergarten</a>
                      </li>
                      <li>
                        <a href="13-university-classic.html">University</a>
                      </li>
                      <li>
                        <a href="09-gym-coaching.html">GYM Coaching</a>
                      </li>
                      <li>
                        <a href="faqs.html">FAQ</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                  <div className="footer-widget">
                    <h5 className="ft-title">Our Company</h5>
                    <ul className="ft-link">
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="become-a-teacher.html">Become Teacher</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="instructor.html">Instructor</a>
                      </li>
                      <li>
                        <a href="event-list.html">Events</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
                  <div className="footer-widget">
                    <h5 className="ft-title">Get Contact</h5>
                    <ul className="ft-link">
                      <li>
                        <span>Phone:</span> <a href="#">(406) 555-0120</a>
                      </li>
                      <li>
                        <span>E-mail:</span>{" "}
                        <a href="mailto:hr@example.com">rainbow@example.com</a>
                      </li>
                      <li>
                        <span>Location:</span> North America, USA
                      </li>
                    </ul>
                    <ul className="social-icon social-default icon-naked justify-content-start mt--20">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="feather-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com">
                          <i className="feather-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="feather-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkdin.com/">
                          <i className="feather-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*End Footer aera */}
        <div className="rbt-separator-mid">
          <div className="container">
            <hr className="rbt-separator m-0" />
          </div>
        </div>
        {/*Start Copyright Area  */}
        <div className="copyright-area copyright-style-1 ptb--20">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <p className="rbt-link-hover text-center text-lg-start">
                  Copyright © 2023{" "}
                  <a href="https://themeforest.net/user/rbt-themes">
                    Rainbow-Themes.
                  </a>{" "}
                  All Rights Reserved
                </p>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                  <li>
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy policy</a>
                  </li>
                  <li>
                    <a href="subscription.html">Subscription</a>
                  </li>
                  <li>
                    <a href="login.html">Login & Register</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*End Copyright Area  */}
      </main>

      {/*End Page Wrapper Area */}
      <div className="rbt-progress-parent">
        <svg
          className="rbt-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </div>
  );
};

export default HomePage;
