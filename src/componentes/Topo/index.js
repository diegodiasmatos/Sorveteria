import React from "react";
import {Link} from "react-router-dom";
import './css.css';

export default function Topo(){
    return(
        <header className="Topo"> 
                <div className="topo-card">
                       <img className="iamgem-topo" src="assets/logo.png" alt="logomarca"/>
                       <div className="bota-link">
                        <nav className="nav-topo" >
                        <Link className="a" to="/">Home</Link>
                        <Link  className="a"to="/paginafinal">Sabores</Link>
                        <Link className="a" to="/paginaSobre">Sobre</Link>
                        </nav>
                       </div>
                </div>
        </header>
    )
}
