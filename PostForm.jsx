import React, { useState } from 'react';
import './PostForm.css';
import QuestionSection from './QuestionSection';
import ArticleSection from './ArticleSection';

function PostForm() {
  const [selectedType, setSelectedType] = useState('');

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div>
    <div className="post-form">
      <div className="label">New Post</div>
      <div className="input-group">
        <label className="select-label">Select Post Type:</label>
        <div className="radio-group">
          <input
            type="radio"
            id="question"
            name="postType"
            value="Question"
            onChange={handleTypeChange}
          />
          <label htmlFor="question">Question</label>
          <input
            type="radio"
            id="article"
            name="postType"
            value="Article"
            onChange={handleTypeChange}
          />
          <label htmlFor="article">Article</label>
        </div>
      </div>
      <hr/>
      <hr/>
     
    </div>
     {selectedType === 'Question' && <QuestionSection />}
     {selectedType === 'Article' && <ArticleSection />}
     </div>
  );
}

export default PostForm;