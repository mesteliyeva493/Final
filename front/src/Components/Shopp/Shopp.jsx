import React, { useState } from 'react'
import './Shopp.scss'
import { FiList } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";

function Shopp() {
  const [column, setColumn] = useState(true)
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <>
      <section id={`${column ? "Shopp" : "Shopp2"}`}>
        <div className='shopp'>
          <div className='fd'>
            <div className='fdb'>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                <span><astra-woo-filter-icon /></span>
                Filter
              </button>
            </div>
            <div className='fdbf'>
              <div className='fdf'>
                <form className='form' action="">
                  <select name="prooduct" id="products">
                    <option>Default sorting</option>
                    <option value="populary">Sort by popularity </option>
                    <option value="populary">Sort by average rating </option>
                    <option value="populary">Sort by latest </option>
                    <option value="populary">Sort by price:low to high popularity </option>
                    <option value="populary">Sort by price:high to low popularity </option>
                  </select>
                </form>
              </div>
              <div className='fbb'>
                <FiGrid className='gr' onClick={() => {
                  setColumn(true)
                }} />
                <FiList className='li' onClick={() => {
                  setColumn(false)
                }} />
              </div>
            </div>
          </div>

          <div>
            {
              column ? <div class="container">
                <div class="card">
                  <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
                  <div className='p3'>
                    <p>Essential Oil
                    </p>
                    <p>
                      Almond Oil
                    </p>
                    <p>
                      £120.00</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
                  <div className='p3'>
                    <p>Essential Oil
                    </p>
                    <p>
                      Almond Oil
                    </p>
                    <p>
                      £120.00</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
                  <div className='p3'>
                    <p>Essential Oil
                    </p>
                    <p>
                      Almond Oil
                    </p>
                    <p>
                      £120.00</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
                  <div className='p3'>
                    <p>Essential Oil
                    </p>
                    <p>
                      Almond Oil
                    </p>
                    <p>
                      £120.00</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
                  <div className='p3'>
                    <p>Essential Oil
                    </p>
                    <p>
                      Almond Oil
                    </p>
                    <p>
                      £120.00</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
                  <div className='p3'>
                    <p>Essential Oil
                    </p>
                    <p>
                      Almond Oil
                    </p>
                    <p>
                      £120.00</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
                  <div className='p3'>
                    <p>Essential Oil
                    </p>
                    <p>
                      Almond Oil
                    </p>
                    <p>
                      £120.00</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
                  <div className='p3'>
                    <p>Essential Oil
                    </p>
                    <p>
                      Almond Oil
                    </p>
                    <p>
                      £120.00</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
                  <div className='p3'>
                    <p>Essential Oil
                    </p>
                    <p>
                      Almond Oil
                    </p>
                    <p>
                      £120.00</p>
                  </div>
                </div>


              </div> : <div class="container">
                <div class="card">
                  <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
                  <div className='p3'>
                    <p>Essential Oil
                    </p>
                    <p>
                      Almond Oil
                    </p>
                    <p>
                      £120.00</p>
                    <p>
                      Essential Oil
                      Almond Oil
                      £120.00
                      Euismod dolorem consectetuer, wisi purus provident tellus asperiores aptent, vero malesuada metus porta laoreet tenetur aliquid laboris etiam lacus distinctio habitasse beatae corporis diamlorem. Volutpat. Primis, mollit corrupti odit.</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
                  <div className='p4'>
                    <p>Essential Oil
                    </p>
                    <p>
                      Almond Oil
                    </p>
                    <p>
                      £120.00</p>
                    <p>
                      Essential Oil
                      Almond Oil
                      £120.00
                      Euismod dolorem consectetuer, wisi purus provident tellus asperiores aptent, vero malesuada metus porta laoreet tenetur aliquid laboris etiam lacus distinctio habitasse beatae corporis diamlorem. Volutpat. Primis, mollit corrupti odit.</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
                  <div className='p3'>
                    <p>Essential Oil
                    </p>
                    <p>
                      Almond Oil
                    </p>
                    <p>
                      £120.00</p>
                    <p>
                      Essential Oil
                      Almond Oil
                      £120.00
                      Euismod dolorem consectetuer, wisi purus provident tellus asperiores aptent, vero malesuada metus porta laoreet tenetur aliquid laboris etiam lacus distinctio habitasse beatae corporis diamlorem. Volutpat. Primis, mollit corrupti odit.</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
                  <div className='p3'>
                    <p>Essential Oil
                    </p>
                    <p>
                      Almond Oil
                    </p>
                    <p>
                      £120.00</p>
                    <p>
                      Essential Oil
                      Almond Oil
                      £120.00
                      Euismod dolorem consectetuer, wisi purus provident tellus asperiores aptent, vero malesuada metus porta laoreet tenetur aliquid laboris etiam lacus distinctio habitasse beatae corporis diamlorem. Volutpat. Primis, mollit corrupti odit.</p>
                  </div>
                </div>


              </div>
            }
          </div>



        </div>

      </section>
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Filter Options</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={toggleFilter}></button>
        </div>
        <div className="offcanvas-body">
          <p>Filter content goes here...</p>
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
      </div>

      {/* <section id='Shopp2'>
        <div className='shopp'>
          <div className='fd'>
            <div className='fdb'>
              <button>
                <span><astra-woo-filter-icon /></span>
                Filter
              </button>
            </div>
            <div className='fdbf'>
              <div className='fdf'>
                <form className='form' action="">
                  <select name="prooduct" id="products">
                    <option>Default sorting</option>
                    <option value="populary">Sort by popularity </option>
                    <option value="populary">Sort by average rating </option>
                    <option value="populary">Sort by latest </option>
                    <option value="populary">Sort by price:low to high popularity </option>
                    <option value="populary">Sort by price:high to low popularity </option>
                  </select>
                </form>
              </div>
              <div className='fbb'>
                <FiGrid className='gr' />
                <FiList className='li' />
              </div>
            </div>
          </div>

          <div>
          
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Shopp