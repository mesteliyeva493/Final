import React from 'react'
import './Hero.scss'

function Hero() {
  return (
    <section id='hero'>
      <div className='container'>
        <div className='row'>
          <div className='featured'>
            <p>Featured Product</p>
            <h1>Rejuvenate  <br /> Yourself With <br /> Green Tea</h1>
            <p>Ornare dictum suspendisse corrupti class. Ipsum sit malesuada <br /> velit rutrum aenean laboriosam, magni facilisis optio. Perferendis <br /> morb.</p>
            <button className='Buy'>Buy For 150$ Now</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero