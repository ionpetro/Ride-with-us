import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from './ActivityModal.module.scss';
import 'react-calendar/dist/Calendar.css';

const ActivityModal = ({ data, setShowModal }) => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div className={styles.compWrap} id={'modal'}>
        <div className={styles.title}>
          <div>{data?.title}</div>
          <div>από {data?.price}€ το άτομο</div>
        </div>
        <form className={'mt-3'}>
          <h4 className={'mt-4'}>Στοιχεία κράτησης</h4>
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
            <input name="con_email" required type="email" />
            <label>Email</label>
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
            <Calendar
              minDate={new Date()}
              locale={'el'}
              onChange={setDate}
              value={date}
            />
          </div>
          <div className="form-group mt-5 mb-0">
            <button
              type="submit"
              className="rbt-btn btn-gradient hover-icon-reverse w-100"
            >
              <span className="icon-reverse-wrapper">
                <span className="btn-text">Ολοκλήρωση κράτησης</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right" />
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right" />
                </span>
              </span>
            </button>
            <small className="rbt-link-hover text-center text-lg-start">
              Πατώντας αποστολή συμφωνώ με την{' '}
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

export default ActivityModal;
