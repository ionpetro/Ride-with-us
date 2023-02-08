import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import DatePicker, { registerLocale } from "react-datepicker";
import styles from "./Activity.module.scss";
import el from "date-fns/locale/el";
registerLocale("el", el);

import "react-datepicker/dist/react-datepicker.css";

import React, { useMemo, useState } from "react";

const Activity = ({ data }) => {
  const mapCenter = useMemo(() => ({ lat: data?.lat, lng: data?.lng }), []);
  const [date, setDate] = useState();

  const mapOptions =
    useMemo >
    (() => ({
      disableDefaultUI: true,
      clickableIcons: false,
      scrollwheel: false,
    }),
    []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  return (
    <>
      {/* Start breadcrumb Area */}
      <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
        <div>
          <div
            className={"bg-gradient-11"}
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
                        <a href="components/Activity/Activity#location">
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
                  <div className="rbt-course-feature-inner">
                    <div className="section-title">
                      <h4 className="rbt-title-style-3">
                        Περιγραφή δραστηριότητας
                      </h4>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: data?.description }}
                    ></div>
                  </div>
                </div>
                <div
                  className="rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30"
                  id="location"
                >
                  <div className="rbt-course-feature-inner">
                    <div className="section-title">
                      <h4 className="rbt-title-style-3">Τοποθεσία</h4>
                      {isLoaded ? (
                        <GoogleMap
                          options={mapOptions}
                          zoom={14}
                          center={mapCenter}
                          mapTypeId={google.maps.MapTypeId.ROADMAP}
                          mapContainerStyle={{
                            width: "100%",
                            height: "400px",
                          }}
                        >
                          <Marker {...mapCenter} />
                        </GoogleMap>
                      ) : (
                        <p>Φορτώνει ο χάρτης...</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="course-sidebar sticky-top rbt-shadow-box course-sidebar-top rbt-gradient-border">
                <div className="inner">
                  <div className="content-item-content">
                    <h4>{data?.title}</h4>
                    <div className="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
                      <div className="rbt-price mb-4">
                        από{" "}
                        <span className="current-price mx-2">
                          {data?.price}€
                        </span>{" "}
                        το άτομο
                      </div>
                    </div>
                    <form>
                      <div className="form-group">
                        <input name="con_name" type="text" />
                        <label>Ονοματεπώνυμο</label>
                        <span className="focus-border" />
                      </div>
                      <div className="form-group">
                        <input type="text" />
                        <label>Τηλέφωνο</label>
                        <span className="focus-border" />
                      </div>
                      <div className="form-group">
                        <small>Άτομα</small>
                        <div className="rbt-modern-select bg-transparent height-45">
                          <select className="w-100">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9+</option>
                          </select>
                        </div>
                      </div>
                      <div className={styles.date}>
                        <small>Ημερομηνία</small>
                        <DatePicker
                          locale="gr"
                          selected={date}
                          onChange={(date) => setDate(date)}
                        />
                      </div>
                      <div className="form-group mt-40">
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

                        <small className="rbt-link-hover text-center text-lg-start">
                          Πατώντας αποστολή συμφωνώ με την{" "}
                          <a href="/cancellation-policy">πολιτική ακύρωσης</a>
                        </small>
                      </div>
                    </form>
                    <div className="social-share-wrapper mt--30 text-center">
                      <div className="contact-with-us text-center">
                        <p>Θέλετε περισσότερες πληροφορίες;</p>
                        <p className="rbt-badge-2 mt--10 justify-content-center w-100">
                          <i className="feather-phone mr--5" /> Καλέστε μας:{" "}
                          <a href="tel:697 156 1249">
                            <strong>697 156 1249</strong>
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
