import React from 'react'
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const ResultModal = () => {
    const navigate = useNavigate()
    return (
        <div className="successModal">
            <div className="resultModalInside">
                <Result
                    status="success"
                    title="Payment Successful!"
                    subTitle="Your order has been successfully placed! 🎉 Thank you for choosing us. We're on it! "
                    extra={[
                        <Button type="primary" key="home" onClick={() => {
                            navigate('/')
                        }}  >
                            Go Home
                        </Button>,
                        <Button key="shop" onClick={() => {
                            navigate('/shop')
                        }} >Buy Again</Button>,
                    ]}
                />
            </div>
        </div>
    )
}

export default ResultModal