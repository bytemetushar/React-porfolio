import React from "react";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import {BsInfoCircleFill} from 'react-icons/bs';
function Contact() {
  return (
    <section id="conatc" className="contact">
          <PageHeaderContent 
            headerText = "Contact Me"
            icon={<BsInfoCircleFill size={40}/>}
          />
        </section>
  );
}  

export default Contact;