import React from "react";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import {BsInfoCircleFill} from 'react-icons/bs';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent 
        headerText = "Portfolio"
        icon={<BsInfoCircleFill size={40}/>}
      />
    </section>
  );
}  

export default Portfolio;