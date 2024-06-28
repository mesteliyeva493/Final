import React, { useContext } from 'react';
import './Logo.scss';
import mainContext from '../../../Context/Context';


function Logo() {
  const {logo}=useContext(mainContext)
  return (
    <section id='logo'>
      <div className='container logo'>
        <div className='row'>
          {logo.map((logoo, index) => (
            <div key={index} className='col-12 col-sm-6 col-md-4 col-lg-2'>
              <img src={logoo.img} alt={`logo-${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Logo;
