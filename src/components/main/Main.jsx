import React from 'react'
import './Main.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Main = () => {
  return (
    <main>
		<h1 id="frontend">Front-end Developer</h1>	
		<h2 className="text-center" id="proyects">Proyects</h2>
			<div className="proyectsContainer d-flex flex-wrap justify-content-evenly">
                <div className="card" style={{width: '18rem'}}>
                    <img src="./images/Felipe-Niederhauser.png" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Felipe Niederhauser Photo Journalist</h5>
                        <p className="card-text">Web App React.js <b>React.js <br/> 4/2023 - current</b></p>
                        <a target="blank" href="https://felipe-niederhauser.netlify.app/" className="btn btn-primary">Go to Proyect</a>
                    </div>
                </div>

                <div className="card" style={{width: '18rem'}}>
                    <img src="./images/paola-jofre-skin-care.png" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Paola Jofre Skin Care</h5>
                        <p className="card-text">e-commerce using React.js and Firebase for Paola Jofre Skin Care <b>React.js - Firebase <br/> 4/2023 - current</b></p>
                        <a target="blank" href="https://paola-jofre-skin-care.netlify.app/" className="btn btn-primary">Go to Proyect</a>
                    </div>
                </div>

                <div className="card" style={{width: '18rem'}}>
                    <img src="./images/LaPlayita.png" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title">La Playita</h5>
                        <p className="card-text"> Website for the nautical school "La Playita." <b>HTML, CSS, JAVASCRIP. <br/> 12/2022</b></p>
                        <a target="blank" href="https://niederhausertomas.github.io/La-playita-web/" className="btn btn-primary">Go to Proyect</a>
                    </div>
                </div>

                <div className="card" style={{width: '18rem'}}>
                    <img src="./images/sunraising.png" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Sunrising</h5>
                        <p className="card-text">Website for "sunraising". <b>HTML, CSS, JAVASCRIP. <br/> 10/2022</b></p>
                        <a target="blank" href="https://sunrising.com.ar/" className="btn btn-primary">Go to Proyect</a>
                    </div>
                </div>

                <div className="card" style={{width: '18rem'}}>
                    <img src="./images/SofiNiederDeco.png" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Sofi Nieder Deco</h5>
                        <p className="card-text"> 
                            e-comerce for "Sofi Nieder Deco". <b>React.js./firebase <br/> 06/2022</b>
                            </p>
                        <a target="blank" href="https://sofi-nieder-deco.netlify.app/" className="btn btn-primary">Go to Proyect</a>
                    </div>
                </div>

                <div className="card" style={{width: '18rem'}}>
                    <img src="./images/sebasHuergo.png" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                       <h5 className="card-title">Sebas Huergo web</h5>
                        <p className="card-text">Website for the film director.<br/> <b>HTML, CSS Y JAVASCRIPT. 06/2022</b></p>
                        <a target="blank" href="https://niederhausertomas.github.io/SebasHuergo/" className="btn btn-primary">Go to Proyect</a>
                    </div>
                </div>

                <div className="card" style={{width: '18rem'}}>
                    <img src="./images/ProyectoDental.png" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Proyecto Dental</h5>
                        <p className="card-text">Management system for a dental office. <br/><b>C++. <br/> 01/2022</b></p>
                        <a target="blank" href="https://github.com/niederhausertomas/Proyecto-Dental.git" className="btn btn-primary">Go to Proyect</a>
                    </div>
                </div>

                <div className="card" style={{width: '18rem'}}>
                    <img src="./images/weather-app.png" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                    <h5 className="card-title">The weather app - Tomas Niederhauser</h5>
                    <p className="card-text">web app using the GeoDB Cities and openweather APIs. <b>React.js. <br/> 3/2023</b></p>
                    <a target="blank" href="https://weather-app-tomas-niederhauser.netlify.app/" className="btn btn-primary">Go to Proyect</a>
                    </div>
                </div>
			</div>

			<hr/>
			<h2 id="lenguajes">
				Languages 
			</h2>
			<hr/>
				<div className="containerIconos text-center">
					<ul className="d-flex flex-wrap justify-content-evenly iconos"> 
						<li className="icono">
							<img src="images/html.png" alt=""/>
							<span>HTML</span>
						</li> 
						<li className="icono">
							<img src="images/css.png" alt=""/>
							<span>CSS</span>
						</li>
						<li className="icono">
							<img src="images/sass.png" alt=""/>
							<span>SASS</span>
						</li>
						<li className="icono">
							<img src="images/Bootstrap.png" alt=""/>
							<span>Bootstrap</span>
						</li>
						<li className="icono">
							<img src="images/javascript.png" alt=""/>
							<span>Javascrip</span>
						</li>
						<li className="icono">
							<img src="images/react.png" alt=""/>
							<span>React.js</span>
						</li>
						<li className="icono">
							<img src="images/firebase.png" alt=""/>
							<span>Firebase</span>
						</li>
						<li className="icono">
							<img src="images/git.png" alt=""/>
							<span>Git</span>
						</li>
						<li className="icono">
							<img src="images/github.png" alt=""/>
							<span>Github</span>
						</li>
						<li className="icono">
							<img src="images/c++.png" alt=""/>
							<span>C++</span>
						</li>
						<li className="icono">
							<img src="images/wordpress.png" alt=""/>
							<span>Wordpress</span>
						</li>
						<li className="icono">
							<img src="images/vueJs.png" alt=""/>
							<span>Vue.js</span>
						</li>
						<li className="icono">
							<img src="images/sql.png" alt=""/>
							<span>Sql</span>
						</li>
					</ul>
				</div>

			<hr/>
			<h2 id="studies">
				Studies 
			</h2>
			<hr/>
			<div>
				<ul className="estudios">
					<li data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">CODER HOUSE - REACT.JS.</li>
					<li data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">CODER HOUSE - JAVASCRIPT.</li>
					<li data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">CODER HOUSE - WEB DEVELOPMENT.</li>
					<li data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">UTN (NATIONAL TECHNICAL UNIVERSITY OF ARGENTINA) - UNIVERSITY TECHNIQUE IN PROGRAMMING. FIRST FULL YEAR.</li>
				    <li data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">UNIVERSITY OF BUENOS AIRES - LAWYER.</li>
				  </ul>
			</div>

			<hr/>
			<h2 id="about">
				About Me 
			</h2>
			<hr/>
			<div>
				<p id="parrafo" className="container">
					I'm a front-end developer with knowledge in several programming languages, including C++, HTML, CSS, JavaScript, and React.js. In C++, I completed the first year of the University Degree in Programming at UTNFRGP, where I learned about conditionals (if, else, switch), loops (for, while, and do-while), pointers, functions, vectors, strings, arrays, structs, and Object-Oriented Programming (OOP), including classes, encapsulation, constructors and destructors, "this" pointer, inheritance, composition, as well as file handling. In HTML and CSS, I have studied at CoderHouse, Devrock School, and complemented my learning with tutorials of "Soy Dalto" on YouTube. Additionally, I have gained knowledge in JavaScript and React.js through my studies at CoderHouse.<br/>
					I understand that learning is a continuous process and there is always something new that I can learn. Also, I am not afraid to ask for help or search for resources online, such as tutorials, forums, and developer communities.
				<a href="https://github.com/niederhausertomas">💼 github</a>
				</p>
			</div>

		</main>
  )
}

export default Main
