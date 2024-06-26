import React, { useContext, useState } from 'react';
import './Add.scss'

import Addlogo from '../../../Components/Add/Addlogo';
import Addcard from '../../../Components/Add/Addcard';


function Add() {

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };



  return (
    <section id='Add' className='col-9'>
      <div className="tabs">
        <div className="tab-labels">
          <div className={`tab-label ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>
            logo
          </div>
          <div className={`tab-label ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
            Tab 2
          </div>
          <div className={`tab-label ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
            Tab 3
          </div>
        </div>

      
        <div className="tab-content">
          {activeTab === 0 && <div className="content">
            <Addlogo/>
         

          </div>}
          {activeTab === 1 && <div className="content"> 
            <Addcard/>
          </div>}
          {activeTab === 2 && <div className="content">This is content for Tab 3.</div>}
        </div>
      </div>



    </section>
  )
}

export default Add