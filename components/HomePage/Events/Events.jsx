import React from 'react';

const Events = ({ events }) => {
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
        {events.map((event) => (
          <div className="row" key={event.slug}>
            <div className="course-card mt--50">
              <div className="rbt-card variation-01 rbt-hover elegant-course card-list-2">
                <div className="rbt-card-img">
                  <a href={`/events/${event.slug}`}>
                    <img src={event.image_url} alt="Card image" />
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
                    <a href={`/events/${event.slug}`}>{event.fullTitle}</a>
                  </h4>
                  <p className="rbt-card-text">{event.shortDescription}</p>
                  <ul className="rbt-meta rbt-meta-badge mb--20">
                    {event?.tags?.map((tag) => (
                      <li key={tag}>
                        <span className="rbt-badge">{tag}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="rbt-card-bottom">
                    <div className="rbt-price">
                      <span className="current-price">{event?.price}€</span>
                    </div>
                    <a
                      className="rbt-btn-link left-icon"
                      href={`/events/${event.slug}`}
                    >
                      Περισσότερα
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
