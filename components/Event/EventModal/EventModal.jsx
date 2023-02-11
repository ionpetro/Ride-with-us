import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './EventModal.module.scss';

const EventModal = ({ data = {}, setShowModal }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({ people: '1' });
  const [loading, setLoading] = useState(false);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await supabase
        .from('event-reservations')
        .insert({ ...formData, event_id: data.id, event_slug: data.slug })
        .select();
      setLoading(false);
      document.body.classList.remove('hide-scroll');
      await router.push({
        pathname: '/reservation',
        query: { ...response.data[0], type: 'event' },
      });
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <>
      <div className={styles.compWrap} id={'modal'}>
        <div className={styles.title}>
          <div>{data?.title}</div>
          <div>από {data?.price}€ το άτομο</div>
        </div>
        <form className={'mt-3'} onSubmit={handleFormSubmit}>
          <h4 className={'mt-5'}>Στοιχεία κράτησης</h4>
          <div className="form-group">
            <input
              name="fullname"
              type="text"
              required
              onChange={(e) =>
                setFormData({ ...formData, fullname: e.target.value })
              }
            />
            <label>Ονοματεπώνυμο</label>
            <span className="focus-border" />
          </div>
          <div className="form-group">
            <input
              type="text"
              required
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <label>Τηλέφωνο</label>
            <span className="focus-border" />
          </div>
          <div className="form-group">
            <input
              name="con_email"
              required
              type="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <label>Email</label>
            <span className="focus-border" />
          </div>
          <div className="form-group">
            <small>Άτομα</small>
            <div className="rbt-modern-select bg-transparent height-45">
              <select
                onChange={(opt) =>
                  setFormData({ ...formData, people: opt.target.value })
                }
                className="w-100"
              >
                <option value={'1'}>1</option>
                <option value={'2'}>2</option>
                <option value={'3'}>3</option>
                <option value={'4'}>4</option>
                <option value={'5'}>5</option>
                <option value={'6'}>6</option>
                <option value={'7'}>7</option>
                <option value={'8'}>8</option>
                <option value={'9+'}>9+</option>
              </select>
            </div>
          </div>
          <div className="form-group mt-5 mb-0">
            <button
              type="submit"
              className="rbt-btn btn-gradient hover-icon-reverse w-100"
              disabled={loading}
            >
              <span className="icon-reverse-wrapper">
                <span className="btn-text">
                  {loading ? 'Παρακαλώ περιμένετε...' : 'Ολοκλήρωση κράτησης'}
                </span>
                {!loading && (
                  <>
                    <span className="btn-icon">
                      <i className="feather-arrow-right" />
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right" />
                    </span>
                  </>
                )}
              </span>
            </button>
            <small className="rbt-link-hover text-center text-lg-start">
              Πατώντας ολοκλήρωση κράτησης συμφωνώ με την{' '}
              <a href="/cancellation-policy" target={'_blank'}>
                πολιτική ακύρωσης
              </a>
            </small>
          </div>
        </form>
      </div>
      <div className={styles.overlay} onClick={() => setShowModal(false)} />
    </>
  );
};

export default EventModal;
