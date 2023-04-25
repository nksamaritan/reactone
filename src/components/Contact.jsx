import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type='text' required placeholder='Your Name' />
          </div>
          <div>
            <label>Email</label>
            <input type='email' required placeholder='Your Email' />
          </div>
          <div>
            <label>Message</label>
            <textarea required placeholder='Your Message...'></textarea>
          </div>
          <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact