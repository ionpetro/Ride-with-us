import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

import React, { useEffect, useMemo, useState } from 'react';
import ActivityModal from './ActivityModal/ActivityModal';

const Activity = ({ data }) => {
  const mapCenter = useMemo(() => ({ lat: data?.lat, lng: data?.lng }), []);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('hide-scroll');
    } else {
      document.body.classList.remove('hide-scroll');
    }
  }, [showModal]);

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
            className={
              'bg-gradient-11 rbt-banner-area rbt-banner-7 theme-shape header-transperent-spacer'
            }
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: '0',
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
                  <li className="rbt-breadcrumb-item">
                    <a href={'/#activities'}>Δραστηριότητες</a>
                  </li>
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
                        <a href="components/Activity/Activity#extra">
                          Extra Παροχές
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
                  <div className="rbt-course-feature-inner has-show-more-inner-content">
                    <div className="section-title">
                      <h4 className="rbt-title-style-3">
                        Περιγραφή δραστηριότητας
                      </h4>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: data?.description }}
                    ></div>
                  </div>
                  <div className="rbt-show-more-btn">Περισσότερα</div>
                </div>
                <div
                  className="rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30 has-show-more"
                  id="extra"
                >
                  <div className="rbt-course-feature-inner">
                    <div className="section-title">
                      <h4 className="rbt-title-style-3">Extra παροχές</h4>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: data?.extra }}
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
                            width: '100%',
                            height: '400px',
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
                        από{' '}
                        <span className="current-price mx-2">
                          {data?.price}€
                        </span>{' '}
                        το άτομο
                      </div>
                    </div>
                    <div className="add-to-card-button mt--15">
                      <a
                        className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
                        onClick={() => setShowModal(true)}
                      >
                        <span className="btn-text">Κράτηση</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                    <div className="social-share-wrapper mt--30 text-center">
                      <ul className="social-icon social-default transparent-with-border justify-content-center">
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
                      <hr className="mt--20" />
                      <div className="contact-with-us text-center">
                        <p>Θέλετε περισσότερες πληροφορίες;</p>
                        <p className="rbt-badge-2 mt--10 justify-content-center w-100">
                          <i className="feather-phone mr--5" /> Καλέστε μας:{' '}
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
      {showModal && <ActivityModal setShowModal={setShowModal} data={data} />}
    </>
  );
};

export default Activity;
