import React from 'react';
import ImagenProducto from '../ImagenProducto.png'

const Card = () => {
    return ( 
    <section id="producto" className="productos mt-4 mb-4">
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <p className="text-uppercase">Conoce sobre nuestros</p>
                    <h2>Productos</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 mb-1">
                    <div className="card">
                        <img src={ImagenProducto} class="card-img-top" alt="Producto1"></img>
                        <div className="card-body">
                          <h5 className="card-title">Producto 1</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="/" className="btn">Conoce mas!</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-1">
                    <div className="card">
                        <img src={ImagenProducto} className="card-img-top" alt="Producto1"></img>
                        <div className="card-body">
                          <h5 className="card-title">Producto 1<span className="badge badge-dark">Nuevo</span></h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="/" className="btn">Conoce mas!</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-1">
                    <div className="card">
                        <img src={ImagenProducto} className="card-img-top" alt="Producto1"></img>
                        <div className="card-body">
                          <h5 className="card-title">Producto 1</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="/" className="btn">Conoce mas!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     );
}
 
export default Card;