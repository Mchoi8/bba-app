import React from 'react';


const footerStyles = () => {



};


const Footer = () => {
    return (

        <footer>
            <hr></hr>
            <nav className='footerNav'>
                <ul>
                    <li><h4>Church Location</h4></li>
                    <li>Berean Community Church</li>
                    <li>17911 Mitchell S.</li>
                    <li>Irvine, CA 92614</li>
                    <li><a href='https://bereancc.com/meeting-times-location'>Map & Directions</a></li>
                </ul>

                <ul>
                    <li><h4>Contact</h4></li>
                    <li>info@bereancc.com</li>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </ul>

                <ul>
                    <li><h4>BCC image</h4></li>
                    <li>© 2019</li>
                    <li>Berean Community Church</li>
                    <li>All Rights Reserved</li>
                </ul>
            </nav>
            
        </footer>

    );

}


export default Footer;