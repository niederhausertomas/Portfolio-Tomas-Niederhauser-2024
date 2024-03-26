import React from 'react'
import './Carousel.css'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide carouselWeb">
        <div className="carousel-inner projectsContainer">
            <div className="carousel-item active">
              <div className="d-flex flex-wrap justify-content-evenly">

                <div className="card" style={{width: '18rem'}}>
                  <a target="blank" href="https://felipe-niederhauser.netlify.app/" className="btn">
                      <img src="./images/Felipe-Niederhauser.png" className="card-img-top" alt="..."/>
                      <div className="card-body text-center">
                          <h5 className="card-title">Felipe Niederhauser Photo Journalist</h5>
                          <p className="card-text">Web App <b>React.js</b></p>
                      </div>
                  </a>
                </div>

                <div className="card" style={{width: '18rem'}}>
                  <a target="blank" href="https://sunrising.com.ar/" className="btn btn-primary">
                    <img src="./images/sunraising.png" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                      <h5 className="card-title">Sunrising</h5>
                      <p className="card-text">Website for "sunraising". <b>HTML, CSS, JAVASCRIP. </b></p>						
                    </div>
                  </a>
                </div>

                <div className="card" style={{width: '18rem'}}>
                  <a target="blank" href="https://niederhausertomas.github.io/AguaKangen/" className="btn btn-primary">
                    <img src="./images/aguaKangen.png" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                      <h5 className="card-title">Agua Kangen</h5>
                      <p className="card-text">Website for "Agua Kangen". <b>HTML, CSS, JAVASCRIP. </b></p>						
                    </div>
                  </a>
                </div>

              </div>
            </div>

            <div className="carousel-item">
              <div className="d-flex flex-wrap justify-content-evenly">

              <div className="card" style={{width: '18rem'}}>
                  <a target="blank" href="https://paola-jofre-skin-care.netlify.app/" className="btn" >
                    <img src="./images/paola-jofre-skin-care.png" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Paola Jofre Skin Care</h5>
                        <p className="card-text">e-commerce using <b>React.js - Firebase</b> for Paola Jofre Skin Care </p>
                    </div>
                  </a>
                </div>

                <div className="card" style={{width: '18rem'}}>
                  <a target="blank" href="https://niederhausertomas.github.io/La-playita-web/" className="btn btn-primary">
                    <img src="./images/LaPlayita.png" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                      <h5 className="card-title">La Playita</h5>
                      <p className="card-text"> Website for the nautical school "La Playita." <b>HTML, CSS, JAVASCRIP. </b></p>
                    </div>
                  </a>
                </div>

                <div className="card" style={{width: '18rem'}}>
                  <a target="blank" href="https://sofi-nieder-deco.netlify.app/" className="btn btn-primary">
                    <img src="./images/SofiNiederDeco.png" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                      <h5 className="card-title">Sofi Nieder Deco</h5>
                      <p className="card-text"> 
                        e-comerce for "Sofi Nieder Deco". <b>React.js. - firebase </b>
                      </p>
                    </div>
                  </a>
                </div>

              </div>
            </div>

            <div className="carousel-item">
            <div className="d-flex flex-wrap justify-content-evenly">

            <div className="card" style={{width: '18rem'}}>
                  <a target="blank" href="https://niederhausertomas.github.io/SebasHuergo/" className="btn btn-primary">
                    <img src="./images/sebasHuergo.png" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                    <h5 className="card-title">Sebas Huergo web</h5>
                      <p className="card-text">Website for the film director.<br/> <b>HTML, CSS Y JAVASCRIPT. </b></p>
                    </div>
                  </a>
                </div>

              <div className="card" style={{width: '18rem'}}>
                <a target="blank" href="https://github.com/niederhausertomas/Proyecto-Dental.git" className="btn btn-primary">
                  <img src="./images/ProyectoDental.png" className="card-img-top" alt="..."/>
                  <div className="card-body text-center">
                      <h5 className="card-title">Proyecto Dental</h5>
                      <p className="card-text">Management system for a dental office. <br/><b>C++. <br/> </b></p>
                  </div>
                </a>
              </div>

              <div className="card" style={{width: '18rem'}}>
                <a target="blank" href="https://weather-app-tomas-niederhauser.netlify.app/" className="btn btn-primary">
                  <img src="./images/weather-app.png" className="card-img-top" alt="..."/>
                  <div className="card-body text-center">
                  <h5 className="card-title">The weather app - Tomas Niederhauser</h5>
                  <p className="card-text">web app using the GeoDB Cities and openweather APIs. <b>React.js. </b></p>
                  </div>
                </a>
              </div>
              </div>

            </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel



