import React, { useContext, useState, useEffect } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { FiList, FiGrid } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';
import './Shopp.scss';
import mainContext from './../../Context/Context';
import { FaShoppingBag } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { basketc } from '../../Context/Basketc';

function Shopp() {
  const { product: allProducts } = useContext(mainContext);
  const { baddBasket } = useContext(basketc);
  const [column, setColumn] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [value, setValue] = useState([0, 1000]); 
  const { addBasket } = useContext(basketc);
  const [data, setData] = useState(allProducts);
  const [sortType, setSortType] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setData(allProducts);
  }, [allProducts]);

  const openModal = (product) => {
    console.log('Opening modal for product:', product);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const MIN = 0;
  const MAX = 1000;

  const searchingData = (e) => {
    const searchedData = e.target.value.trim().toLowerCase();
    if (searchedData === "") {
      setData([...allProducts]);
    } else {
      const searching = allProducts.filter(item =>
        item.name.trim().toLowerCase().includes(searchedData)
      );
      setData([...searching]);
    }
  };

  const applyFilter = () => {
    const filteredProducts = allProducts.filter(product =>
      product.price >= value[0] && product.price <= value[1]
    );
    setData(filteredProducts);
  };

  const resetFilter = () => {
    setValue([MIN, MAX]);
    setData(allProducts);
  };

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortType(sortValue);
    let sortedData = [...data];
    switch (sortValue) {
      case 'A-Z':
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Z-A':
        sortedData.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'low-to-high':
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case 'high-to-low':
        sortedData.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setData(sortedData);
  };

  return (
    <>
      <section id={column ? 'Shopp' : 'Shopp2'}>
        <div className='shopp'>
          <div className='fd'>
            <div className='fdb'>
              <button
                className='btn btn-primary'
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasScrolling'
                aria-controls='offcanvasScrolling'
              >
                <span><astra-woo-filter-icon /></span>
                Filter
              </button>
            </div>
            <div className='fdbf'>
              <div className='fdf'>
                <form className='form' action=''>
                  <select name='product' id='products' onChange={handleSortChange}>
                    <option value='A-Z'>Sort by A-Z</option>
                    <option value='Z-A'>Sort by Z-A</option>
                    <option value='low-to-high'>Sort by price: low to high</option>
                    <option value='high-to-low'>Sort by price: high to low</option>
                  </select>
                </form>
              </div>
              <div className='fbb'>
                <FiGrid className='gr' onClick={() => setColumn(true)} />
                <FiList className='li' onClick={() => setColumn(false)} />
              </div>
            </div>
          </div>

          <div>
            {column ? (
              <div className='container'>
                {data.map((product) => (
                  <div className='card' key={product.id}>
                    <a href={'/shopdetail/' + product._id}>
                      <img src={product.img} alt='' />
                    </a>
                    <div className='overlay'>
                      <FaShoppingBag onClick={() => addBasket(product)} className='icon' />
                      <IoEyeSharp className='icon' onClick={() => openModal(product)} />
                    </div>
                    <div className='p3'>
                      <p>{product.title}</p>
                      <p>{product.name}</p>
                      <p>${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className='container'>
                {data.map((product) => (
                  <div className='card' key={product.id}>
                    <img src={product.img} alt='' />
                    <div className='overlay'>
                      <FaShoppingBag className='icon' onClick={() => addBasket(product)} />
                      <IoEyeSharp className='icon' onClick={() => openModal(product)} />
                    </div>
                    <div className='p4'>
                      <p>{product.title}</p>
                      <p>{product.name}</p>
                      <p>${product.price}</p>
                      <p>{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
                        <button onClick={() => addBasket(selectedProduct)}>Add to cart</button>
                      </div>
                    </div>
                    <hr />
                    <div className='des4'>
                      <div>
                        <p>Category: {selectedProduct.category.title}</p>
                      </div>
                      <div>
                        <p>Tags: {selectedProduct.tags?.map((tag, index) => (
                          <span className='mr-2' key={index}>{tag.title}</span>
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
      <div
        className='offcanvas offcanvas-start'
        data-bs-scroll='true'
        data-bs-backdrop='false'
        tabIndex='-1'
        id='offcanvasScrolling'
        aria-labelledby='offcanvasScrollingLabel'
      >
        <div className='offcanvas-header'>
          <button
            type='button'
            className='btn-close text-reset'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
            onClick={toggleFilter}
          ></button>
        </div>
        <div className='offcanvas-body'>
          <div className='searchin'>
            <input
              placeholder='search products...'
              type='text'
              id='search'
              onChange={searchingData}
            />
            <button type='submit'>
              <FaAngleRight />
            </button>
          </div>
          <div className='pricefilter'>
            <h5>Filter by price</h5>
            <div className='price-range-slider'>
              <p className='range-value'>
                <input
                  type='text'
                  id='amount'
                  value={`$${value[0]} - $${value[1]}`}
                  readOnly
                />
              </p>
              <Range
                values={value}
                step={10}
                min={MIN}
                max={MAX}
                onChange={handleChange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '4px',
                      width: '250px',
                      background: getTrackBackground({
                        values: value,
                        colors: ['#ccc', '#7a9a10', '#ccc'],
                        min: MIN,
                        max: MAX,
                      }),
                      borderRadius: '2px',
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '20px',
                      width: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#7a9a10',
                      border: '1px solid #CCC',
                    }}
                  />
                )}
              />
              <div className='resap'>
                <button className='reset' onClick={resetFilter}> Reset</button>
                <button className='apply' onClick={applyFilter}>Apply</button>
              </div>
            </div>
            <div className='cat'>
              <h5>Product Categories</h5>
              <ul className='productlist'>
                <li>
                  <div className='count'>
                    <p className='cate' >tea</p>
                    <p>(4)</p>
                  </div>
                  <div className='count'>
                    <p className='cate' >oil</p>
                    <p>(4)</p>
                  </div>
                  <div className='count'>
                    <p className='cate' >essential oil</p>
                    <p>(4)</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className='recently'>
              <h5>Recently Viewed Products</h5>
              <div className='recent'>
                <div className='recentimg'>
                  <img
                    src='https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg'
                    alt=''
                  />
                </div>
                <div className='recentdes'>
                  <p>Ayurvedic Soap</p>
                  <p>£32.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopp;
