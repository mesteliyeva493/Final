import React, { useState, useEffect, useRef, useContext } from 'react';
import './Shopdetail.scss';
import { FaShoppingBag } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import axios from 'axios';
import { basketc } from '../../Context/Basketc';
import mainContext from '../../Context/Context';
import { useParams } from 'react-router-dom';

function Shopdetail() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { product } = useContext(mainContext);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addBasket, decrease, increase } = useContext(basketc);
    const { id } = useParams();

    const [detail, setDetail] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5050/product/${id}`).then(res => {
            setDetail(res.data);
        });
    }, [id]);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const [activeTab, setActiveTab] = useState('description');
    const lineRef = useRef(null);
    const descRef = useRef(null);
    const reviewsRef = useRef(null);
    const formRef = useRef(null);

    const handleReset = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
    };

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
                        <img src={detail.img} alt="" />
                    </div>
                    <div className='firstdes'>
                        <div className='des1'>
                            <p>{detail.title}</p>
                        </div>
                        <div className='des2'>
                            <h6>{detail.name}</h6>
                            <p className='price'>£{detail.price}</p>
                            <p>{detail.description}</p>
                        </div>
                        <div className='des3'>
                            <div className='span'>
                                <span onClick={() => decrease(detail)}>-</span>
                                <span>{detail.count}</span>
                                <span onClick={() => increase(detail)}>+</span>
                            </div>
                            <div>
                                <button onClick={() => addBasket(detail)} >Add to cart</button>
                            </div>
                        </div>
                        <hr />
                        <div className='des4'>
                            <div>
                                <p>Category: <span>{detail.category?.title}</span></p>
                            </div>
                            <div className='tags'>
                                <p>Tags: {
                                    detail.tags?.map((tag, index) => (
                                        <span className='sp ' key={index}>{tag.title}</span>
                                    ))
                                }</p>
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
                                <p>There are no reviews yet.</p>
                            </div>
                            {/* <div className='rewform'>
                                <div className='rewone'>
                                    <p className='p1'>Be the first to review “Cinnamon tea”</p>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                </div>
                                <div className='rawtwo'>
                                    <p>Your rating *
                                        <FaRegStar />
                                        <FaRegStar />
                                        <FaRegStar />
                                        <FaRegStar />
                                        <FaRegStar />
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
                                            <label htmlFor="name">Name*</label>
                                            <input type="text" name='name' />
                                        </div>
                                        <div className='email'>
                                            <label htmlFor="email">Email*</label>
                                            <input type="text" name='email' />
                                        </div>
                                    </div>
                                </div>
                                <div className='sub'>
                                    <button>Submit</button>
                                </div>
                            </div> */}
                            {/* <div className='rewform'>
                                <form ref={formRef}>
                                    <div className='rewone'>
                                        <p className='p1'>Be the first to review “Cinnamon tea”</p>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <div className='rawtwo'>
                                        <p>Your rating *
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                        </p>
                                    </div>
                                    <div className='rewthree'>
                                        <div>
                                            <label htmlFor="review">Your review *</label>
                                        </div>
                                        <textarea name="review" id="review" cols="100" rows="5"></textarea>
                                    </div>
                                    <div className='rewfour'>
                                        <div className='namemail'>
                                            <div className='name'>
                                                <label htmlFor="name">Name*</label>
                                                <input type="text" name='name' />
                                            </div>
                                            <div className='email'>
                                                <label htmlFor="email">Email*</label>
                                                <input type="text" name='email' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sub'>
                                        <button type="submit">Submit</button>
                                        <button type="button" onClick={handleReset}>Reset</button>
                                    </div>
                                </form>
                            </div> */}
                            

                        </div>
                    )}
                </div>

                <div className='third'>
                    <div className='h3r'>
                        <h3>Related products</h3>
                    </div>
                    <div className='cardsh'>
                        {product.slice(0, 2).map((products, index) => (
                            <div key={index} className='cardshop'>
                                <a href={`/shopdetail/${products._id}`}>
                                    <img src={products.img} alt={products.name} />
                                </a>
                                <div className='overlay'>
                                    <FaShoppingBag className='icon' onClick={() => addBasket(products)} />
                                    <IoEyeSharp className='icon' onClick={() => openModal(products)} />
                                </div>
                                <div className='card-desc2'>
                                    <p>{products.title}</p>
                                    <h6>{products.name}</h6>
                                    <p>${products.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {isModalOpen && selectedProduct && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <div className='first'>
                                <div className='firstimg'>
                                    <img src={selectedProduct.img} alt={selectedProduct.name} />
                                </div>
                                <div className='firstdes'>
                                    <div className='des1'>
                                        <p>{selectedProduct.title}</p>
                                    </div>
                                    <div className='des2'>
                                        <h6>{selectedProduct.name}</h6>
                                        <p className='price'>£{selectedProduct.price}</p>
                                        <p>{selectedProduct.description}</p>
                                    </div>
                                    <div className='des3'>
                                        <div className='span'>
                                            <span onClick={() => decrease(selectedProduct)}>-</span>
                                            <span>{selectedProduct.count}</span>
                                            <span onClick={() => increase(selectedProduct)}>+</span>
                                        </div>
                                        <div>
                                            <button onClick={() => addBasket(selectedProduct)} >Add to cart</button>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='des4'>
                                        <div>
                                            <p>Category:  <span>
                                                {selectedProduct.category.title}</span></p>
                                        </div>
                                        <div>
                                            <p>Tags: {selectedProduct.tags?.map((tag, index) => (
                                                <span className='sp' key={index}>{tag.title}</span>
                                            ))}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}

export default Shopdetail;
