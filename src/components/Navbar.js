import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">                
                <div className='nav__container'>    
                        <a>
                                <Link to="/" className='nav-links' onClick={closeMobileMenu}> 
                                Kimobill
                                </Link>
                        </a>                        
                        <a>
                                <Link to="/state" className='nav-links' onClick={closeMobileMenu}> 
                                    estado
                                </Link>
                        </a>
                        <a>
                                <Link to="/user" className='nav-links' onClick={closeMobileMenu}> 
                                    Usuario
                                </Link>
                        </a>
                </div>
                <div className='menu__icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                </div>
            </nav>
        </>
        
        
    )
}

export default Navbar

