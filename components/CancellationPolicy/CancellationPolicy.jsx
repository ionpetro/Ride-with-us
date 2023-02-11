import React from 'react';

const CancellationPolicy = () => {
  return (
    <div>
      <div className="rbt-overlay-page-wrapper">
        <div className="breadcrumb-image-container breadcrumb-style-max-width">
          <div className="breadcrumb-content-top text-center">
            <h1 className="title">Πολιτική Ακύρωσης</h1>
            <ul className="page-list">
              <li className="rbt-breadcrumb-item">
                <a href="/">Αρχική</a>
              </li>
              <li>
                <div className="icon-right">
                  <i className="feather-chevron-right" />
                </div>
              </li>
              <li className="rbt-breadcrumb-item active">Πολιτική Ακύρωσης</li>
            </ul>
          </div>
        </div>
        <div className="rbt-putchase-guide-area breadcrumb-style-max-width rbt-section-gapBottom">
          <div className="rbt-article-content-wrapper pt-5">
            <div className="content">
              <p>Τελευταία επεξεργασία: Φλεβάρης 08, 2023</p>
              <p>
                Ακύρωση 7 ή περισσότερες ημέρες πριν από την ημερομηνία έναρξης
                της συμφωνηθείσας δραστηριότητας. Σας επιστρέφεται αυτόματα για
                την πλήρη τιμή δραστηριότητα.
              </p>
              <p>
                Ακύρωση μεταξύ 3 και 7 ημερών πριν από την ημερομηνία έναρξης
                της συμφωνηθείσας δραστηριότητας. Έχετε δικαίωμα επιστροφής 50%.
              </p>
              <p>
                Ακύρωση 3 ημερών ή αργότερα δεν θα πραγματοποιηθούν επιστροφές.
              </p>

              <em>
                *Εάν η δραστηριότητα ακυρωθεί από τη συνεργαζόμενη επιχειρήση το
                αντίτιμο της δραστηριότητας σας, επιστρέφεται στο ακέραιο.
              </em>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
