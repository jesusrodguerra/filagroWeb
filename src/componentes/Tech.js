import React, {Fragment} from 'react';
import drone from '../drone.jpg'

const Tech = () => {
    return ( 
        <Fragment>
        <section id="tech" class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-6 pl-0 pr-0 tech-img">
                    <img src={drone} alt="Imagen Drone"></img>
                </div>
                <div class="col-12 col-md-6 pr-0 pl-0 tech-text">
                    <div class="text-center pt-3 pl-3 pr-3 pb-3 texto">
                        <h2>Riego de plaguicidas con Drone</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque molestiae nisi corporis explicabo, ratione assumenda consequuntur est mollitia veniam cumque dolorum, expedita ut impedit illo rem, qui ducimus ex.</p>
                        <a class="btn btn-outline-light" href="/">Conoce mas!</a>
                    </div>
                </div>
            </div>
        </section>
            <section className="formulario mt-2 mb-2">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p className="text-uppercase">Contactanos</p>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-8 offset-md-2">
                        <form>
                            <div className="form-row">
                              <div className="form-group col-12 col-md-6">
                                <input type="text" className="form-control" placeholder="Nombre"></input>
                              </div>
                              <div class="form-group col-12 col-md-6">
                                <input type="text" className="form-control" placeholder="Apellido"></input>
                              </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <textarea name="text" className="form-control form-control -lg" placeholder="Dejanos tus dudas"></textarea>
                                </div>
                            </div>
                            <div className="form-row mt-2">
                                <div className="col">
                                    <button type="button" className="btn btn-info btn-block">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
     );
}
 
export default Tech;