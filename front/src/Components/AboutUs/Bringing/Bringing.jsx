import React, { useState, useEffect } from 'react';
import './Bringing.scss';

function Counter({ end, duration }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const incrementTime = Math.ceil(duration / end);
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [end, duration]);

    return <h6>{count}</h6>;
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
                            <Counter end={12} duration={2000} />
                            <p>Ornare Dictum</p>
                        </div>
                        <div className='or2'>
                            <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-6.png" alt="" />
                            <Counter end={220} duration={2500} />
                            <p>Ornare Dictum</p>
                        </div>
                    </div>
                    <div className='orr'>
                        <div className='or2'>
                            <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-1.png" alt="" />
                            <Counter end={825} duration={3000} />
                            <p>Ornare Dictum</p>
                        </div>
                        <div className='or2'>
                            <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2021/03/icon-7.png" alt="" />
                            <Counter end={220} duration={2500} />
                            <p>Ornare Dictum</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Bringing;
