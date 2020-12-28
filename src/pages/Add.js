import React, { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import axios from 'axios';
import { FiCornerDownRight } from 'react-icons/fi';

const Add = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    postcode: '',
    email: '',
    whatsapp: ``,
    services: '',
  });

  const API_URL = process.env.STRAPI_PUBLIC_API_URL || "http://localhost:1337"

  const { name, email, address, postcode, whatsapp, services } = formData;

  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    setLoading(true);
    axios
      .post(
        `${API_URL}/clinics`,
        { name, email, address, postcode, whatsapp, services },
        config,
      )
      .then(res => {
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch(err => {
        setLoading(false);
        window.scrollTo(0, 0);
      });
  };
  

  return (
  <>
  <Fade duration={1200}>
    <div className="position-relative col mt-4 ml-4 mb-5">
        <h2 className='mb-0 mt-4 ml-4'>Add Clinic <FiCornerDownRight /></h2>
        <form className="form-group col-md-6 align-items-center mt-5" onSubmit={e => onSubmit(e)}>
          <input
            className="form-control"
            name="name"
            type="text"
            placeholder="clinic name"
            onChange={e => onChange(e)}
            value={name}
            required
          />
          <input
            className="form-control mt-3"
            name="address"
            type="text"
            placeholder="address"
            onChange={e => onChange(e)}
            value={address}
            required
          />
          <input
            className="form-control mt-3"
            name="postcode"
            type="text"
            placeholder="postcode"
            onChange={e => onChange(e)}
            value={postcode}
            required
          />
          <input
            className="form-control mt-3"
            name="email"
            type="email"
            placeholder="email"
            onChange={e => onChange(e)}
            value={email}
            required
          />
          <input
            className="form-control mt-3"
            name="whatsapp"
            type="text"
            placeholder="whatsapp"
            onChange={e => onChange(e)}
            value={whatsapp}
            required
          />
          <textarea
            className="form-control mt-3"
            name="services"
            placeholder="services"
            onChange={e => onChange(e)}
            value={services}
            required
          />
          <br />
          {loading ? (
            <div>
              Loading...
            </div>
          ) : (
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Send
            </button>
          )}
        </form>
      </div>
  </Fade>
  </>
  );
}

export default Add;
