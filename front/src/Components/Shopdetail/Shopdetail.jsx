import React, { useState, useEffect, useRef } from 'react';
import './Shopdetail.scss';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

function Shopdetail() {
    const [activeTab, setActiveTab] = useState('description');
    const lineRef = useRef(null);
    const descRef = useRef(null);
    const reviewsRef = useRef(null);

    useEffect(() => {
        const line = lineRef.current;
        const descTab = descRef.current;
        const reviewsTab = reviewsRef.current;

        if (activeTab === 'description' && descTab) {
            line.style.left = `${descTab.offsetLeft}px`;
            line.style.width = `${descTab.offsetWidth}px`;
        } else if (activeTab === 'reviews' && reviewsTab) {
            line.style.left = `${reviewsTab.offsetLeft}px`;
            line.style.width = `${reviewsTab.offsetWidth}px`;
        }
    }, [activeTab]);

    return (
        <section id='Shopdetail'>
            <div className='shopdetail'>
                <div className='first'>
                    <div className='firstimg'>
                        <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/lemon-tea-bag.jpg" alt="" />
                    </div>
                    <div className='firstdes'>
                        <div className='des1'>
                            <div>
                                <p>Tea</p>
                            </div>
                            <div className='fa'>
                                <button><FaAngleLeft /></button>
                                <button><FaAngleRight /></button>
                            </div>
                        </div>
                        <div className='des2'>
                            <h6>Cinnamon tea</h6>
                            <p className='price'>£62.00, £56.00.</p>
                            <p>Morbi occaecat ea perferendis molestie repellat purus, cras velit minim culpa conubia, laudantium habitant tristique, aenean occaecati volutpat temporibus netus porta dignissim ac aliqua commodo modi nulla, iste aliquet quidem. Quisquam consectetuer repellat, auctor eaque sociis. Egestas beatae mus quia, egestas.</p>
                        </div>
                        <div className='des3'>
                            <div className='span'>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                            <div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <hr />
                        <div className='des4'>
                            <div>
                                <p>category:</p>
                            </div>
                            <div>
                                <p>tags:</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='second'>
                    <div className='dr'>
                        <p
                            ref={descRef}
                            className={activeTab === 'description' ? 'active' : ''}
                            onClick={() => setActiveTab('description')}
                        >
                            Description
                        </p>
                        <p
                            ref={reviewsRef}
                            className={activeTab === 'reviews' ? 'active' : ''}
                            onClick={() => setActiveTab('reviews')}
                        >
                            Reviews (0)
                        </p>
                    </div>

                    <div ref={lineRef} className='line'></div>

                    {activeTab === 'description' && (
                        <div className='description'>
                            <p>Congue irure ullamco. Amet distinctio voluptates nostrum tincidunt, feugiat auctor luctus iusto platea inceptos blanditiis assumenda, enim minim class habitant nibh quam, assumenda, cupiditate viverra, hic nostrum quod fringilla exercitationem metus eu, aenean veritatis mi provident. Aperiam, magni lorem exercitationem nisl eos, potenti mollitia! Corrupti veritatis rerum fugiat, ac, inceptos molestiae? Aperiam platea cursus. Fuga quos sociosqu venenatis inventore, eum. Congue irure ullamco. Amet distinctio voluptates nostrum tincidunt, feugiat auctor luctus iusto platea inceptos blanditiis assumenda, enim minim class habitant nibh quam, assumenda, cupiditate viverra, hic nostrum quod fringilla exercitationem metus eu, aenean veritatis mi provident. Aperiam, magni lorem exercitationem nisl eos, potenti mollitia! Corrupti veritatis rerum fugiat, ac, inceptos molestiae? Aperiam platea cursus. Fuga quos sociosqu venenatis inventore, eum.</p>
                        </div>
                    )}
                    {activeTab === 'reviews' && (
                        <div className='reviews'>
                            <div>
                                <p>There are no reviews yet.
                                </p>
                            </div>
                            <div className='rewform'>
                                <div className='rewone'>
                                    <p className='p1'>Be the first to review “Cinnamon tea”
                                    </p>
                                    <p >Your email address will not be published. Required fields are marked *</p>
                                </div>
                                <div className='rawtwo'>
                                    <p>Your rating *
                                        {/* ulduz qoyumalidi */}
                                    </p>
                                </div>
                                <div className='rewthree'>
                                    <div>
                                        <label htmlFor="">Your review *</label>
                                    </div>
                                    <textarea name="review" id="review" cols="100" rows="5"></textarea>
                                </div>
                                <div className='rewfour'>
                                    <div className='namemail'>
                                        <div className='name'>
                                            <div>
                                                <label htmlFor="name">Name*</label></div>
                                            <div>
                                                <input type="text" name='name' />
                                            </div>
                                        </div>
                                        <div className='namemail'>
                                            <div className='email'>
                                                <div>
                                                    <label htmlFor="email">Email*</label></div>
                                                <div>
                                                    <input type="text" name='email' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='sub'>
                                    <button>Submit</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='third'>
                    <div className='h3r'>
                        <h3>Related products</h3>
                    </div>
                    <div className='cardsh'>
                        <div className='cardshop'>

                            <Link to={"shopdetail"}>
                                <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/lemon-tea-bag-300x300.jpg" alt="" /></Link>
                            <div className='overlay'>
                                <FaShoppingBag className='icon' />
                                <IoEyeSharp className='icon' />
                            </div>
                            <div className='card-desc2'>
                                <p>tea</p>
                                <h6>Cinnamon Tea</h6>
                                <p>$56.00</p>
                            </div>
                        </div>
                        <div className='cardshop'>
                            <Link to={"shopdetail"}>
                                <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/lemon-tea-bag-300x300.jpg" alt="" /></Link>
                            <div className='overlay'>
                                <FaShoppingBag className='icon' />
                                <IoEyeSharp className='icon' />
                            </div>
                            <div className='card-desc2'>
                                <p>tea</p>
                                <h6>Cinnamon Tea</h6>
                                <p>$56.00</p>
                            </div>
                        </div>
                        <div className='cardshop'>

                            <Link to={"shopdetail"}>
                                <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/lemon-tea-bag-300x300.jpg" alt="" /></Link>
                            <div className='overlay'>
                                <FaShoppingBag className='icon' />
                                <IoEyeSharp className='icon' />
                            </div>
                            <div className='card-desc2'>
                                <p>tea</p>
                                <h6>Cinnamon Tea</h6>
                                <p>$56.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Shopdetail;
