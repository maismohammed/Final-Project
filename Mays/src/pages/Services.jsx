import React, { useState } from 'react';
import '../services.css'
const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "Accounts",
      answer:
        "Enjoy flexible, secure and comprehensive payment solutions for your businiss.",
    },
    {
      question: "Cards",
      answer:
        "Enjoy flexible, secure and comprehensive payment solutions for your businiss.",
    },
    {
      question: "Financing",
      answer:
        "Enjoy flexible, secure and comprehensive payment solutions for your businiss.",
    },
    {
      question: "Loans",
      answer:
        "Enjoy flexible, secure and comprehensive payment solutions for your businiss.",
    },
    {
      question: "Money Transfer",
      answer:
        "Enjoy flexible, secure and comprehensive payment solutions for your businiss.",
    },
    {
      question: "Deposits",
      answer:
        "Enjoy flexible, secure and comprehensive payment solutions for your businiss.",
    },
  ];

  return (
    <div className="container_accirdion">
      <div className="accordion__wrapper5">
        <h1 className="accordion__title">Bank Services</h1>
        {accordionData.map((item, index) => (
          <div className="accordion5" key={index}>
            <div className="accordion__header" onClick={() => toggleAccordion(index)}>
              <h2 className="accordion__question">{item.question}</h2>
              <span className="accordion__icon">
                <i className={`ri ${activeIndex === index ? 'ri-subtract-fill' : 'ri-add-line'}`}>+</i>
              </span>

            </div>
            <div
              className="accordion__content"
              style={{ height: activeIndex === index ? 'auto' : '0' }}
            >
              <p className="accordion__answer">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
