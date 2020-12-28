import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="position-relative col text-center bg-primary min-vh-100">
      -
      <div className="col p-4 d-flex flex-column mt-5 mb-5 position-static align-items-center">
      <Fade duration={1200}>
        <h1 className='text-white'>
          Clinic List
        </h1>
        <h3 className='text-white mt-4'>
          <Link className="text-white" to='/addclinics'>
            Add clinic <FiCornerDownRight />
          </Link>
        </h3>
        <h3 className='text-white mt-4'>
          <Link className="text-white" to='/clinics'>
            Clinics <FiCornerDownRight />
          </Link>
        </h3>
        </Fade>
      </div>
      
    </div>
  )
}

export default Home;