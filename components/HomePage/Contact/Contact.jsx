import { createClient } from "@supabase/supabase-js";
import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await supabase.from("contact").insert(data);
      setLoading(false);
      setIsSubmitted(true);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  return (
    <div
      className="rbt-countdown-area bg_image contact-image bg_image_fixed rbt-section-gap"
      data-black-overlay={5}
      id={"contact"}
    >
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="inner">
              <div className="section-title text-start">
                <span className="subtitle bg-white-opacity">Επικοινωνησε</span>
                <h2 className="title color-white">Επικοινώνησε μαζί μας</h2>
                <p className="description has-medium-font-size mt--20 mb--0 color-white opacity-7">
                  Στείλε μας το μήνυμα σου και θα επικοινωνήσουμε μαζί σου το
                  συντομότερο δυνατό
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rbt-contact-form contact-form-style-1 w-100">
              <div className="section-title text-start"></div>
              <h3 className="title mb--40">Στείλε μας</h3>
              {isSubmitted ? (
                <div>
                  <p className="description has-medium-font-size mt--20 mb--0 opacity-7">
                    Το μήνυμά σας στάλθηκε
                  </p>
                  <p className="description has-medium-font-size mt--20 mb--0 opacity-7">
                    Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό
                  </p>
                </div>
              ) : (
                <form
                  id="contact-form"
                  className="w-100"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <input
                      name="con_name"
                      required
                      type="text"
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                    />
                    <label>Όνομα</label>
                    <span className="focus-border" />
                  </div>
                  <div className="form-group">
                    <input
                      name="con_email"
                      required
                      type="email"
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                    />
                    <label>Email</label>
                    <span className="focus-border" />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      required
                      onChange={(e) =>
                        setData({ ...data, phone: e.target.value })
                      }
                    />
                    <label>Τηλέφωνο</label>
                    <span className="focus-border" />
                  </div>
                  <div className="form-group">
                    <textarea
                      required
                      onChange={(e) =>
                        setData({ ...data, message: e.target.value })
                      }
                    />
                    <label>Μήνυμα</label>
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-submit-group mt--40">
                    <button
                      type="submit"
                      className="rbt-btn btn-gradient hover-icon-reverse w-100"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">
                          {loading ? "Παρακαλώ περιμένετε..." : "Αποστολή"}
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
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
