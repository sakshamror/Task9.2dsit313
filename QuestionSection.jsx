import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ReactMarkdown from 'react-markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css'; // Choose a theme that provides JavaScript syntax highlighting
import 'codemirror/mode/javascript/javascript.js'; // Use the JavaScript mode
import './QuestionSection.css';
import { firestoreDb } from './firebase';
import { onSnapshot, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';

function QuestionSection() {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');

  const [code, setCode] = useState('');

  const handleCodeMirrorChange = (editor, data, value) => {
    setCode(value);
  };
  const handlePostClick = async() => {
    try {
      await addDoc(collection(firestoreDb, 'cards'), {
          title,
          description,
          tag,
          code,
          Date: new Date()
         
      });

      // Clear input fields
      setTitle('');
      setDescription('');
      setCode('');
      setTag('');
  } catch (error) {
      console.error('Error adding card: ', error);
  }
    alert('Question posted successfully');
  };

  return (
    <div className="questionSection">
      <label className="questionLabel">What do you want to ask or share</label>
      <div className="input-container">
        <label className="Title-label">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Start your question with how, what, why, etc."
          className="title-input"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <hr />
      <label className='problem-label'>Describe your Problem</label>
      <textarea
        id="problem"
        className="problem-input"
        rows="7" // You can adjust the number of rows as needed
        onChange={(e) => setDescription(e.target.value)}
      />
      <label className='problem-label'>Write your code here</label>

      <div className="problem-input-container">
      
        <CodeMirror
          value={code}
          options={{
            mode: 'javascript', 
            theme: 'material', 
            lineNumbers: true,

          }}
          onBeforeChange={handleCodeMirrorChange}

        />
      </div>
   
      <hr />
      <div className="tags-area">
        <label className="tags">Tags</label>
        <input
          type="text"
          id="tags"
          placeholder="Please add up to 3 tags to describe what your code is about e.g., JavaScript"
          className="tags-input"
          onChange={(e) => setTag(e.target.value)}

        />
      </div>
      <button className='new-post-button' onClick={handlePostClick}>
        Post
      </button>
    </div>
  );
}

export default QuestionSection;
