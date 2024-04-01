import React from 'react'

const CarouselCellphone = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide carouselCellphone">
        <div class="carousel-inner projectsContainer">
        
          <div className="carousel-item active">
            <div className="card d-block " style={{width: '18rem', margin: '0px 45px' }}>
              <a target="blank" href="https://felipe-niederhauser.netlify.app/" className="btn">
                <img src="./images/Felipe-Niederhauser.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Felipe Niederhauser Photo Journalist</h5>
                  <p className="card-text">Web App React.js <b>React.js</b></p>
                </div>
              </a>
            </div>
          </div>

          <div class="carousel-item">
            <div className="card d-block " style={{width: '18rem', margin: '0px 45px'}}>
                <a target="blank" href="https://niederhausertomas.github.io/AguaKangen/" className="btn" >
                  <img src="./images/aguaKangen.png" className="card-img-top" alt="..."/>
                  <div className="card-body text-center">
                    <h5 className="card-title">Agua Kangen</h5>
                    <p className="card-text">Website for "Agua Kangen". <b>HTML, CSS, JAVASCRIP. </b></p>						
                  </div>
                </a>
            </div>
          </div>

          <div class="carousel-item">
            <div className="card d-block " style={{width: '18rem', margin: '0px 45px' }}>
              <a target="blank" href="https://paola-jofre-skin-care.netlify.app/" className="btn" >
                <img src="./images/paola-jofre-skin-care.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Paola Jofre Skin Care</h5>
                  <p className="card-text">e-commerce for Paola Jofre Skin Care <b>React.js - Firebase </b></p>
                </div>
              </a>
            </div>
          </div>

          <div class="carousel-item">
            <div className="card d-block" style={{width: '18rem', margin: '0px 45px' }}>
              <a target="blank" href="https://niederhausertomas.github.io/La-playita-web/" className="btn btn-primary">
                <img src="./images/LaPlayita.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">La Playita</h5>
                  <p className="card-text"> Website for the nautical school "La Playita." <b>HTML, CSS, JAVASCRIP. </b></p>
                </div>
              </a>
            </div>
          </div>
  
          <div class="carousel-item">
            <div className="card" style={{width: '18rem', margin: '0px 45px' }}>
              <a target="blank" href="https://sunrising.com.ar/" className="btn btn-primary">
                <img src="./images/sunraising.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Sunrising</h5>
                  <p className="card-text">Website for "sunraising". <b>HTML, CSS, JAVASCRIP. </b></p>						
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card" style={{width: '18rem', margin: '0px 45px' }}>
              <a target="blank" href="https://sofi-nieder-deco.netlify.app/" className="btn btn-primary">
                <img src="./images/SofiNiederDeco.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title">Sofi Nieder Deco</h5>
                  <p className="card-text"> 
                    e-comerce for "Sofi Nieder Deco". <b>React.js./firebase</b>
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card" style={{width: '18rem', margin: '0px 45px' }}>
              <a target="blank" href="https://niederhausertomas.github.io/SebasHuergo/" className="btn btn-primary">
                <img src="./images/sebasHuergo.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                <h5 className="card-title">Sebas Huergo web</h5>
                  <p className="card-text">Website for the film director.<br/> <b>HTML, CSS Y JAVASCRIPT.</b></p>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card" style={{width: '18rem', margin: '0px 45px' }}>
              <a target="blank" href="https://github.com/niederhausertomas/Proyecto-Dental.git" className="btn btn-primary">
                <img src="./images/ProyectoDental.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title">Proyecto Dental</h5>
                    <p className="card-text">Management system for a dental office. <br/><b>C++.</b></p>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card" style={{width: '18rem', margin: '0px 45px' }}>
              <a target="blank" href="https://weather-app-tomas-niederhauser.netlify.app/" className="btn btn-primary">
                <img src="./images/weather-app.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                <h5 className="card-title">The weather app - Tomas Niederhauser</h5>
                <p className="card-text">web app using the GeoDB Cities and openweather APIs. <b>React.js.</b></p>
                </div>
              </a>
            </div>
          </div>

  
  
      </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>



      {/* <div id="carouselExample" class="carousel slide carouselCellphone">
        <div class="carousel-inner projectsContainer">



        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
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



