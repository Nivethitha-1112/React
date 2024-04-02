import { useState } from 'react'
import './App.css'

const Faqitem = ({question, answer}) => {
  const [show, setShow] = useState(false);
  const toggleshow = () => {
    setShow(!show);
  }
  return (
    <div className={`faq-item ${show ? "active" : ""}`}> 
      <div className="faq-item-header" onClick={toggleshow}>{question}</div>
      <div className="faq-item-body">
        <div className="faq-item-body-content"> 
          {answer}
        </div>
      </div>
    </div>
  );
};
const FaqAccordion = ({data}) => { //FaqAccordion is a component. Arrow Function? The arrow function in your code defines a React component (FaqAccordion) by returning JSX that describes the component's UI. 
  return (
    <div className="faq-accordion">
      <h2>FAQ'S</h2>
      {data. map((item) => (
      <Faqitem key={item.id} question={item.question} answer={item.answer}/>
      ))}
    </div>
  );
};

const data =[
  {
    id: 1, question: "What is React?", answer: "React is a JavaScript library for building user interfaces, developed by Facebook."
  },
  {
    id: 2, question: "What are the key features of React?", answer: "Key features of React include component-based architecture, virtual DOM for efficient updates, JSX syntax for describing UI elements, and one-way data flow."
  },
  {
    id: 3, question: "How do you define a React component?", answer: "A React component can be defined using either class components or functional components. Class components extend the React.Component class and define a render method. Functional components are defined as JavaScript functions that return JSX."
  }
]

function App() {
  return (
    <>
      <div className='App'>
        <FaqAccordion data={data}/>
      </div>
    </>
  )
}

export default App
