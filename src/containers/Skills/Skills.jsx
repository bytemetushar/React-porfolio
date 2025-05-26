import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import {BsInfoCircleFill} from 'react-icons/bs';
import { skillsData } from "../../utils/skills";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import {Line} from 'rc-progress';
import './Skills.scss';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Skills() {
  const location = useLocation();
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    setPlayAnimation(false);
    setTimeout(() => setPlayAnimation(true), 100); // Small delay to reset animation
  }, [location.pathname]);


  return (
    <section id="skills" className="skills">
      <PageHeaderContent 
        headerText = "Skills"
        icon={<BsInfoCircleFill size={40}/>}
      />
      <div className="skills__content-wrapper">
        {
          skillsData.map((item,i)=>(
            <div className="skills__content-wrapper__inner-content" key={i}>
              <Animate
                play={playAnimation}
                duration={1}
                delay={0.03}
                start={
                {
                  transform: 'translateX(-900px)',
                }}
                end={
                  {
                    transform: 'translateX(0px)',
                }} 
              >
                <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
              </Animate>
                <div>
                  {
                    item.data.map((skillItem,j)=>(
                      <AnimateKeyframes
                        play
                        duration={2}
                        keyframes={["opacity: 1","opacity: 0"]}
                        iterationCount="1"
                      >
                        <div className="progressBar-wrapper" key={j}>
                          <p>{skillItem.skillsName}</p>
                          <Line
                            percent = {skillItem.percentage}
                            strokeWidth="2"
                            strokeColor="var(--yellow-theme-main-color)"
                            trailWidth="2"
                            strokeLinecap="square"
                            />
                        </div>
                      </AnimateKeyframes>
                    ))
                  }
                </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}  

export default Skills;