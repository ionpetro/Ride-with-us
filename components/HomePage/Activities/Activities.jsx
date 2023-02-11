import React from 'react';

const Activities = ({ activities }) => {
  return (
    <>
      {/* Start Card Style */}
      <div
        className="rbt-course-card-area rbt-section-gap bg-color-white"
        id={'activities'}
      >
        <div className="container">
          <div className="row align-items-center mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-secondary-opacity">
                  Δραστηριοτητες
                </span>
                <h2 className="title">Όλες οι δραστηριότητες</h2>
                <p className="description has-medium-font-size mt--20">
                  Εκδρομές κάθε βδομάδα
                </p>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row g-5">
            {activities.map(({ title, image_url, slug, price }) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                data-sal-delay={150}
                data-sal="slide-up"
                data-sal-duration={800}
                key={title}
              >
                <div className="rbt-card variation-03 rbt-hover">
                  <div className="rbt-card-img">
                    <a className="thumbnail-link" href={`/activities/${slug}`}>
                      <img src={image_url} alt={title} />
                      <span className="rbt-btn btn-white icon-hover btn-md">
                        <span className="btn-text">Περισσότερα</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="rbt-card-body">
                    <h5 className="rbt-card-title">
                      <a href={`/activities/${slug}`}>{title}</a>
                    </h5>
                    <div className="rbt-card-bottom">
                      <a
                        className="transparent-button"
                        href={`/activities/${slug}`}
                      >
                        <i>
                          <svg
                            width={17}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g stroke="#27374D" fill="none" fillRule="evenodd">
                              <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                              <path
                                strokeLinecap="square"
                                d="M.663 5.572h14.594"
                              />
                            </g>
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                  <div className="card-information">
                    <div className="card-count">
                      από <strong>{price}</strong> €
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
