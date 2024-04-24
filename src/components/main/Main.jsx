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
				<strong>Hello!</strong> My name is <strong>Tomás</strong> and I am a passionate <strong>front-end developer</strong>. I discovered my passion for programming after being a lawyer for many years. As a result, I decided to embark on a new adventure and study programming, which has been a life-changing decision.
				<br/><br/>
				Currently, I have knowledge in several programming languages, including <strong>C++</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React.js</strong>. In <strong>C++</strong>, I completed the first year of the <strong>Programming Technician</strong> degree at the <strong>National Technological University of Argentina</strong>. In <strong>HTML</strong> and <strong>CSS</strong>, I have studied at <strong>CoderHouse</strong> and <strong>Devrock School</strong>, and supplemented my learning with tutorials from <strong>YouTube</strong>, <strong>LinkedIn Learning</strong>. Additionally, I have acquired knowledge in <strong>JavaScript</strong> and <strong>React.js</strong> through courses at <strong>CoderHouse</strong>.
				<br/><br/>
				Moreover, through hands-on experience, I have expanded my skill set to include <strong>WordPress/PHP</strong>, <strong>Vue.js</strong>, <strong>MySQL</strong>, and <strong>TypeScript</strong>. Embracing the idea that learning is a <strong>continuous journey</strong>, I actively seek out opportunities to enhance my expertise. I am proactive in leveraging resources such as tutorials, forums, and developer communities to stay updated with the latest trends and <strong>best practices</strong>.
				<br/><br/>
				I enjoy working in environments where people are valued, and where there is a focus on professional and personal development. I like to <strong>help others</strong> and work in a team. I believe that <strong>communication</strong> is the <strong>key to success</strong> in any type of organization and <strong>teamwork</strong>.
				<br/><br/>
				My <strong>personal goal</strong> is to continue growing and developing as a <strong>programmer</strong>, which is what I am truly passionate about. I want to continue gaining experience and someday be the one to pass on that knowledge to others.
				</p>
			</div>

			<Contact/>
		</main>
  )
}

export default Main
