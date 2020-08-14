import React from 'react';
import Nav from '../Nav.jsx';


const Contact = () => {
  return (
    <div>
      <Nav/>
      <div className="Contact">
        <h3>Get in touch</h3>
        <p>If you want to get in touch or just say hi, you can leave a message below</p>
        {/* insert form */}
      </div>
      <div>
        <h3>Social</h3>
        <p>Feel free to check out my Github and Linkedin</p>
        {/* insert linked in and github svg with redirects */}
      </div>
    </div>
  )
}

export default Contact;