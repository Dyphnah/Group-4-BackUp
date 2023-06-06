import React, {useState} from 'react';
import './reviewForm.css';


const ReviewForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Review submitted:', { title, content, rating });
    // Reset the form
    setTitle('');
    setContent('');
    setRating(0);
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };


  // Delete Review

  // Review star
 
  const renderStars = () => {
    const stars = [];
    const labels = ['Poor', 'Fair', 'Average', 'Good', 'Excellent'];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? 'star filled' : 'star'}
          onClick={() => handleRatingChange(i)}
          title={labels[i - 1]}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };


  // POST REQUEST
  return (
  <div className="form-container">
   <form onSubmit={handleSubmit}>
    <h4><span>Unleash Your Inner Critic:</span></h4>
    <h1><strong>Review the Enthralling Book You Just Read.</strong></h1>
    <p>Express your opinions, share your reading experiences, and connect with fellow book enthusiasts. <br></br>
       Your review will help readers make informed decisions, discover new books, 
      and engage in meaningful discussions about their favorite reads.
    </p>
    <div>
      <label>
      <span> <strong>Which book would you like to review?</strong></span>
      </label>
      </div>
      <br></br>
      <div>
      <input type="text" 
        className="reviews-form"
        placeholder='Book title.'
        value={title} onChange={handleTitleChange} 
        required />
      </div>
      
      <br />

      <div>
        <textarea className="textarea" 
        value={content} 
        onChange={handleContentChange} 
        placeholder='Write your review.'
        required />
      </div>

      <br />

      <label className="stars">
        Rating: {renderStars()}
      </label>
      <br />
    <div>
      <button type="submit" className='submit-button' >Submit Review</button>
    </div>
    </form>
  </div>
  )};

export default ReviewForm;

