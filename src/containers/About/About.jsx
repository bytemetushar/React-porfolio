import React from "react";
import { useEffect, useState } from "react";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import './About.scss';
import {BsInfoCircleFill} from 'react-icons/bs';
import {Animate} from "react-simple-animate";
import {FaDev, FaDatabase, FaNodeJs, FaJava} from 'react-icons/fa';
import { useLocation } from "react-router-dom";


const personalDetails = [
  {
    label: "Name",
    value: "Tushar Varshney"
  },
  {
    label: "Email",
    value: "tusharvarshney620@gmail.com"
  },
  {
    label: "Location",
    value: "India"
  },
  {
    label: "Github",
    value: "sfsdfsdfsdfs"
  },
  {
    label: "LinkedIn",
    value: "sfsdfsdfsdfs"
  }
];

const AboutMe = "I am a passionate web developer with a strong foundation in HTML, CSS, and JavaScript. I have experience in building responsive and user-friendly websites. I am always eager to learn new technologies and improve my skills. My goal is to create impactful web applications that enhance user experience and solve real-world problems."

function About() { 

  const location = useLocation();
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    setPlayAnimation(false);
    setTimeout(() => setPlayAnimation(true), 100); // Small delay to reset animation
  }, [location.pathname]);

  return (
    <section id="about" className="about">
      <PageHeaderContent 
        headerText = "About Me"
        icon={<BsInfoCircleFill size={40}/>}
      />
      <div className="about__content">
        <div className="about__content__personal-wrapper">
          <Animate
            play={playAnimation}
            duration={1}
            delay={0.1}
            start={
            {
              transform: 'translateX(-900px)',
            }}
            end={
              {
                transform: 'translateX(0px)',
            }} 
          >
            
            <h3>Full-Stack Developer</h3>
            <p>{AboutMe}</p>
          
          </Animate>


          <Animate
            play={playAnimation}
            duration={1}
            delay={0.1}
            start={
            {
              transform: 'translateX(500px)',
            }}
            end={
              {
                transform: 'translateX(0px)',
            }} 
          >  
            <h3 className="personalInformationHeadertext">Personal Details: </h3>
            <ul> 
              {
                personalDetails.map((item,i)=>(
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate>
        </div>

      
        <div className="about__content__services-wrapper">
          <Animate
          play={playAnimation}
          duration={1}
          delay={0.1}
          start={
          {
            transform: 'translateX(600px)',
          }}
          end={
            {
              transform: 'translateX(0px)',
          }} 
          >
            <div className="about__content__services-wrapper__innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)"/>
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
              </div>
              <div>
                <FaNodeJs size={60} color="var(--yellow-theme-main-color)"/>
              </div>
              <div>
                <FaJava size={60} color="var(--yellow-theme-main-color)"/>
              </div>
            </div>
          </Animate>
        </div>  
      </div>
    </section>
  );
}  

export default About;