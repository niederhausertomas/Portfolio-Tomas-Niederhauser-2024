import React from 'react'
import './Main.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Main = () => {
  return (
    <main>
		<h2 className="text-center" id="projects">Projects</h2>
			<div className="projectsContainer d-flex flex-wrap justify-content-evenly">
					<div className="card" style={{width: '18rem'}}>
						<a target="blank" href="https://felipe-niederhauser.netlify.app/" className="btn btn-primary">
							<img src="./images/Felipe-Niederhauser.png" className="card-img-top" alt="..."/>
							<div className="card-body text-center">
								<h5 className="card-title">Felipe Niederhauser Photo Journalist</h5>
								<p className="card-text">Web App React.js <b>React.js <br/> 4/2023</b></p>
							</div>
						</a>
					</div>

                <div className="card" style={{width: '18rem'}}>
					<a target="blank" href="https://paola-jofre-skin-care.netlify.app/" className="btn btn-primary">
						<img src="./images/paola-jofre-skin-care.png" className="card-img-top" alt="..."/>
						<div className="card-body text-center">
							<h5 className="card-title">Paola Jofre Skin Care</h5>
							<p className="card-text">e-commerce using React.js and Firebase for Paola Jofre Skin Care <b>React.js - Firebase <br/> 4/2023</b></p>
                    	</div>
					</a>
                </div>

                <div className="card" style={{width: '18rem'}}>
					<a target="blank" href="https://niederhausertomas.github.io/La-playita-web/" className="btn btn-primary">
						<img src="./images/LaPlayita.png" className="card-img-top" alt="..."/>
						<div className="card-body text-center">
							<h5 className="card-title">La Playita</h5>
							<p className="card-text"> Website for the nautical school "La Playita." <b>HTML, CSS, JAVASCRIP. <br/> 12/2022</b></p>
						</div>
					</a>
                </div>

                <div className="card" style={{width: '18rem'}}>
					<a target="blank" href="https://sunrising.com.ar/" className="btn btn-primary">
						<img src="./images/sunraising.png" className="card-img-top" alt="..."/>
						<div className="card-body text-center">
							<h5 className="card-title">Sunrising</h5>
							<p className="card-text">Website for "sunraising". <b>HTML, CSS, JAVASCRIP. <br/> 10/2022</b></p>						
						</div>
					</a>
                </div>

                <div className="card" style={{width: '18rem'}}>
					<a target="blank" href="https://sofi-nieder-deco.netlify.app/" className="btn btn-primary">
						<img src="./images/SofiNiederDeco.png" className="card-img-top" alt="..."/>
						<div className="card-body text-center">
							<h5 className="card-title">Sofi Nieder Deco</h5>
							<p className="card-text"> 
								e-comerce for "Sofi Nieder Deco". <b>React.js./firebase <br/> 06/2022</b>
							</p>
                    	</div>
					</a>
                </div>

                <div className="card" style={{width: '18rem'}}>
					<a target="blank" href="https://niederhausertomas.github.io/SebasHuergo/" className="btn btn-primary">
						<img src="./images/sebasHuergo.png" className="card-img-top" alt="..."/>
						<div className="card-body text-center">
						<h5 className="card-title">Sebas Huergo web</h5>
							<p className="card-text">Website for the film director.<br/> <b>HTML, CSS Y JAVASCRIPT. 06/2022</b></p>
						</div>
					</a>
                </div>

                <div className="card" style={{width: '18rem'}}>
					<a target="blank" href="https://github.com/niederhausertomas/Proyecto-Dental.git" className="btn btn-primary">
						<img src="./images/ProyectoDental.png" className="card-img-top" alt="..."/>
                    	<div className="card-body text-center">
                        	<h5 className="card-title">Proyecto Dental</h5>
                        	<p className="card-text">Management system for a dental office. <br/><b>C++. <br/> 01/2022</b></p>
                    	</div>
                    </a>
                </div>

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

			<hr/>
			<h2 id="Skills">
				Skills 
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
							<img src="images/Mysql.png" alt=""/>
							<span>MySql</span>
						</li>
						<li className="icono">
							<img src="images/Typescript.png" alt=""/>
							<span>Typescript</span>
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
				Hello! My name is Tomás and I am a passionate front-end developer. I discovered my passion for programming after being a lawyer for many years. As a result, I decided to embark on a new adventure and study programming, which has been a life-changing decision.
				<br/><br/>
				Currently, I have knowledge in several programming languages, including C++, HTML, CSS, JavaScript, and React.js. In C++, I completed the first year of the Programming Technician degree at the National Technological University of Argentina. In HTML and CSS, I have studied at CoderHouse and Devrock School, and supplemented my learning with tutorials from YouTube, LinkedIn Learning. Additionally, I have acquired knowledge in JavaScript and React.js through courses at CoderHouse.
				<br/><br/>
				Moreover, through hands-on experience, I have expanded my skill set to include WordPress/PHP, Vue.js, MySQL, and TypeScript. Embracing the idea that learning is a continuous journey, I actively seek out opportunities to enhance my expertise. I am proactive in leveraging resources such as tutorials, forums, and developer communities to stay updated with the latest trends and best practices.
				<br/><br/>
				I enjoy working in environments where people are valued, and where there is a focus on professional and personal development. I like to help others and work in a team. I believe that communication is the key to success in any type of organization and teamwork.
				<br/><br/>
				My personal goal is to continue growing and developing as a programmer, which is what I am truly passionate about. I want to continue gaining experience and someday be the one to pass on that knowledge to others.
				</p>
			</div>

		</main>
  )
}

export default Main
