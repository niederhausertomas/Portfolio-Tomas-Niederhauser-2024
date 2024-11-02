import React from 'react'
import './Main.css'
import Carousel from '../carousel/Carousel'
import CarouselCellphone from '../carouselCellphone/CarouselCellphone'
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';
import Studies from '../studies/Studies';



const Main = () => {
  return (
    <main>
		<h2 className="text-center" id="projects">Projects</h2>
			<Carousel/>
			<CarouselCellphone/>
		<h2 id="Skills">Skills</h2>
			<Skills/>
			<h2 id="studies">
				Studies 
			</h2>

			<div className='studiesContainer'>
				<Studies/>	

			</div>

			<h2 id="about">
				About Me 
			</h2>
			<div className='container' id="parrafoContainer">
				<p id="parrafo" >
				Hello! I’m Tomás, a passionate front-end developer. After a career as a lawyer, I discovered my true calling in programming and made the life-changing decision to dive into tech.<br/><br/>
				
				I’m skilled in C++, HTML, CSS, JavaScript, and React.js, having studied at institutions like the National Technological University of Argentina, CoderHouse, and Devrock School. I’ve also gained hands-on experience with WordPress/PHP, Vue.js, MySQL, and TypeScript, continually learning through tutorials and developer communities to stay current.<br/><br/>
				
				I thrive in collaborative environments, value open communication, and enjoy helping others succeed. My goal is to keep growing as a programmer and, one day, pass on my knowledge to others.
				</p>
			</div>

			<Contact/>
		</main>
  )
}

export default Main
