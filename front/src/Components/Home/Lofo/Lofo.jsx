import React, { useContext } from 'react';
import './Lofo.scss';
import mainContext from '../../../Context/Context';


function Lofo() {
  const {data} = useContext(mainContext);
  return (
    <section id='lofo'>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {data.map((card, index) => (
            <div key={index} className=" col-sm-6 col-md-4 col-lg-3 mb-3 cardsss">
              <div className="card card-custom">
                <div className="card-body">
                  <div className='cardimg'>
                    <img src={card.icon} alt="" />
                  </div>
                  <div className='cardlofo'>
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Lofo;
