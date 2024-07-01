import React from 'react'
import './Pdd.scss'


function Pdd() {
    return (
        <section id='pdd'>
            <div className='card-container'>
                <div className='cardPddd'>
                <div className='cardPdd'>
                    <div className='imgpdd'>
                        <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-5.png" alt="" />
                    </div>
                    <div className='cardp'>
                        <h5>
                            Primary Consultation
                        </h5>
                        <p>
                            Asperiores tempus, faucibus occaecati, viverra <br /> at fuga, eros. Aliquet bibendum platea, ducimus natus blanditiis. Felis nec numquam.</p>
                    </div>
                </div>
                <div className='cardPdd'>
                    <div className='imgpdd'>
                        <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-1.png" alt="" />
                    </div>
                    <div className='cardp'>
                        <h5>
                        Diagnose
                        </h5>

                        <p>
                            Asperiores tempus, faucibus occaecati, viverra <br /> at fuga, eros. Aliquet bibendum platea, ducimus natus blanditiis. Felis nec numquam.</p>
                    </div>
                </div>
                <div className='cardPdd'>
                    <div className='imgpdd'>
                        <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-4.png" alt="" />
                    </div>
                    <div className='cardp'>
                        <h5>
                        Deliver
                        </h5>
                        <p>
                            Asperiores tempus, faucibus occaecati, viverra <br /> at fuga, eros. Aliquet bibendum platea, ducimus natus blanditiis. Felis nec numquam.</p>
                    </div>
                </div>
                </div>
            </div>

        </section>
    )
}

export default Pdd


// import React from 'react';
// import './Pdd.scss';

// function Pdd() {

//   const cards = [
//     {
//       id: 1,
//       title: 'Primary Consultation',
//       description: 'Asperiores tempus, faucibus occaecati, viverra at fuga, eros. Aliquet bibendum platea, ducimus natus blanditiis. Felis nec numquam.',
//       imgUrl: 'https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-5.png'
//     },
//     {
//       id: 2,
//       title: ' Diagnose',
//       description: 'Asperiores tempus, faucibus occaecati, viverra at fuga, eros. Aliquet bibendum platea, ducimus natus blanditiis. Felis nec numquam.',
//       imgUrl: 'https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-1.png'
//     },
//     {
//       id: 3,
//       title: 'Deliver',
//       description: 'Asperiores tempus, faucibus occaecati, viverra at fuga, eros. Aliquet bibendum platea, ducimus natus blanditiis. Felis nec numquam.',
//       imgUrl: 'https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-4.png'
//     }
//   ];

//   return (
//     <section id='pdd'>
//       <div className='card-container'>
//         {cards.map((card) => (
//           <div className='cardPdd' key={card.id}>
//             <div className='imgpdd'>
//               <img src={card.imgUrl} alt='' />
//             </div>
//             <div className='cardp'>
//               <h5>{card.title}</h5>
//               <p>{card.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Pdd;
