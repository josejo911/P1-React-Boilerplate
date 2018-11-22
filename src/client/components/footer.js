import React from 'react';

const Footer = () => {
    
    return (
        <footer>
            <div className="wrap">
                <div className="clearFloat">
                    <div className="left">
                        <div className="copyright">
                            &copy; 2018 React Boilerplate.
                        </div>
                    </div>
                    <div className="right">
                        <div className="social_icons">
                            <ul>
                                <li>    
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>    
                                    <a href="https://github.com/josejo911/P1-React-Boilerplate" target="_blank">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    );  
};

export default Footer;