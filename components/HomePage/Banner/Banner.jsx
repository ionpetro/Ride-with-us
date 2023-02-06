import Image from "next/image";
import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className="rbt-banner-area rbt-banner-7 bg-gradient-1 theme-shape header-transperent-spacer">
      <div className="wrapper w-100">
        <div className="container">
          <div className="row g-5 justify-content-between align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="content">
                <div className="inner">
                  <div className="section-title text-start">
                    <span className="subtitle bg-primary-opacity">
                      Fun excursions & more
                    </span>
                  </div>
                  <h1 className="title">
                    An engaged{" "}
                    <span className="theme-gradient">X-treme sports</span>{" "}
                    community
                  </h1>
                  <div className="rbt-like-total">
                    <div className="profile-share">
                      <a
                        href="#"
                        className="avatar"
                        data-tooltip="Παρνασσός"
                        tabIndex={0}
                      >
                        <img
                          src="/assets/images/sports/parnassos.jpg"
                          alt="education"
                          style={{ height: "60px" }}
                        />
                      </a>
                      <a
                        href="#"
                        className="avatar"
                        data-tooltip="Καλάβρυτα"
                        tabIndex={0}
                      >
                        <img
                          src="/assets/images/sports/kalavrita.jpg"
                          alt="education"
                          style={{ height: "60px" }}
                        />
                      </a>
                      <a
                        href="#"
                        className="avatar"
                        data-tooltip="Βασιλίτσα"
                        tabIndex={0}
                      >
                        <img
                          src="/assets/images/sports/vasilitsa.jpg"
                          alt="education"
                          style={{ height: "60px" }}
                        />
                      </a>
                      <div className="more-author-text">
                        <h5 className="total-join-students">Έλα μαζί μας</h5>
                        <p className="subtitle">
                          Νέες δραστηριότητες έρχονται σύντομα
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-button-group justify-content-start mt--30">
                    <a className="rbt-btn btn-gradient rbt-switch-btn" href="#">
                      <span data-text="Όλες οι δραστηριότες">
                        Όλες οι δραστηριότες
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail-wrapper">
                <div className={`thumbnail text-end ${styles.imageWrapper}`}>
                  <Image
                    src="/assets/images/sports/snowboard.jpg"
                    alt="Education Images"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
