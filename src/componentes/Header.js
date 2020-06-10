import React, {Fragment} from 'react';
import field1 from '../field1.jpg';
import field2 from '../field2.jpg';

const Header = () => {

    return ( 
        <Fragment>
            <nav id="nav" className="navbar navbar-expand-md navbar-dark fixed-top">
                <a className="navbar-brand" href="/">Filagro</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#carusel">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#producto">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tech">Tecnologia</a>
                        </li>    
                    </ul>
                </div>  
            </nav>

            <div id="carusel" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={field2} className="d-block w-100" alt="field"></img>
                    </div>
                    <div class="carousel-item">
                        <img src={field1} className="d-block w-100" alt="field 2"/>
                    </div>
                    <div className="overlay">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 offset-md-6 text-center text-md-right">
                                    <h1>Bienvenidos a <span>Filagro</span></h1>
                                    <p className="d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia saepe pariatur</p>
                                    <a className="btn btn-outline-light" href="/">Conoce mas sobre nosotros</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </Fragment>

     );
}
export default Header;