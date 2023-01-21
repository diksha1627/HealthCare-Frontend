import React from 'react'
import './Form.css';
function Form() {
  return (
    <div>
      <div className="heath-wrapper">
  <div className="heath-title">
    <h1>Fill Details to Predict Diabetes Level</h1>
  </div>
  <div className="heath-contact-form">
    <div className="heath-input-fields">
      <input type="text" className="heath-input" placeholder="Blood Sugar Levels" />
      <input type="text" className="heath-input" placeholder="Refined Sugar Intake" />
      <input type="text" className="heath-input" placeholder="Bmi" />
      <input type="text" className="heath-input" placeholder="Weight" />
    </div>
    <div className="heath-msg">
      <textarea placeholder="Give more Information"></textarea>
      <div className="heath-btn">send</div>
    </div>
  </div>
</div> 
    </div>
  )
}

export default Form
