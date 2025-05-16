import React from "react";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import {BsInfoCircleFill} from 'react-icons/bs';

function Resume() {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent 
        headerText = "Resume"
        icon={<BsInfoCircleFill size={40}/>}
      />
    </section>
  );
}  

export default Resume;