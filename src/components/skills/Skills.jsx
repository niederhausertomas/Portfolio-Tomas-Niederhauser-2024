import React, { useEffect, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".num");
      const bounding = element.getBoundingClientRect();

      if (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false); // Si el elemento ya no está visible, establece isVisible en false
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const valueDisplay = document.querySelector(".num");
      const endValue = parseInt(valueDisplay.getAttribute('data-val'));
      let startValue = 0;
      const interval = 4000;
      const duration = Math.floor(interval / endValue);

      const intervalId = setInterval(() => {
        startValue++;
        if (startValue <= endValue) {
          valueDisplay.textContent = startValue;
        } else {
          clearInterval(intervalId);
        }
      }, duration);

      return () => clearInterval(intervalId);
    }
  }, [isVisible]);
  
  
    return (
    <div>
        <div className="SalesForceContainer d-flex flex-wrap justify-content-evenly iconos text-center">
            <div className='containerSalesforceLogo'>
                <img className='SalesforceLogo' src="images/Salesforce.png" alt="Salesforce logo" />
            </div>
            <div className='containerSalesForceNumber'>
                <h3 className='Trailhead' >Trailhead <br/> Points</h3>
                <span className='num' data-val='1300'>000</span>
            </div>
        </div>
        <div className="containerIconos text-center">
            <ul className="d-flex flex-wrap justify-content-evenly iconos"> 
                <li className="icono">
                    <img src="images/html.png" alt="html logo"/>
                    <span>HTML</span>
                </li> 
                <li className="icono">
                    <img src="images/css.png" alt="CSS logo"/>
                    <span>CSS</span>
                </li>
                <li className="icono">
                    <img src="images/sass.png" alt="SASS logo"/>
                    <span>SASS</span>
                </li>
                <li className="icono">
                    <img src="images/Bootstrap.png" alt="Bootstrap logo"/>
                    <span>Bootstrap</span>
                </li>
                <li className="icono">
                    <img src="images/javascript.png" alt="javascript logo"/>
                    <span>Javascrip</span>
                </li>
                <li className="icono">
                    <img src="images/react.png" alt="React.js logo"/>
                    <span>React.js</span>
                </li>
                <li className="icono">
                    <img src="images/firebase.png" alt="Firebase logo"/>
                    <span>Firebase</span>
                </li>
                <li className="icono">
                    <img src="images/git.png" alt="Git logo"/>
                    <span>Git</span>
                </li>
                <li className="icono">
                    <img src="images/github.png" alt="Github logo"/>
                    <span>Github</span>
                </li>
                <li className="icono">
                    <img src="images/c++.png" alt="C++ logo"/>
                    <span>C++</span>
                </li>
                <li className="icono">
                    <img src="images/wordpress.png" alt="Wordpress logo"/>
                    <span>Wordpress</span>
                </li>
                <li className="icono">
                    <img src="images/vueJs.png" alt="Vue.js logo"/>
                    <span>Vue.js</span>
                </li>
                <li className="icono">
                    <img src="images/Mysql.png" alt="Mysql logo"/>
                    <span>MySql</span>
                </li>
                <li className="icono">
                    <img src="images/Typescript.png" alt="Typescript logo"/>
                    <span>Typescript</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Skills
