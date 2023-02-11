import React from 'react';

const Events = () => {
  return (
    <div
      className="rbt-course-card-area rbt-section-gap bg-color-white"
      id={'events'}
    >
      <div className="container">
        <div className="row align-items-center mb--60">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle bg-secondary-opacity">Εκδρομές</span>
              <h2 className="title">Όλες οι εκδρομές</h2>
              <p className="description has-medium-font-size mt--20">
                Προλάβετε πριν εξαντληθούν
              </p>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row">
          <div className="course-card mt--50">
            <div className="rbt-card variation-01 rbt-hover elegant-course card-list-2">
              <div className="rbt-card-img">
                <a href="/events/borovets">
                  <img
                    src="/assets/images/sports/borovets.jpg"
                    alt="Card image"
                  />
                </a>
              </div>
              <div className="rbt-card-body">
                <div className="rbt-card-top">
                  <div className="rbt-review mb-4">
                    <div className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
                <h4 className="rbt-card-title">
                  <a href="/events/borovets">
                    Πενταήμερο στο χιονοδρομικό του Borovets
                  </a>
                </h4>
                <ul className="rbt-meta mb--10">
                  <li>
                    <i className="feather-users" />
                    30 συμμετέχοντες
                  </li>
                </ul>
                <p className="rbt-card-text">μπλα μπλα μπλα</p>
                <ul className="rbt-meta rbt-meta-badge mb--20">
                  <li>
                    <a href="#">
                      <span className="rbt-badge">Μεταφορά</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="rbt-badge">Snowboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="rbt-badge">Spa</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="rbt-badge">Τζακούζι</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="rbt-badge">Πρωινό</span>
                    </a>
                  </li>
                </ul>

                <div className="rbt-card-bottom">
                  <div className="rbt-price">
                    <span className="current-price">360€</span>
                    <span className="off-price">380€</span>
                  </div>
                  <a className="rbt-btn-link left-icon" href="/events/borovets">
                    Περισσότερα
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
