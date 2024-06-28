
import React, { useState, useEffect } from 'react';
import './Bringing.scss';

function Counter({ end, duration }) {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let start = 0;
        const incrementTime = Math.ceil(duration / end);
        let timer = null;

        const handleScroll = () => {
            const element = document.getElementById('Bringing');
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

function Bringing() {
    return (
        <section id='Bringing'>
            <div className='bringing'>
                <div className='or1'>
                    <p>Rhoncus At Quis</p>
                    <h3>Bringing Ayurveda to Every Home!</h3>
                </div>
                <div className='ornare'>
                    <div className='orr'>
                        <div className='or2'>
                            <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-5.png" alt="" />
                            <Counter end={12} duration={6000} />
                            <p>Ornare Dictum</p>
                        </div>
                        <div className='or2'>
                            <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-6.png" alt="" />
                            <Counter end={220} duration={5000} />
                            <p>Ornare Dictum</p>
                        </div>
                    </div>
                    <div className='orr'>
                        <div className='or2'>
                            <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-1.png" alt="" />
                            <Counter end={825} duration={6000} />
                            <p>Ornare Dictum</p>
                        </div>
                        <div className='or2'>
                            <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-7.png" alt="" />
                            <Counter end={220} duration={6500} />
                            <p>Ornare Dictum</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Bringing;
