// Assignments.js

import React from 'react';
import '../styles/assignment.css';

const Assignments = () => {
  const assignments = [
    {
      id: 1,
      title: 'Assignment 1',
      questions: [
        'Question 1: Create a basic HTML document structure including the <html>, <head>, and <body> tags. Instructions: Write the HTML code for the basic structure of an HTML document. Ensure that the <head> section contains a <title> tag with the title "Sample HTML Document".',
        'Question 2: Create a hyperlink <a> that links to "https://www.example.com" with the anchor text "Visit Example". Instructions: Write the HTML code to create a hyperlink with the specified URL and anchor text.',
        'Question 3: Define a table <table> with two rows <tr> and two columns <td>. In each cell, write any text of your choice. Instructions: Write the HTML code to create a table with two rows and two columns, and fill each cell with any text.',
      ],
      Instructions: [
        'Instruction : For each question, you should provide the HTML code as the answer. They can either type it directly or use any preferred HTML editor and then copy-paste the code.',
      ],
      dueDate: '30-04-2024',
    },
    {
      id: 2,
      title: 'Assignment 2',
      questions: [
        'Question 1: How do you declare a variable in JavaScript?',
        'Question 2: What does the === operator do in JavaScript?',
        'Question 3: How do you declare a constant variable in JavaScript?',
      ],
      Instructions: [
        'Instruction : Each question can be answered succinctly in one line, providing a clear and concise understanding of the topic.'
      ],
      dueDate: '15-05-2024',
    },
  ];

  return (
    <div className="assignment-container">
      {assignments.map((assignment) => (
        <div className='assignment' key={assignment.id}>
          <h2>{assignment.title}</h2>
          <h3>Due Date: {assignment.dueDate}</h3>
          <h3>Questions:</h3>
          <ul>
            {assignment.questions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
          <h3>Answers:</h3>
          <ul>
            {assignment.Instructions.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
          <button>Submit</button>
        </div>
      ))}
    </div>
  );
}

export default Assignments;
