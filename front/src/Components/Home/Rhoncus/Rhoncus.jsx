import React, { useState, useEffect } from 'react';
import './Rhoncus.scss';

function Counter({ end, duration }) {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let start = 0;
        const incrementTime = Math.ceil(duration / end);
        let timer = null;

        const handleScroll = () => {
            const element = document.getElementById('Rhoncus');
            if (!element) return;
            const top = element.getBoundingClientRect().top;
            const bottom = element.getBoundingClientRect().bottom;

            if (top >= 0 && bottom <= window.innerHeight) {
                setVisible(true);
                timer = setInterval(() => {
                    start += 1;
                    setCount(start);
                    if (start === end) clearInterval(timer);
                }, incrementTime);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timer);
        };
    }, [end, duration]);

    return <h6>{visible ? count : 0}</h6>;
}

function Rhoncus() {
    return (
        <section id='Rhoncus'>
            <div className='rhoncus'>
                <div className='dom'>
                    <div className='dom2'>
                        <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-5.png" alt="" />
                        <Counter end={12} duration={4000} />
                        <p>Ornare Dictum</p>
                    </div>
                    <div className='dom2'>
                        <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-5.png" alt="" />
                        <Counter end={12} duration={4000} />
                        <p>Ornare Dictum</p>
                    </div>
                </div>

                <div className='bring'>
                    <div className='bring2'> 
                        <p>Rhoncus At Quis</p>
                        <div className='h3'>
                            <h3>Bringing Ayurveda to Every Home!</h3>
                        </div>
                        <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic15-free-img.png" alt="" />
                    </div>
                </div>
                <div className='heart'>
                    <div className='heart2'>
                        <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-1.png" alt="" />
                        <Counter end={825} duration={3000} />
                        <p>Ornare Dictum</p>
                    </div>
                    <div className='heart2'>
                        <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-5.png" alt="" />
                        <Counter end={12} duration={4000} />
                        <p>Ornare Dictum</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Rhoncus;
