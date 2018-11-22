import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import {Link, NavLink} from 'react-router-dom';

class HomePage extends Component {

    head(){
      return (
        <Helmet bodyAttributes={{class: "homePage"}}>
          <title>{`Home Page - React Boilerplate`}</title>
        </Helmet>
      );
    }

    render() {
      return (
        <section className="homePage_wrap">
          {this.head()}
          <div className="hero">
            <div className="content_wrap">
              <h1>
                PROYECTO #1 REACT BOILERPLATE 
              </h1>
              <span className="msg">
                Aplicacion montada en el starter kit o boilerplate para futuros proyectos en react.
              </span>
              <Link to="/about">
                <span>Learn more</span>
              </Link>
            </div>
            <div className="pageScroll">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div className="main">
            <div className="spotlights">
              <div className="grid">
                <div className="column column_4_12">
                  <div className="item_wrap">
                    <div className="img">
                      <img src="https://i.imgur.com/eLk7bOS.png" />
                    </div>
                  </div>
                </div>
                <div className="column column_4_12">
                  <div className="item_wrap">
                    <div className="img">
                      <img src="https://i.imgur.com/mh4qJQ3.png" />
                    </div>
                  </div>
                </div>
                <div className="column column_4_12">
                  <div className="item_wrap">
                    <div className="img">
                      <img src="https://i.imgur.com/0C3t330.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

export default {
  component: HomePage
};