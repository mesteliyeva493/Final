import React from 'react'
import './DoYou.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
function DoYou() {
  return (
    <>
      <section id='DoYou'>
        <div className='content'>
          <div className='left'>
            <div className='describtion'>
              <p>Auctor Laboriosam Ipsum</p>
              <h2>Do You Know Your Ayurveda <br /> Body Type?</h2>
            </div>
            <div className='type'>
              <div>
                <FontAwesomeIcon className='iconF' icon={faCircleHalfStroke} />
              </div>
              <div>
                <h3>
                  Summer (Fire & Water)</h3>
                <p>Anim ducimus dictum proin sit viverra cursus ante temporibus officia, augue pretium, consequatur. Hic porttitor tristique dolor curabitur, officia architecto, morbi dictum convallis. Nibh saepe erat numquam luctus cupidatat nostra eos exercitationem sint morbi accusantium.</p>
              </div>
            </div>
            <div className='type'>
              <div>
                <FontAwesomeIcon className='iconF' icon={faCircleHalfStroke} />
              </div>
              <div>
                <h3>

                  Winter (Air & Ether)</h3>
                <p>Anim ducimus dictum proin sit viverra cursus ante temporibus officia, augue pretium, consequatur. Hic porttitor tristique dolor curabitur, officia architecto, morbi dictum convallis. Nibh saepe erat numquam luctus cupidatat nostra eos exercitationem sint morbi accusantium.</p>
              </div>
            </div>
            <div className='type'>
              <div>
                <FontAwesomeIcon className='iconF' icon={faCircleHalfStroke} />
              </div>
              <div>
                <h3>Spring (Earth & Water)
                </h3>

                <p>Anim ducimus dictum proin sit viverra cursus ante temporibus officia, augue pretium, consequatur. Hic porttitor tristique dolor curabitur, officia architecto, morbi dictum convallis. Nibh saepe erat numquam luctus cupidatat nostra eos exercitationem sint morbi accusantium.</p>
              </div>
            </div>
          </div>
          <div>
            <img className='imgDo' src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2020/02/lady-yoga.png" alt="" />
          </div>
        </div>

      </section>
    </>
  )
}

export default DoYou