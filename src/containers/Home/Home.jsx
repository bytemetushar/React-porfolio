import "./Home.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Animate} from 'react-simple-animate';
function Home() {

  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  }

  const location = useLocation();
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    setPlayAnimation(false);
    setTimeout(() => setPlayAnimation(true), 100); // Small delay to reset animation
  }, [location.pathname]);

  return (
    <div>
      <section  id="home" className="home">
        <div className="home__text-wrapper">
          <h1>
             Hello, I'm Tushar Varshney
            <br /> 
            Full Stack Developer
          </h1>
        </div>
        <Animate
         play={playAnimation}
         duration={1.25}
         delay={0.3}
         start={
          {
            transform: 'translateY(550px)',
          }}
          end={
            {
              transform: 'translateY(0px)',
          }} 
        >
          <div className="home__contact-me">
            <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          </div>
        </Animate>
      </section>
    </div>
  );
}  

export default Home;