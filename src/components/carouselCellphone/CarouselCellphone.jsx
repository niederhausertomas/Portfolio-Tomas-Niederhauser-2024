import React from 'react'

const CarouselCellphone = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide carouselCellphone">
        <div className="carousel-inner projectsContainer">

        <div className="carousel-item active">
            <div className="card d-block " style={{width: '18rem', margin: 'auto' }}>
              <a target="blank" href="https://www.biorce.com/" className="btn">
                <img src="./images/biorce-web.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Biorce web</h5>
                  <p className="card-text">Web App <b>React.js - Vite</b></p>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card d-block " style={{width: '18rem', margin: 'auto' }}>
              <a target="blank" href="https://www.kangenargentina.com/" className="btn btn-primary">
                <img src="./images/aguaKangen.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Agua Kangen</h5>
                  <p className="card-text">Website for "Agua Kangen". <b>HTML, CSS, JAVASCRIP. </b></p>						
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card d-block " style={{width: '18rem', margin: 'auto' }}>
              <a target="blank" href="https://benergy.ar/" className="btn btn-primary">
                <img src="./images/sunraising.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">B-energy</h5>
                  <p className="card-text">Website for "B-energy". <b>HTML, CSS, JAVASCRIP. </b></p>						
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card d-block " style={{width: '18rem', margin: 'auto' }}>
              <a target="blank" href="https://colletteconsignment.com/" className="btn">
                <img src="./images/Collette.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Collette Home - Southampton, NY</h5>
                  <p className="card-text">e commerce for "Collette Home". <b>Shopify </b></p>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card d-block " style={{width: '18rem', margin: 'auto' }}>
              <a target="blank" href="https://el-nido.com.ar/" className="btn">
                <img src="./images/ElNidoFutbol.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">El Nido Futbol</h5>
                  <p className="card-text">Website for "El Nido Futbol". <b>HTML, CSS, JAVASCRIP. </b></p>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card d-block " style={{width: '18rem', margin: 'auto' }}>
              <a target="blank" href="https://niederhausertomas.github.io/La-playita-web/" className="btn btn-primary">
                <img src="./images/LaPlayita.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">La Playita</h5>
                  <p className="card-text"> Website for the nautical school "La Playita." <b>HTML, CSS, JAVASCRIP. </b></p>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card d-block " style={{width: '18rem', margin: 'auto' }}>
              <a target="blank" href="https://felipe-niederhauser.netlify.app/" className="btn">
                <img src="./images/Felipe-Niederhauser.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Felipe Niederhauser Photo Journalist</h5>
                  <p className="card-text">Web App <b>React.js</b></p>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card d-block " style={{width: '18rem', margin: 'auto' }}>
              <a target="blank" href="https://niederhausertomas.github.io/SebasHuergo/" className="btn btn-primary">
                <img src="./images/sebasHuergo.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Sebas Huergo web</h5>
                  <p className="card-text">Website for the film director.<br/> <b>HTML, CSS Y JAVASCRIPT. </b></p>
                </div>
              </a>
            </div>
          </div>
  
          <div className="carousel-item">
            <div className="card d-block " style={{width: '18rem', margin: 'auto' }}>
              <a target="blank" href="https://github.com/niederhausertomas/Proyecto-Dental.git" className="btn btn-primary">
                <img src="./images/ProyectoDental.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Proyecto Dental</h5>
                  <p className="card-text">Management system for a dental office. <br/><b>C++. <br/> </b></p>
                </div>
              </a>
            </div>
          </div>

      </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>



      {/* <div id="carouselExample" className="carousel slide carouselCellphone">
        <div className="carousel-inner projectsContainer">



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
          

          
          <div className="carousel-item">
            <div className="card" style={{width: '18rem'}}>
              <a target="blank" href="https://weather-app-tomas-niederhauser.netlify.app/" className="btn btn-primary">
                <img src="./images/weather-app.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                <h5 className="card-title">The weather app - Tomas Niederhauser</h5>
                <p className="card-text">web app using the GeoDB Cities and openweather APIs. <b>React.js. <br/> 3/2023</b></p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

     
  </div> */}
  </div>
  )
}

export default CarouselCellphone



