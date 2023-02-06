import React from "react";

const Activity = ({ data }) => {
  return (
    <>
      {/* Start breadcrumb Area */}
      <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
        <div>
          <div
            className={
              "rbt-banner-area rbt-banner-7 bg-gradient-1 theme-shape header-transperent-spacer"
            }
            style={{
              height: "500px",
              width: "100%",
              position: "absolute",
              top: "0",
            }}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content text-start">
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item">
                    <a href="/">Αρχική</a>
                  </li>
                  <li>
                    <div className="icon-right">
                      <i className="feather-chevron-right" />
                    </div>
                  </li>
                  <li className="rbt-breadcrumb-item active">Δραστηριότητες</li>
                  <li>
                    <div className="icon-right">
                      <i className="feather-chevron-right" />
                    </div>
                  </li>
                  <li className="rbt-breadcrumb-item active">{data?.title}</li>
                </ul>
                <h2 className="title">{data?.fullTitle}</h2>
                <p className="description">{data?.shortDescription}</p>
                <ul className="rbt-meta">
                  <li>
                    <i className="feather-calendar" />
                    Τελευταία ενημέρωση 02/2023
                  </li>
                  <li>
                    <i className="feather-globe" />
                    Ελληνικά / English
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb Area */}
      <div className="rbt-course-details-area ptb--60">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="course-details-content">
                <div className="rbt-course-feature-box rbt-shadow-box thumbnail">
                  <img
                    className="w-100"
                    src={data?.image_url}
                    alt={data?.title}
                  />
                </div>
                <div className="rbt-inner-onepage-navigation sticky-top mt--30">
                  <nav className="mainmenu-nav onepagenav">
                    <ul className="mainmenu">
                      <li className="current">
                        <a href="components/Activity/Activity#overview">
                          Περιγραφή
                        </a>
                      </li>
                      <li>
                        <a href="components/Activity/Activity#coursecontent">
                          Πληροφορίες
                        </a>
                      </li>
                      <li>
                        <a href="components/Activity/Activity#details">
                          Τοποθεσία
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* Start Course Feature Box  */}
                <div
                  className="rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30 has-show-more"
                  id="overview"
                >
                  <div className="rbt-course-feature-inner has-show-more-inner-content">
                    <div className="section-title">
                      <h4 className="rbt-title-style-3">
                        Περιγραφή δραστηριότητας
                      </h4>
                    </div>
                    <p>{data?.description}</p>
                  </div>
                  <div className="rbt-show-more-btn">Περισσότερα</div>
                </div>
                {/* End Course Feature Box  */}
                {/* Start Course Content  */}
                <div
                  className="course-content rbt-shadow-box coursecontent-wrapper mt--30"
                  id="coursecontent"
                >
                  <div className="rbt-course-feature-inner">
                    <div className="section-title">
                      <h4 className="rbt-title-style-3">
                        Περισσότερες πληροφορίες
                      </h4>
                    </div>
                    <div className="rbt-accordion-style rbt-accordion-02 accordion">
                      <div className="accordion" id="accordionExampleb2">
                        <div className="accordion-item card">
                          <h2
                            className="accordion-header card-header"
                            id="headingTwo1"
                          >
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo1"
                              aria-expanded="true"
                              aria-controls="collapseTwo1"
                            >
                              Intro to Course and Histudy{" "}
                            </button>
                          </h2>
                          <div
                            id="collapseTwo1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingTwo1"
                            data-bs-parent="#accordionExampleb2"
                          >
                            <div className="accordion-body card-body pr--0">
                              <ul className="rbt-course-main-content liststyle">
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />{" "}
                                      <span className="text">Course Intro</span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="min-lable">30 min</span>
                                      <span className="rbt-badge variation-03 bg-primary-opacity">
                                        <i className="feather-eye" /> Preview
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />{" "}
                                      <span className="text">
                                        Watch Before Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="min-lable">0.5 min</span>
                                      <span className="rbt-badge variation-03 bg-primary-opacity">
                                        <i className="feather-eye" /> Preview
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text" />{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item card">
                          <h2
                            className="accordion-header card-header"
                            id="headingTwo2"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo2"
                              aria-expanded="false"
                              aria-controls="collapseTwo2"
                            >
                              Course Fundamentals{" "}
                              <span className="rbt-badge-5 ml--10">
                                2hr 30min
                              </span>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo2"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo2"
                            data-bs-parent="#accordionExampleb2"
                          >
                            <div className="accordion-body card-body pr--0">
                              <ul className="rbt-course-main-content liststyle">
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />{" "}
                                      <span className="text">Course Intro</span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text" />{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />{" "}
                                      <span className="text">
                                        Why You Should Not Go To Education.
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text" />{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />{" "}
                                      <span className="text">
                                        Ten Factors That Affect Education's
                                        Longevity.
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text" />{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item card">
                          <h2
                            className="accordion-header card-header"
                            id="headingTwo3"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo3"
                              aria-expanded="false"
                              aria-controls="collapseTwo3"
                            >
                              You can develop skill and setup{" "}
                              <span className="rbt-badge-5 ml--10">
                                1hr 50min
                              </span>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo3"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo3"
                            data-bs-parent="#accordionExampleb2"
                          >
                            <div className="accordion-body card-body pr--0">
                              <ul className="rbt-course-main-content liststyle">
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />{" "}
                                      <span className="text">Course Intro</span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text" />{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />{" "}
                                      <span className="text">
                                        Why You Should Not Go To Education.
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text" />{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />{" "}
                                      <span className="text">
                                        Ten Factors That Affect Education's
                                        Longevity.
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text" />{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item card">
                          <h2
                            className="accordion-header card-header"
                            id="headingTwo4"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo4"
                              aria-expanded="false"
                              aria-controls="collapseTwo4"
                            >
                              15 Things To Know About Education?{" "}
                              <span className="rbt-badge-5 ml--10">
                                2hr 60min
                              </span>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo4"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo4"
                            data-bs-parent="#accordionExampleb2"
                          >
                            <div className="accordion-body card-body pr--0">
                              <ul className="rbt-course-main-content liststyle">
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />{" "}
                                      <span className="text">Course Intro</span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text" />{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />{" "}
                                      <span className="text">
                                        Why You Should Not Go To Education.
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text" />{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />{" "}
                                      <span className="text">
                                        Ten Factors That Affect Education's
                                        Longevity.
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text" />{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item card">
                          <h2
                            className="accordion-header card-header"
                            id="headingTwo5"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo5"
                              aria-expanded="false"
                              aria-controls="collapseTwo5"
                            >
                              Course Description{" "}
                              <span className="rbt-badge-5 ml--10">
                                2hr 20min
                              </span>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo5"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo5"
                            data-bs-parent="#accordionExampleb2"
                          >
                            <div className="accordion-body card-body pr--0">
                              <ul className="rbt-course-main-content liststyle">
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />{" "}
                                      <span className="text">Course Intro</span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text" />{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />{" "}
                                      <span className="text">
                                        Why You Should Not Go To Education.
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text" />{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle" />{" "}
                                      <span className="text">
                                        Ten Factors That Affect Education's
                                        Longevity.
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="components/Activity/Activity#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text" />{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock" />
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Course Content  */}
                {/* Start Course Feature Box  */}
                <div
                  className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30"
                  id="details"
                >
                  <div className="row g-5">
                    {/* Start Feture Box  */}
                    <div className="col-lg-6">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3 mb--20">
                          Requirements
                        </h4>
                      </div>
                      <ul className="rbt-list-style-1">
                        <li>
                          <i className="feather-check" />
                          Become an advanced, confident, and modern JavaScript
                          developer from scratch.
                        </li>
                        <li>
                          <i className="feather-check" />
                          Have an intermediate skill level of Python
                          programming.
                        </li>
                        <li>
                          <i className="feather-check" />
                          Have a portfolio of various data analysis projects.
                        </li>
                        <li>
                          <i className="feather-check" />
                          Use the numpy library to create and manipulate arrays.
                        </li>
                      </ul>
                    </div>
                    {/* End Feture Box  */}
                    {/* Start Feture Box  */}
                    <div className="col-lg-6">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3 mb--20">
                          Description
                        </h4>
                      </div>
                      <ul className="rbt-list-style-1">
                        <li>
                          <i className="feather-check" />
                          Use the Jupyter Notebook Environment. JavaScript
                          developer from scratch.
                        </li>
                        <li>
                          <i className="feather-check" />
                          Use the pandas module with Python to create and
                          structure data?.
                        </li>
                        <li>
                          <i className="feather-check" />
                          Have a portfolio of various data analysis projects.
                        </li>
                        <li>
                          <i className="feather-check" />
                          Create data visualizations using matplotlib and the
                          seaborn.
                        </li>
                      </ul>
                    </div>
                    {/* End Feture Box  */}
                  </div>
                </div>
                {/* End Course Feature Box  */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="course-sidebar sticky-top rbt-shadow-box course-sidebar-top rbt-gradient-border">
                <div className="inner">
                  <div className="content-item-content">
                    <h4>{data?.title}</h4>
                    <div className="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
                      <div className="rbt-price">
                        από{" "}
                        <span className="current-price mx-2">
                          {data?.price}€
                        </span>{" "}
                        το άτομο
                      </div>
                    </div>
                    <div className="add-to-card-button mt--15">
                      <a
                        className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
                        href="components/Activity/Activity#"
                      >
                        <span className="btn-text">Add to Cart</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </a>
                    </div>
                    <div className="buy-now-btn mt--15">
                      <a
                        className="rbt-btn btn-border icon-hover w-100 d-block text-center"
                        href="components/Activity/Activity#"
                      >
                        <span className="btn-text">Buy Now</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </a>
                    </div>
                    <span className="subtitle">
                      <i className="feather-rotate-ccw" /> 30-Day Money-Back
                      Guarantee
                    </span>
                    <div className="rbt-widget-details has-show-more">
                      <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
                        <li>
                          <span>Start Date</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            5 Hrs 20 Min
                          </span>
                        </li>
                        <li>
                          <span>Enrolled</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            100
                          </span>
                        </li>
                        <li>
                          <span>Lectures</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            50
                          </span>
                        </li>
                        <li>
                          <span>Skill Level</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            Basic
                          </span>
                        </li>
                        <li>
                          <span>Language</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            English
                          </span>
                        </li>
                        <li>
                          <span>Quizzes</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            10
                          </span>
                        </li>
                        <li>
                          <span>Certificate</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            Yes
                          </span>
                        </li>
                        <li>
                          <span>Pass Percentage</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            95%
                          </span>
                        </li>
                      </ul>
                      <div className="rbt-show-more-btn">Περισσότερα</div>
                    </div>
                    <div className="social-share-wrapper mt--30 text-center">
                      <div className="rbt-post-share d-flex align-items-center justify-content-center">
                        <ul className="social-icon social-default transparent-with-border justify-content-center">
                          <li>
                            <a href="components/Activity/Activity">
                              <i className="feather-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com">
                              <i className="feather-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="components/Activity/Activity">
                              <i className="feather-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="components/Activity/Activity">
                              <i className="feather-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <hr className="mt--20" />
                      <div className="contact-with-us text-center">
                        <p>For details about the course</p>
                        <p className="rbt-badge-2 mt--10 justify-content-center w-100">
                          <i className="feather-phone mr--5" /> Call Us:{" "}
                          <a href="components/Activity/Activity#">
                            <strong>+444 555 666 777</strong>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
