import React, { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import axios from 'axios';

const Clinics = () => {
  const [clinics, setClinics] = useState([]);
  const API_URL = process.env.STRAPI_PUBLIC_API_URL || "http://localhost:1337"

  useEffect(() => {
    const fetchClinics = async () => {
    try {
        const res = await axios.get(`${API_URL}/clinics`);
        setClinics(res.data);
    }
    catch (err) {
      alert('Error connection!')
    }
  }

    fetchClinics();
  }, []);

  const getClinics = () => {
    let list = [];

  clinics.map(clinic => {
    return list.push(
      <>
          <tbody>
            <tr>
              <td>{clinic.name}</td>
              <td>{clinic.address}</td>
              <td>{clinic.postcode}</td>
              <td>{clinic.email}</td>
              <td>{clinic.whatsapp}</td>
              <td>{clinic.services}</td>
            </tr>
          </tbody>
      </>
    );
  });

  return list;
};

  return (
    <>
    <Fade duration={1200}>
    <table className="table table-dark mt-4">
    <thead>
      <tr>
        <th scope="col">name</th>
        <th scope="col">address</th>
        <th scope="col">postcode</th>
        <th scope="col">email</th>
        <th scope="col">whatsapp</th>
        <th scope="col">services</th>
      </tr>
    </thead>

    {getClinics()}
    </table>
    </Fade>
    </>
  );
};

export default Clinics;