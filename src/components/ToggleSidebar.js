import React, { useState } from "react";
import "./ToggleSideBar.css";
const ToggleSidebar = (props) => {
    const [isOpen, setIsopen] = useState(false);
    //const lista = ['asdasd','vbvcbcvb'];
    const list_props = props.list.map((item) =>
    //const list_props = lista.map((item)=>
    <li>{item}</li>
);
    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <>
                    <nav className="navbar">
                            <div onClick={ToggleSidebar}>{props.name}</div>  
                    </nav>

        <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <div onClick={ToggleSidebar}>{props.name}</div>  
                        </div>
                        
                        <div className="sd-body">
                            <ul>{list_props}</ul>
                        </div>
            </div>
            <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
        </>
    )
}

export default ToggleSidebar;
