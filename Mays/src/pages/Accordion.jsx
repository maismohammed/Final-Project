import React, { useState } from 'react';
import '../accordion.css';
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "What are the documents required to open an account?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur quis minus animi, expedita nemo quo? Alias porro corporis possimus, ratione ipsum id repudiandae atque aperiam assumenda asperiores neque distinctio.",
    },
    {
      question: "What are the conditions for obtaining a loan?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur quis minus animi, expedita nemo quo? Alias porro corporis possimus, ratione ipsum id repudiandae atque aperiam assumenda asperiores neque distinctio.",
    },
    {
      question: "What are the actions to be taken if my card is lost?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur quis minus animi, expedita nemo quo? Alias porro corporis possimus, ratione ipsum id repudiandae atque aperiam assumenda asperiores neque distinctio.",
    },
    {
      question: "What are the types of cards?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt possimus ex laudantium, officia cum illum repellat enim accusantium, neque rerum tenetur, cupiditate exercitationem maxime! Quo eius voluptatibus quaerat dolor vitae?",
    },
    {
      question: "How can I inquire about my account balance?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores dolorem ab qui cum fuga quisquam eos quam deleniti dicta, esse laboriosam debitis eaque? Sequi ratione ducimus cupiditate ex exercitationem.",
    },
    {
      question: "What are the methods of money transfer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, harum numquam cupiditate, cumque sequi commodi quisquam fugit deserunt fuga, dolorum rem saepe accusantium dignissimos. Omnis aperiam repellendus explicabo eius aut.",
    },
    {
      question: "What are the types of bank accounts?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, facilis? Nisi aliquid harum eius sed velit mollitia magni quod, molestias accusamus? Officia sed adipisci autem. Iste ipsa tenetur tempore suscipit.",
    },
  ];

  return (
    <div className="container_accirdion">
      <div className="accordion__wrapper">
        <h1 className="accordion__title">Frequently Asked Questions</h1>
        {accordionData.map((item, index) => (
          <div className="accordion" key={index}>
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

export default Accordion;
