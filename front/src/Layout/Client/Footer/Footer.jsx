import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './Footer.scss'

function Footer() {
    return (
        <footer>
            <div className='footerContainer'>
                <div className="Icons">
                    <a href=""><i><FaFacebook /></i></a>
                    <a href=""><i><FaTwitter /></i></a>
                    <a href=""><i><FaInstagram /></i></a>
                    <a href=""><i><FaYoutube /></i></a>
                </div>
                <div className="footerBottom">
                    <p>Copyright © 2024 Ayurveda | Powered by Ayurveda</p>
                </div>

            </div>

        </footer>
    )
}

export default Footer