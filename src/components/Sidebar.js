import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import "./Sidebar.css";
import ToggleSidebar from './ToggleSidebar';
function Sidebar() {
    const [click, setClick] = useState(false);
    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
                <div className='sidebar-container'>

                    <ul className={click ?'side-menu active':'side-menu'}>
                        <li className='side-item'>
                            <Link to="/roles_pago" className='side-links' onClick={closeMobileMenu}> 
                            <ToggleSidebar name='Roles de pago' />
                            </Link>
                        </li>
                        <li className='side-item'>
                            <Link to="/comercial" className='side-links' onClick={closeMobileMenu}> 
                                <ToggleSidebar 
                                    name='comercial' 
                                    list={['Registro de actividades']}
                                />  
                            </Link>
                        </li>
                        <li className='side-item'>
                            <Link to="/coperativas_inbound" className='side-links' onClick={closeMobileMenu}> 
                                <ToggleSidebar 
                                    name='Coperativas inbound' 
                                    list={['Gestión San Francisco',
                                            'Gestión Inbound',
                                            'Gestión Redes Sociales']}
                                /> 
                            </Link>
                        </li>
                        <li className='side-item'>
                            <Link to="/coperativas_outbound" className='side-links' onClick={closeMobileMenu}> 
                                <ToggleSidebar 
                                    name='Coperativas Outbound' 
                                    list={['CCCA',
                                            'Gestión Inbound',
                                            'Gestión Redes Sociales']}
                                /> 
                            </Link>
                        </li>
                        <li className='side-item'>
                            <Link to="/banco_pichincha" className='side-links' onClick={closeMobileMenu}> 
                            <ToggleSidebar 
                                    name='Banco Pichincha' 
                                    list={['CCCA',
                                            'Gestión Inbound',
                                            'Gestión Redes Sociales']}
                                /> 
                            </Link>
                        </li>
                        <li className='side-item'>
                            <Link to="/bgr" className='side-links' onClick={closeMobileMenu}> 
                            <ToggleSidebar 
                                    name='BGR' 
                                    list={['Novedeades BGR',
                                            'Encuesta'
                                        ]}
                                /> 
                            </Link>
                        </li>
                        <li className='side-item'>
                            <Link to="/otras_campañas" className='side-links' onClick={closeMobileMenu}> 
                            <ToggleSidebar 
                                    name='Otras Campañas' 
                                    list={['Claro',
                                            'Ecuasistencias Ventas',
                                            'Ecuasistencias Encuestas',
                                            'IP TV',
                                            'Jardines del Valle',
                                            'Practi Plan'
                                        ]}
                                /> 
                            </Link>
                        </li>
                    </ul>  
                    
                </div>
        </>
    )
}

export default Sidebar

