import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import NotFound from '../NotFound/NotFound';
import styles from './Reservation.module.scss';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Reservation = () => {
  const router = useRouter();
  const [activity, setActivity] = useState();
  const routerData = router.query;

  if (!routerData) {
    return <NotFound />;
  }

  const fetchActivity = async () => {
    try {
      const response = await supabase
        .from('activities')
        .select()
        .eq('id', routerData.activity_id);
      setActivity(response.data[0]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (!routerData) {
      return;
    }

    fetchActivity();
  }, [routerData]);

  return (
    <div>
      <div className="rbt-overlay-page-wrapper">
        <div className={styles.background}>
          <div
            className={`breadcrumb-image-container breadcrumb-style-max-width`}
          >
            <div className="breadcrumb-content-top text-center">
              <h1 className="title">Κράτηση σε αναμονή</h1>
              <p className="mb--20">
                Έχουμε λάβει το αίτημα της κράτησής σας. Θα επιβεβαιώσουμε
                σύντομα στο {routerData?.phone} ή στο {routerData?.email} τη
                διαθεσιμότητα και θα σας ενημερώσουμε ώστε να προχωρήσετε σε
                κατάθεση.
              </p>
              <ul className="page-list">
                <li className="rbt-breadcrumb-item">
                  <a href="/">Αρχική</a>
                </li>
                <li>
                  <div className="icon-right">
                    <i className="feather-chevron-right" />
                  </div>
                </li>
                <li className="rbt-breadcrumb-item active">Κράτηση</li>
              </ul>
              <p className={'mt-4'}>
                Ημερομηνία κράτησης{' '}
                {new Date(routerData?.created_at).toLocaleDateString('el')}
              </p>
            </div>
          </div>
        </div>
        <div className="rbt-putchase-guide-area breadcrumb-style-max-width rbt-section-gapBottom">
          <div className="rbt-article-content-wrapper">
            <div className="post-thumbnail mb--30 position-relative wp-block-image alignwide">
              <img
                className="w-100"
                src={activity?.image_url}
                alt="Activity Image"
              />
            </div>
            <div className="content">
              <h4>{activity?.fullTitle}</h4>
              <p>{activity?.shortDescription}</p>
              <hr className="rbt-separator my-5" />
              <h4>Στοιχεία κράτησης</h4>
              <table className="rbt-table table table-borderless">
                <tbody>
                  <tr>
                    <th>Ονοματεπώνυμο</th>
                    <td>{routerData?.fullname}</td>
                  </tr>
                  <tr>
                    <th>Τηλέφωνο</th>
                    <td>{routerData?.phone}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{routerData?.email}</td>
                  </tr>
                  <tr>
                    <th>Ημερομηνία κράτησης</th>
                    <td>
                      {new Date(routerData?.date).toLocaleDateString('el')}
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr className="rbt-separator my-5" />
              <h4>Τρόπος πληρωμής</h4>
              <p>Κατάθεση σε τραπεζικό λογαριασμό</p>
              <div className="py-2">
                ΕΘΝΙΚΗ ΤΡΑΠΕΖΑ
                <br />
                SWIFT/BIC:&nbsp;ETHNGRAA
                <br />
                IBAN: GR1501100750000007500640763
                <br />
                ΔΙΚΑΙΟΥΧΟΣ: UNLIMITED ADRENALINE IKE
              </div>
              <hr className="rbt-separator my-5" />
              <h4>Δραστηριότητα</h4>
              <button
                className="rbt-btn btn-gradient hover-icon-reverse"
                onClick={() => router.push(`/activities/${activity?.slug}`)}
              >
                {activity?.title}
              </button>
              <hr className="rbt-separator my-5" />
              <h4>Πολιτική Ακύρωσης</h4>
              <button
                className="rbt-btn btn-border hover-icon-reverse"
                onClick={() => router.push(`cancellation-policy`)}
              >
                Διαβάστε την πολιτική ακύρωσης
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
