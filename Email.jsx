import React from 'react';
import './CSS/Email.css';
function Email() {
  return (
    <form action='/' class='email' method='post'>
      <div className='email'>
        <div class='emailtext'>SIGN UP FOR OUR DAILY INSIDER</div>
        <div class='emailtext'>
          <input
            type='text'
            name='email'
            class='emailinput'
            placeholder="Enter your email"
          />
        </div>
        <button class="emailbutton"type="submit">Subscribe</button>
      </div>
    </form>
  );
}

export default Email;
