import React from 'react'
import './Header.css'

const Header = () => {

    const downloadResume = () => {
        const url = './ResumeTomasNiederhauser2024.pdf';
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'ResumeTomasNiederhauser2024.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

  return (
    <header>
		<nav>	
			<nav className="navbar navbar-expand-lg fixed-top">
				<div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#studies">Studies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about" >About me </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact" >Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
				<div id="fotoNombre" className="container">
					<div className="d-flex justify-content-center">
						<img className="foto" alt='profilePhoto' src="images/tomas.png"/>
					</div>
						<h2 id="nombre" className="d-flex justify-content-center">
							Tomás <br/>
							Niederhauser
						</h2>
                    <div className='frontendContainer'>
                        <h1 id="frontend">Front-end Developer</h1>
                    </div>
				</div>
			</nav>
            
                <button type="button" id="resume" className="btn btn-light" onClick={downloadResume}>Download resume</button>
            
			<a href="https://wa.me/34600517772" target="blank" id="btnWhatsApp">
				<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
					<path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
				</svg>
			</a>

			<a href="#contact" id="btnMail">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
            </a>
		</header>
  )
}

export default Header
