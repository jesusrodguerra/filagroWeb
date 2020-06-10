import React from 'react';
import Hojas from '../Hojas.jpg'

const Footer = () => {
    return (  
        <section id="footer" className="container-fluid">
            <div className="row">
                <div className="col hojas text-center">
                    <img src={Hojas} alt="Imagen de hojas"></img>
                </div>
            </div>
            <div className="row piepagina align-items-center text-center">
                <div class="col-12 col-md">
                    <a href="/">Preguntas Frecuentes</a>
                </div>
                <div class="col-12 col-md">
                    <a href="/">Ubicacion</a>
                </div>
                <div class="col-12 col-md">
                    <a href="/">Politica de Privacidad</a>
                </div>
            </div>
        </section>
    );
}
 
export default Footer;