import React, { useContext } from 'react';
import './Logo.scss';
import mainContext from '../../../Context/Context';


function Logo() {
  const {datal}=useContext(mainContext)
  return (
    <section id='logo'>
      <div className='container logo'>
        <div className='row'>
          {datal.map((logo, index) => (
            <div key={index} className='col-12 col-sm-6 col-md-4 col-lg-2'>
              <img src={logo.img} alt={`logo-${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Logo;
