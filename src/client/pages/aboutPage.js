import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../components/banners/internalTextBanner';
import MeetTheTeamSlider from './../components/banners/meetTheTeam';
import { Helmet } from 'react-helmet';

class About extends Component {

    head(){
        return (
            <Helmet bodyAttributes={{class: "aboutPage"}}>
              <title>{`About - React Boilerplate`}</title>
            </Helmet>
        );
    }

    render() {

        return (
            <div>
                {this.head()}
                <InternalTextBanner Heading="About" wrapperClass="about" />
                <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                <div className="main anim-appear">
                    <div className="aboutPage_wrapper">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="content_block">
                                    <h2>
                                        Que es un boilerplate?
                                    </h2>
                                    <p>Cada boilerplate depende de los ingredientes que se utilizan. El punto es que antes de hacer un boilerplate en react bien hecho (en lo que respecta a mis suposiciones), estos podrian ser los ingredientes que se han utilizado para hacer este boilerplate. Prometo que la lista es relativamente pequeña..</p>
                                    <p>React : React es una biblioteca de JavaScript para crear interfaces de usuario. Fue desarrollado por Facebook y se ha convertido en un marco muy popular para el desarrollo front-end. Tiene más de 94K + estrellas en Github, por cierto. Recientemente fue licenciado bajo el MIT. (Mis aclamaciones no se pueden expresar en palabras aquí).</p>
                                    <p>Redux : Redux se describe como un contenedor de estado predecible para aplicaciones JavaScript. Se puede sincronizar fácilmente con casi cualquier marco de JavaScript e incluso aplicaciones básicas basadas en JavaScript de vainilla. Ayuda a separar la lógica empresarial de la aplicación de los componentes funcionales de la interfaz de usuario para permitir una mejor modularidad y características de depuración.</p>
                                    <p>React-Router : es parte de la funcionalidad de reacción que permite a un usuario navegar entre componentes y constituye el corazón y el núcleo de la navegación de reacción en la web. La versión utilizada es 4.2.2, que es uno de los últimos lanzamientos. Se han realizado muchos cambios desde la versión 3 a la versión 4 y lo hemos agregado para hacer uso de todas las características nuevas y extremadamente impresionantes.</p>

                                </div>
                                <MeetTheTeamSlider />
                            </div>
                        </div>
                    </div>
                </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }

};

export default {
  component: About
};