import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';
/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';


const Footer = () =>{
    // data
    let data = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage='Page created by CodeCove Innovations'
                        />
                    </p>
                    <p>&copy; {data}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociais">
                    <a href="https://www.linkedin.com/in/alexandre-pires-a6ba131a1/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/aelpires" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/alexandre.lpires/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="switch" id="switch">
                    <DarkMode />
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);