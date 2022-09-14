import React from "react";
import "../../styles/Services.css";
import serviceData from "../../data/serviceData";

const Services = () => {
  return (
    <div className="services">
      <div className="heading">
        <div>Services I Render</div>
        <p>Here are some of the services I render</p>
      </div>
      <div className="service-content">
        {serviceData.map((service, i) => (
            <div className="service" key={i}>
                <img src={service.icon} alt={service.title} />
                <div>{service.title}</div>
                <p>{service.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
